import React, { useEffect, useState } from 'react';

interface FuncProps {
  initNumber:number
}

var funcStyle = 'color:blue';
var funcId = 0;
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

  // classcomponent componentDidMount / componentDidUpdate 와 같은 역할(내부에 정의)
  // side-effect : render와 같은 주요 작업에서 벗어나는 작업들
  useEffect(function() {
    console.log('%cfunc => useEffect (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    // classcomponent componentWillUnmount 와 같은 역할(정리 : clean-up)
    // function() 반환 : render 이후 실행
    return function() {
      console.log('%cfunc => useEffect return ' + (++funcId), funcStyle);
    }
  });

  console.log('%cfunc => render ' + (++funcId), funcStyle);
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