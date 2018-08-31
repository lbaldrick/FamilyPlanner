import React, {PureComponent} from 'react';

class LoginHeader extends PureComponent {
  render() {
    return <div className='login-header'>
      {this.props.children}
    </div>
  }
}

export default LoginHeader;
