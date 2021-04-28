import React from 'react';
import './App.css';
import FuncComp from './component/FunComp';
import ClassComp from './component/ClassComp';

function App() {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <FuncComp />
      <ClassComp />
    </div>
  );
}

export default App;
