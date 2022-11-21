// taken from https://github.com/LuminousIT/auth-protected-route/blob/master/src/View/Authentication/Signin.js

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { Navigate } from 'react-router';
import { Hub, Logger } from 'aws-amplify'

function Signin() {

  const logger = new Logger('Logger', 'INFO');
  const listener = (data) => {

    switch (data.payload.event) {
      case 'signIn':
        logger.info('user signed in');
        window.location.replace("https://indiasjobboard.link")
        break;
      case 'signUp':
        logger.info('user signed up');
        break;
      case 'signOut':
        logger.info('user signed out');
        break;
      case 'signIn_failure':
        logger.info('user sign in failed');
        break;
      case 'configured':
        logger.info('the Auth module is configured');
        break;
      default:
        logger.error('Something went wrong, look at data object', data);
    }
  }

  Hub.listen('auth', listener);

  return (
    <div>
      <div style={{width: '200px', height: '200px'}} />
      <div style={{alignItems:'center', display: 'flex', justifyContent: 'center'}}>
        <Authenticator 
          hideSignUp
        />
      </div>
      <div style={{alignItems:'center', display: 'flex', justifyContent: 'center'}}>
        <a href="https://indiasjobboard.link">Back to Home</a>
      </div>
    </div>
  );
}

export default Signin;