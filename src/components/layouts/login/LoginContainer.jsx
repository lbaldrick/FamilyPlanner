import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginHeader from "./LoginHeader.jsx";
import LoginBody from "./LoginBody.jsx";
import LoginFooter from "./LoginFooter.jsx";
import {attemptRequestCode, login, updateCode, updateUsername} from "../../../redux/actions/login/Actions";
import LoginForm from "./LoginForm";
import RequestCodeForm from "./RequestCodeForm";
import {getCode, getUsername, getRequestCodeFailure, getRequestCodeInProgress, getRequestCodeSuccess} from "../../../redux/reducers/login/Selectors";

const CODE_KEY = "CODE_KEY";
const LOGIN_KEY = "LOGIN_KEY";

const mapStateToProps = (state) => {
  return {
    codeRequestInProgress: getRequestCodeInProgress(state),
    codeRequestFailure: getRequestCodeFailure(state),
    codeRequestSuccessful: getRequestCodeSuccess(state),
    email: getUsername(state),
    code: getCode(state),
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
      onRequestCode: (email) => {
          dispatch(attemptRequestCode(email));
      },
      onLogin: (email, code) => {
          dispatch(login(email, code));
      },
      onEmailChange: (email) => {
          dispatch(updateUsername(email))
      },
      onCodeChange: (code) => {
          dispatch(updateCode(code))
      },
  }
};

class LoginContainer extends Component {

    handleRequestCode = (email) => {
        this.props.onRequestCode(email);
    };

    handleLogin = (code) => {
        this.props.onLogin(this.props.email, code);
    };

    handleOnSubmit = (key, value) => {
        switch(key) {
            case CODE_KEY:
                return this.handleRequestCode(value);
            case LOGIN_KEY:
                return this.handleLogin(value);
        }
    };

    handleOnChange = (key, value) => {
        switch(key) {
            case CODE_KEY:
                return this.props.onCodeChange(value);
            case LOGIN_KEY:
                return this.props.onEmailChange(value);
        }
    };

    handleOnCancel = (key, value) => {
        switch(key) {
            case CODE_KEY:
                return ;
            case LOGIN_KEY:
                return ;
        }
    };

    render() {
        const LoginComponent = getLoginComponent(
            this.props.codeRequestInProgress,
            this.props.codeRequestSuccessful,
            LOGIN_KEY,
            CODE_KEY,
            this.handleOnChange,
            this.handleOnSubmit,
            this.handleOnCancel,
            this.props.code,
            this.props.email,
            );

        return <div className='login-container'>
            <LoginHeader/>
            <LoginBody>
                {LoginComponent}
            </LoginBody>
            <LoginFooter/>
            <div className='login-container_footer'>
            </div>
        </div>;
    }
}

const getLoginComponent = (codeRequestInProgress, codeRequestSuccessful, emailTextFieldId,
                           codeTextFieldId, onChange, onSubmit, onCancel, codeValue, emailValue) => {
    if (codeRequestInProgress) {
        return <div className="in-progress" ></div>
    } else if (codeRequestSuccessful) {
        return <LoginForm textFieldId={emailTextFieldId} value={emailValue} onChange={onChange} onSubmit={onSubmit} onCancel={onCancel}/>
    }

    return <RequestCodeForm textFieldId={codeTextFieldId} value={codeValue} onChange={onChange} onSubmit={onSubmit} onCancel={onCancel}/>

};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
