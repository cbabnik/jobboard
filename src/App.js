import '@aws-amplify/ui-react/styles.css'
import React from 'react';

import Work from "./View/Work"
import Home from "./View/Home"
import Signin from "./View/Authentication/signin"

import { BrowserRouter, Routes, Outlet, Navigate, Route } from "react-router-dom"

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// todo:
// protect / route
// change /welcome to / and / to /work (after welcome page is ready)

let userTemp;

const ProtectedRoute = ({children}) => {
   console.log("Welcome ", userTemp.username)
   if (!userTemp) {
     return <Navigate to="/signin" replace />;
   }

   return children ? children : <Outlet />;
};

class App extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         user: null,
         auth: false
      }
   }

   async componentDidMount() {
      this.getAuth();
   }

   async getAuth() {
      try {
         const user = await Amplify.Auth.currentAuthenticatedUser()
         userTemp = user;
         this.setState({
            user: user,
            auth: true,
         })
      } catch (err) {
         console.log("Auth error: ", err)
         this.setState({
            user: null,
            auth: true,
         })
      }
   }

   render() {
      return this.state.auth? (
         <BrowserRouter>
            <Routes>
               <Route exact path="/signin" element={<Signin />} />
               <Route exact path="/welcome" element={<Home />} />
               <Route exact path="/" element={<ProtectedRoute><Work /></ProtectedRoute>} />
               <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
         </BrowserRouter>
      ) : (<div>Fetching Credentials...</div>)
   }
}

export default App;
