import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';
function App() {
  return (
    <div className="app">
      <Header />
      <Note />
      <Footer className="centered__footer"/>
    </div>
  )
}

export default App;
