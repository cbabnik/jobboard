// taken from https://github.com/LuminousIT/auth-protected-route/blob/master/src/View/Authentication/Signin.js

import { Authenticator } from '@aws-amplify/ui-react';

function Signin() {
  console.log("auth", localStorage.getItem("isAuthenticated"));

  return (
    <div>
      <div style={{width: '200px', height: '200px'}} />
      <div style={{alignItems:'center', display: 'flex', justifyContent: 'center'}}>
        <Authenticator hideSignUp >
          
        </Authenticator>
      </div>
    </div>
  );
}

export default Signin;