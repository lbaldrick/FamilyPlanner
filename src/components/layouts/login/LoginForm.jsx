import React, {PureComponent} from 'react';
import StandardPrimaryButton from "../../library/mui/button/StandardPrimaryButton";
import StandardTextField from "../../library/mui/input/StandardTextField";
import StandardSecondaryButton from "../../library/mui/button/StandardSecondaryButton";

class LoginForm extends PureComponent {
  render() {
    return <div className='login-form'>
      <div className='login-form_row'>
        <StandardTextField
          classes={this.props.classes}
          id={this.props.textFieldId}
          displayName={"Unique code:"}
          value={this.props.value}
          onChange={this.props.onChange}/>
      </div>
      <div className='login-form_row'>
        <div className='login-form_row_btns'>
          <StandardPrimaryButton/>
          <StandardSecondaryButton/>
        </div>
      </div>
    </div>
  }
}

export default LoginForm;
