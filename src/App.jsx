import { React } from 'react';
import './App.css';
import logo from './img/inconsistency.jpg';
import Countdown from './components/Countdown/Countdown';

function App() {

  return (
    <>
      <header>
        <img src={logo} alt="Incohaerens" height={"80px"} />
        <span className='title'>Incohaerens</span>
      </header>
      <main>
        <Countdown />
      </main>

    </>
  );
}

export default App;
