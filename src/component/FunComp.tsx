import React, { useState } from 'react';

interface FuncProps {
  initNumber:number
}

// function component : 자기자신이 render() method
export default function FuncComp(props:FuncProps) {
  // // useState({defaultValue}) : state 값의 기본 값 대입하여 설정
  // var numberState = useState(props.initNumber);
  // // useState()[0] : state value
  // var number = numberState[0];
  // // useState()[1] : set state method
  // var setNumber = numberState[1];

  var [number, setNumber] = useState(props.initNumber);
  var [_date, setDate] = useState((new Date()).toString());

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input
          type="button" 
          value="random" 
          onClick={function() {setNumber(Math.random())}}
          // arrow function
          // onClick={() => {setNumber(Math.random())}}
        />
        <input
          type="button" 
          value="date" 
          onClick={() => {setDate((new Date()).toString())}}
        />
    </div>
  )
}