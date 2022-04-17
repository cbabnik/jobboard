import logo from './logo.svg';
import './App.css';

import '@aws-amplify/ui-react/styles.css'
import { Header } from "./ui-components";
import { Sidebar } from "./ui-components";

function App() {
   return (
      <div>
         <header>
            <Header />
         </header>
         <div id="sidebar">
            <Sidebar />
         </div>
      </div>
   );
}

export default App;
