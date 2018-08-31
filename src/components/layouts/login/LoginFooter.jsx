import React, {PureComponent} from 'react';

class LoginFooter extends PureComponent {
  render() {
      return <div className='login-footer'>
      {this.props.children}
    </div>
  }
}

export default LoginFooter;
