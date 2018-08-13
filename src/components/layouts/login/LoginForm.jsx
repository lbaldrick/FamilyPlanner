import React, {PureComponent} from 'react';

class LoginForm extends PureComponent {
  render() {
    <div className='login-form'>
      <div className='login-form_row'>
        <StandardTextField
          classes={this.props.classes}
          id={this.props.id},
          displayName={this.props.displayName}
          value={this.props.value},
          onChange={this.props.onChange}/>
      </div>
      <div className='login-form_row'>
        <div className='login-form_row_btns'>
          <StandardPrimaryButton <div className='login-form_row_btns_primary'>/>
          <StandardPrimaryButton <div className='login-form_row_btns_secondary'>/>
        </div>
      </div>
    </div>
  }
}
