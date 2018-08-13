import auth0 from 'auth0';

class AuthenticationService {
  auth0 = new auth0.WebAuth({
     domain: 'family-planner.eu.auth0.com',
     clientID: '964vNviXzzobbXpj2Z7E51WtoIzo3rk8',
     redirectUri: 'http://localhost:3000/callback',
     audience: 'https://family-planner.eu.auth0.com/userinfo',
     responseType: 'token id_token',
     scope: 'openid'
 });

 passwordlessLogin(email) {
   return new Promise((resolve, reject) => {
     this.auth0.passwordlessStart({
       connection: 'email',
       send: 'code',
       email,
     }, function (err,res) {
       if (err) {
         console.log(`Error ${JSON.stringify(err)}`);
         reject(err);
       } else {
         console.log(`Success ${JSON.stringify(res)}`);
         resolve(res);
       }
     });
   })

 };

 handleAuthentication() {
   return new Promise((resolve, reject) => {
     this.auth0.parseHash({ hash: window.location.hash }, function(err, authResult) {
        if (err) {
          return reject(err);
        }

        this.auth0.userInfo(authResult.accessToken, function(err, user) {
          console.log(`access token ${authResult.accessToken}`);
          this._setSession(authResult);
          return resolve(authResult);
        });
      });
   });

 }

  _setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    history.replace('/home');
  }

}
