import React from 'react';
import Header from './components/Header/Header';
import "./App.css"
import Exp from './components/Exp/Exp';
import Contact from './components/Contact/Contact';
import Aboutus from "./components/Aboutus/Aboutus"


const App = () => {
  return (
    <div className='app'>
      <Header />
      <Exp/>
      <Aboutus/>
      <Contact/>
    </div>
  )
}


export default App