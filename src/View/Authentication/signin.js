// taken from https://github.com/LuminousIT/auth-protected-route/blob/master/src/View/Authentication/Signin.js

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { Navigate } from 'react-router';

function Signin() {
  
  return (
    <div>
      <div style={{width: '200px', height: '200px'}} />
      <div style={{alignItems:'center', display: 'flex', justifyContent: 'center'}}>
        <Authenticator hideSignUp/>
      </div>
      <div style={{alignItems:'center', display: 'flex', justifyContent: 'center'}}>
        <a href="https://indiasjobboard.link">Back to Home</a>
      </div>
    </div>
  );
}

export default Signin;