import React from 'react';

interface ClassProps {
  initNumber:number
}

interface ClassState {
  number:number,
  _date:string
}
var classStyle = 'color:red';
// class component : render() method 필요로 함
export default class ClassComp extends React.Component<ClassProps, ClassState> {
  state:ClassState = {
    number:this.props.initNumber,
    _date:(new Date()).toString()
  }

  // render 이전 실행
  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }
  // render 이후 실행
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }
  // render 호출할 필요가 있는지 결정
  // true : render 호출 / false : render 호출 X
  shouldComponentUpdate(nextProps:any, nextState:any) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  // 상태 변경 후 render 이전 실행
  componentWillUpdate(nextProps:any, nextState:any) {
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  // 상태 변경 후 render 이후 실행
  componentDidUpdate(nextProps:any, nextState:any) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  // unmount 이후 실행
  componentWillUnmount() {
    console.log('%cclass => componentWillUnmount', classStyle);
  }
  

  clickEventHandle() {
    this.setState({number:Math.random()});
  }

  // state 값이 바뀜에 따라 render() 호출
  // => 바뀐 결과 반영
  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state._date}</p>
        <input
          type="button" 
          value="random" 
          onClick={this.clickEventHandle.bind(this)}
          // arrow function
          // onClick={() => this.setState({number:Math.random()})}
        />
        <input
          type="button" 
          value="date" 
          onClick={() => this.setState({_date:(new Date()).toString()})}
        />
      </div>
    )
  }
}