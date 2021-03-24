import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import Notes from "./components/Notes"; //YT
import Members from "./components/Members"; //BREAKS
//import NoteForm from "./components/NotesForm"; //YT
import MembersForm from "./components/MembersForm"; //BREAKS
//import data from "./data"; //YT
import './index.css';

// import App from './App'; //React

function App(){

  const [members, setMembers] = useState([
    {
      id: 1,
      title: "Happy quote", //memberName?
      body: "reden ist silber" //member descript?
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      title: member.title,
      body: member.body,
    };
    setMembers([...members, newMember]);
  };

  return(
    <div className="App">
      <h1>My Members</h1>
      <MembersForm addNewMember = {addNewMember} title='hardcoded'/>
      <Members members={members} />
    </div> //memo: assuming .css in className="App" is ommited
  );
};

const rootElement = document.getElementById('root'); //YT
ReactDOM.render(<App />, rootElement); //YT

// React--
// import reportWebVitals from './reportWebVitals'; 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
