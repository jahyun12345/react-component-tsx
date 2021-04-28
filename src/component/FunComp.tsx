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
      console.log('%cfunc => useEffect return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    }
  });
  
  // classcomponent componentDidMount 와 같은 역할(내부에 정의)
  useEffect(function() {
    console.log('%cfunc => useEffect (componentDidMount) ' + (++funcId), funcStyle);
    return function() {
      console.log('%cfunc => useEffect return (componentWillUnmount) ' + (++funcId), funcStyle);
    }
  // [] : 빈 배열인 경우 component 생성 될 때 한 번만 호출
  }, []);

  // [] 내의 상태 값인 number가 변경되었을 때에만 useEffect 내의 call-back 함수 호출 됨
  useEffect(function() {
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    return function() {
      console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    }
  }, [number]);

  // [] 내의 상태 값인 _date가 변경되었을 때에만 useEffect 내의 call-back 함수 호출 됨
  useEffect(function() {
    console.log('%cfunc => useEffect _date (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    return function() {
      console.log('%cfunc => useEffect _date return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    }
  }, [_date]);

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