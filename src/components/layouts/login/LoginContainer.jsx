import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {

  }

}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
class LoginContainer extends Component {

    render() {
        return <div className='login-container'>
         <LoginHeader />
          <LoginBody>
            <LoginForm/>
          </LoginBody>
           <LoginFooter />
          </div>
          <div className='login-container_footer'>
          </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
