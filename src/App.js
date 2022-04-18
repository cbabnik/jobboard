import '@aws-amplify/ui-react/styles.css'
import './App.css';

// TODO:
// fix whitespace at top
// move styling into CSS
// select some better fonts (lesson)
// replace text with Figma components
// resize width of filters to largest filter
// resize heights dynamically

function App() {
   return (
      <div className='app'>
         <header className='header'>
            <h1>IndiasJobBoard</h1>
         </header>
         <div className='sidebar'>
            <h2>Filters</h2>
         </div>
         <div className='main'>
            <div className='jobsHeader'>
               <h2>Jobs</h2>
            </div>
            <div className='jobsColumn'>
               <h4>Todo:</h4>
            </div>
            <div className='jobsColumn'>
               <h4>In Progress:</h4>
            </div>
            <div className='jobsColumn'>
               <h4>Done:</h4>
            </div>
         </div>
      </div>
   );
}

export default App;
