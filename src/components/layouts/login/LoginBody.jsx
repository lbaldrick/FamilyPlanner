import React, {PureComponent} from 'react';

class LoginBody extends PureComponent {
  render() {
    <div className='login-body'> 
      {this.props.children}
    </div>
  }
}

export default LoginBody
