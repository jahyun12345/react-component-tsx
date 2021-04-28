import React from 'react';
import './App.css';
import FuncComp from './component/FunComp';
import ClassComp from './component/ClassComp';

function App() {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <FuncComp initNumber={12345} />
      <ClassComp initNumber={12345} />
    </div>
  );
}

export default App;
