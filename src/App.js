import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';
import CreateArea from './Components/CreateArea';
import notes from './notes'
import Login from './Components/Login';
import State from './Components/State';
import StateHooks from './Components/StateHooks'
import StateHooks2 from './Components/StateHooks2';
import DestructuringSamples from './challenges/DestructuringSamples'
import EventHandling from './Components/EvenHandling'
import Spread from './Components/Spread';
import { useState } from 'react';
function App() {
  const [notes, setNotes] = useState([]);
  
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  return (
    <div className="app">
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />
      })}
      <Footer className="centered__footer"/>
      {/* <Login /> */}
      {/* <State /> */}
      {/* <StateHooks /> */}
      {/* <StateHooks2 /> */}
      {/* <DestructuringSamples /> */}
      {/* <EventHandling /> */}
      {/* <Spread /> */}
    </div>
  )
}

export default App;
