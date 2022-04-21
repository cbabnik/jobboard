import '@aws-amplify/ui-react/styles.css'
import React from 'react';

import Work from "./View/Work"
import Home from "./View/Home"
import Signin from "./View/Authentication/signin"

import { BrowserRouter, Routes, Route } from "react-router-dom"

// todo:
// protect / route
// change /welcome to / and / to /work (after welcome page is ready)

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/welcome" element={<Home />} />
            <Route exact path="/" element={<Work />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App;
