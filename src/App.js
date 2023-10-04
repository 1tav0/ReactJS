import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';
import notes from './notes'
import Login from './Components/Login';
import State from './Components/State';
function App() {
  return (
    <div className="app">
      {/* <Header />
      {notes.map(note => {
        return <Note
          title={note.title}
          content={note.content}
          key={note.key} />
        })
      }
      <Footer className="centered__footer"/> */}
      {/* <Login /> */}
      <State />
    </div>
  )
}

export default App;
