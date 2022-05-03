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

const ProtectedRoute = ({children}) => {
   if (!localStorage.getItem("isAuthenticated")) {
     return <Navigate to="/signin" replace />;
   }

   return children ? children : <Outlet />;
};

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/welcome" element={<Home />} />
            <Route exact path="/" element={<ProtectedRoute><Work /></ProtectedRoute>} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
         </Routes>
      </BrowserRouter>
   )
}

export default App;
