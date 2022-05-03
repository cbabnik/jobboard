import '@aws-amplify/ui-react/styles.css'
import React from 'react';
import '../../App.css';
import { v4 as uuidv4} from 'uuid';

import { DataStore } from 'aws-amplify';
import { Jobs } from '../../models'

// TODO:
// fix whitespace gap
// select some better fonts (lesson)
// replace text with Figma components
// resize width of filters to largest filter
// resize heights dynamically
// break off  into  their own files
// make jobs look like sticky notes
// dotted lines for dropped component
// duplicate state
// fix indenting divs

function getWidth() {
   return Math.max(
     document.body.scrollWidth,
     document.documentElement.scrollWidth,
     document.body.offsetWidth,
     document.documentElement.offsetWidth,
     document.documentElement.clientWidth
   );
 }

class Job extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         title: this.props.title,
         description: this.props.description,
         id: this.props.id,
         notes: this.props.notes,
         timeSpent: 0,

         detailsVisible: false,
         enableLog: false,
         enableSave: false,

      }
   }

   onTextEdit = (ev) => {
      this.setState({
         enableSave: true,
      })
   }

   onSave = (ev) => {
      console.log(`note saved`)
      const notes = document.getElementById(`notes`).value
      this.setState({
         notes: notes,
         enableSave: false,
      })
      this.saveJobNotes(notes)
   }

   saveJobNotes = async (notes) => {
      const original = await DataStore.query(Jobs, this.state.id);

      try {
         await DataStore.save(
            Jobs.copyOf(original, updated => {
               updated.notes = notes;
            })
         );
      } catch (err) {
         console.log(err)
      }
   }

   details() {
      return (
         <div onClick={this.toggleDetails} className='detailsShading'>
            <div onClick={(ev)=>{ev.stopPropagation()}}className='jobDetails'>
               <h1>Task: {this.state.title}</h1>
               Details
               <textarea value={this.state.description} disabled />
               Notes
               <textarea id={`notes`} onChange={this.onTextEdit} defaultValue={this.state.notes} />
               <input type="button" onClick={this.onSave} value="Save Notes" disabled={!this.state.enableSave} />
               <footer>
                  <hr />
                  Log minutes (for now can do this in notes) &ensp;
                  <input disabled /> &ensp;
                  <input type="button" value="Log" disabled={!this.state.enableLog} />
                  <hr />
                  File submission &ensp;
                  <input type="file" disabled /> &ensp;
                  <input type="button" value="Submit" disabled />
               </footer>
            </div>
         </div>
      )
   }

   toggleDetails = () => {
      this.setState({
         detailsVisible: !this.state.detailsVisible
      })
   }

   render() {
      return (
         <div>
            <div 
               className='job' 
               onClick={this.toggleDetails}
               draggable
               onDragStart={this.props.grab}
               onDragEnd={this.props.drop}
            >
               <h4>{this.state.title}</h4>
               {this.state.description.length > 120?
                this.state.description.slice(0,120)+"...":
                this.state.description}
            </div>
            {this.state.detailsVisible?this.details():null}
         </div>
      )
   }
}

class Work extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         jobs: [[],[],[],[]]
      }
   }

   async componentWillUnmount() {
      console.log("Work unmounting!");
   }
   async componentDidMount() {
      console.log("Work mounted!");
      // bug! runs twice https://linguinecode.com/post/avoid-react-componentdidmount-called-multiple-times

      try {
         const jobs = await DataStore.query(Jobs);
         console.log(jobs)
         this.setState({
            jobs: [0,1,2,3].map(col => jobs.filter(j => j.column === col).map(j => this.job(j)))
         })
      } catch (error) {
         console.log("Error fetching jobs", error)
      }

   }
   
   job = (jobData) => {
      const key = uuidv4();
      const j = <Job 
         title={jobData.title}
         description={jobData.description}
         key={key}
         notes={jobData.notes}
         id={jobData.id}
         grab={(ev) => this.grabJob(ev, key)}
         drop={(ev) => this.dropJob(ev)}
      />
      return j
   }

   moveJob = (jobKey, toCol) => {
      console.log("moving job " + jobKey)
      const newJobs = this.state.jobs.map((a)=>[...a])
      // remove from old position
      let job;
      for (let i = 0; i < newJobs.length; i++) {
         job = newJobs[i].find((j)=>j.key===jobKey)
         if ( job ) {
            newJobs[i] = newJobs[i].filter((j)=>j.key!==jobKey)
            break;
         }
      }
      // add to new position
      newJobs[toCol].push(job)
      this.setState({
         jobs: newJobs
      })
   }
   
   grabJob = (ev, jobKey) => {
      const pageWidth = getWidth()
      const colWidth = pageWidth/4
      const centerX = Math.floor(ev.pageX/colWidth)*colWidth + colWidth/2
      //console.log("colWidth " + colWidth)
      console.log("grabbed at " + ev.pageX +
                  ", center grabbed from " + centerX);
      this.setState({grabOffset: centerX-ev.pageX})
      this.setState({grabbedJob: jobKey})
   }

   dropJob = (ev) => {
      ev.preventDefault();
      const droppedInto = Math.floor((ev.pageX+this.state.grabOffset) / (getWidth()/4))
      console.log("dropped at " + ev.pageX + 
                  ", center dropped at " + (ev.pageX + this.state.grabOffset) + 
                  ", col " + droppedInto)

      this.moveJob(this.state.grabbedJob, droppedInto)
      this.saveJobCol(this.state.grabbedJob, droppedInto)
   }

   findJob = (jobKey) => {
      let job;
      for (let i = 0; i < this.state.jobs.length; i++) {
         job = this.state.jobs[i].find((j)=>j.key===jobKey)
         if ( job ) {
            return job
         }
      }
   }

   saveJobCol = async (jobKey, col) => {
      const job = this.findJob(jobKey)
      const dynamoId = job.props.id
      const original = await DataStore.query(Jobs, dynamoId);
      try {
         await DataStore.save(
            Jobs.copyOf(original, updated => {
               updated.column = col;
            })
         );
      } catch (err) {
         console.log(err)
      }
      console.log("Saving job col")
   }

   saveJobNotes = async (notes) => {
      const original = await DataStore.query(Jobs, this.state.id);

      try {
         await DataStore.save(
            Jobs.copyOf(original, updated => {
               updated.notes = notes;
            })
         );
      } catch (err) {
         console.log(err)
      }
   }


   render() {
      return (
         <div className='app'>
            <header className='header'>
               <h1>IndiasJobBoard</h1>
            </header>
            {/*
            <div className='sidebar'>
               <h2>Filters</h2>
            </div>
            */}
            <div className='main'>
               <div className='jobsColumnsBox'>
                  <div className='jobsColumn'>
                     <h4>Todo:</h4>
                     <hr />
                     {this.state.jobs[0]}
                  </div>
                  <div className='jobsColumn'>
                     <h4>In Progress:</h4>
                     <hr />
                     {this.state.jobs[1]}
                  </div>
                  <div className='jobsColumn'>
                     <h4>On Hold:</h4>
                     <hr />
                     {this.state.jobs[2]}
                  </div>
                  <div className='jobsColumn'>
                     <h4>Done:</h4>
                     <hr />
                     {this.state.jobs[3]}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Work;
