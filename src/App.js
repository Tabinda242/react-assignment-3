import React from 'react';
import logo from './logo.svg';
import './App.css';
import Practice from './practice.js';

function App() {
  return (
    <div className="App">
     <Practice dishName="Beef Biryani" sweetDish="Kheer"/>
     <hr />
     <Practice dishName="Chicken Karahi" sweetDish="Custurd"/>
    </div>
  );
}

export default App;
