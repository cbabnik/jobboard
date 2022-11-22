import '@aws-amplify/ui-react/styles.css'
import React from 'react';
import '../../App.css';
import { v4 as uuidv4} from 'uuid';
import ReactMarkdown from 'react-markdown';

import { Hub, DataStore, AWSDate } from 'aws-amplify';
import { EffortLogs, Jobs } from '../../models'

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

class EffortLog extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         jobTitle: this.props.jobTitle,
         minutes: this.props.minutes,
         date: this.props.date
      }
   }

   render() {
      return (
         <div>
            <div className='effortLog' >
               <b>{new Date(this.state.date).toDateString()}: {this.state.minutes} minutes</b> ({this.state.jobTitle})
            </div>
         </div>
      )
   }
}

class Job extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         title: this.props.title,
         description: this.props.description,
         id: this.props.id,
         notes: this.props.notes,
         timeSpent: this.props.minutes,

         detailsVisible: false,
         enableLog: false,
         enableSave: false,

         notesVisible: false,

      }
   }

   onTextEdit = (ev) => {
      this.setState({
         enableSave: true,
      })
   }
   onLogNumberEdit = (ev) => {
      this.setState({
         enableLog: true,
      })
   }

   onSave = (ev) => {
      console.log(`note saved`)
      const notes = document.getElementById(`notes`).value
      this.setState({
         notes: notes,
         enableSave: false,
         date: Date.now()
      })
      this.saveJobNotes(notes)
   }

   onLog = (ev) => {
      console.log(`effort logged`)
      const effortCount = document.getElementById(`effortCount`).value
      const numEffort = Number(effortCount);

      if (!Number.isInteger(numEffort))
      {
         alert(`Only log integer numbers please. (not ${effortCount})`)
         return;
      }

      this.setState({
         enableLog: false,
         timeSpent: this.state.timeSpent+numEffort
      })
      this.saveEffort(numEffort);
   }

   toggleNotes = (ev) => {
      this.setState({
         notesVisible: !this.state.notesVisible
      })
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

   saveEffort = async (minutes) => {
      try {
         await DataStore.save(
            new EffortLogs({
               jobsID: this.state.id,
               minutes: minutes,
               date: (new Date()).toISOString().substring(0, 10)
            })
         )
      } catch (err) {
         console.log(err)
      }
   }

   details() {
      return (
         <div onClick={this.toggleDetails} className='detailsShading'>
            <div onClick={(ev)=>{ev.stopPropagation()}}className='jobDetails'>
               <h1>Task: {this.state.title}</h1>
               {this.state.notesVisible?"Notes":"Details"}
               {this.state.notesVisible?
               (<textarea id={`notes`} onChange={this.onTextEdit} defaultValue={this.state.notes} />):
               (<div className="divArea"><ReactMarkdown>{this.state.description}</ReactMarkdown></div>)
               }
               
               {this.state.notesVisible?
               <div>
                  <input type="button" onClick={this.onSave} value="Save Notes" disabled={!this.state.enableSave} />
                  <input type="button" onClick={this.toggleNotes} value="Show Details" />
               </div>:
               <input type="button" onClick={this.toggleNotes} value="Show Notes" />}
               <footer>
                  <div className="one">
                     Logged: <b>{this.state.timeSpent}</b> minutes
                  </div>
                  <hr />
                  <div className="two">
                     Log minutes &ensp;
                     <input id={`effortCount`} onChange={this.onLogNumberEdit} /> &ensp;
                     <input type="button" value="Log" onClick={this.onLog} disabled={!this.state.enableLog} />
                  </div>
                  <hr />
                  <div className="three">
                     File submission &ensp;
                     <input type="file" disabled /> &ensp;
                     <input type="button" value="Submit" disabled />
                  </div>
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
               {this.state.description&&this.state.description.length > 160?
                this.state.description.slice(0,160)+"...":
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

   async refresh() {
      // bug! runs twice https://linguinecode.com/post/avoid-react-componentdidmount-called-multiple-times
      // bug first time is empty?? (only if not auth)

      try {
         const jobs = await DataStore.query(Jobs);
         const effort = await DataStore.query(EffortLogs);
         console.log(jobs)
         console.log(effort)
         this.setState({
            jobs: [0,1,2,3].map(col => jobs.filter(j => j.column === col).map(j => this.job(j, effort))),
            effort: effort.map(e => this.effortLog({jobTitle: jobs.find(j => j.id === e.jobsID).title , ...e})).sort((a,b) => a.date > b.date),
            totalTime: effort.map(e => e.minutes).reduce((a,b)=>a+b,0)
         })
      } catch (error) {
         console.log("Error fetching jobs", error)
      }
   }
   
   async componentDidMount() {
      console.log("Work mounted!");
      this.refresh();
      const listener = Hub.listen("datastore", async hubData => {
         const  { event, data } = hubData.payload;
         if (event === "ready") {
            this.refresh();
         }
      })
      DataStore.start();
   }
   
   job = (jobData, effort) => {
      const key = uuidv4();
      const j = <Job 
         title={jobData.title}
         description={jobData.description}
         key={key}
         notes={jobData.notes}
         id={jobData.id}
         minutes={effort.filter(e => e.jobsID === jobData.id).map(e => e.minutes).reduce((a,b) => a+b, 0)}
         grab={(ev) => this.grabJob(ev, key)}
         drop={(ev) => this.dropJob(ev)}
      />
      return j
   }

   effortLog = (effortLogData) => {
      const key = uuidv4();
      return <EffortLog
         jobTitle={effortLogData.jobTitle}
         minutes={effortLogData.minutes}
         date={effortLogData.date}
         key={key}
      />
   }

   moveJob = (jobKey, toCol) => {
      console.log("moving job " + jobKey)
      const newJobs = this.state.jobs.map((a)=>[...a])
      // remove from old position (or quit if the column is the same)
      let job;
      for (let i = 0; i < newJobs.length; i++) {
         job = newJobs[i].find((j)=>j.key===jobKey)
         if ( job ) {
            if (i === toCol) return;
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
      const colWidth = pageWidth/5
      const centerX = Math.floor(ev.pageX/colWidth)*colWidth + colWidth/2
      //console.log("colWidth " + colWidth)
      console.log("grabbed at " + ev.pageX +
                  ", center grabbed from " + centerX);
      this.setState({grabOffset: centerX-ev.pageX})
      this.setState({grabbedJob: jobKey})
   }

   dropJob = (ev) => {
      ev.preventDefault();
      const droppedInto = Math.floor((ev.pageX+this.state.grabOffset) / (getWidth()/5))
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
      var initialOwed = 1000
      var dollarsPerHour = 15
      var totalMinutesRequired = Math.trunc(60*initialOwed/dollarsPerHour)
      var timeLeft = totalMinutesRequired - this.state.totalTime;

      var paid = (this.state.totalTime / 60 * dollarsPerHour).toFixed(2);

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
                  <div className='doneColumn'>
                     <h4>Done:</h4>
                     <hr />
                     <div className='doneColumn2'>
                        {this.state.jobs[3]}
                     </div>
                  </div>
                  <div className='jobsColumn'>
                     <h4>Effort:</h4>
                     <hr />
                     {Math.trunc(this.state.totalTime/60)} hours, {this.state.totalTime%60} minutes spent.<br/>
                     <b>{Math.trunc(timeLeft/60)} hours, {timeLeft%60} minutes</b> remaining.<br/>
                     <small>(At 15$ per hour)</small>
                     <hr />
                     Cash owing: <b>${1000 - paid}</b>
                     <hr />
                     Records:
                     <hr />
                     {this.state.effort}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Work;
