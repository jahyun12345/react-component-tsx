import React, { useState } from 'react';
import './App.css';
import FuncComp from './component/FunComp';
import ClassComp from './component/ClassComp';

export default function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello world</h1>
      <input 
        type="button"
        value="remove func"
        onClick={() => setFuncShow(false)}
      />
      <input 
        type="button"
        value="remove class"
        onClick={() => setClassShow(false)}
      />
      {funcShow && <FuncComp initNumber={12345} />}
      {classShow && <ClassComp initNumber={12345} />}
    </div>
  );
}