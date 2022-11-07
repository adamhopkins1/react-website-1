import './App.css';
import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Jumbotron from './components/Jumbotron';



function App() {
  return (
    <div className="App">
     <Header/>
     <Carousel/>
     <Jumbotron/>
    </div>
  );
}

export default App;
