import './App.css';
import GameContainer from './GameContainer';
import TopNav from './TopNav';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import ContactForm from './ContactForm';
import CreateNewGameForm from './CreateNewGameForm';

function App() {
  // json-server -p 3000 db.json (to view api in browser)

  return (
    <div className="App">
      <TopNav/>
      <Routes>
        <Route exact path='/' element={<GameContainer/>}></Route>
        <Route exact path='about' element={<About/>}></Route>
        <Route exact path='contact-us' element={<ContactForm/>}></Route>
        <Route exact path='create-form' element={<CreateNewGameForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
