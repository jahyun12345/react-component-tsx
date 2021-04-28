import React from 'react';

interface ClassProps {
  initNumber:number
}

interface ClassState {
  number:number
}

// class component : render() method 필요로 함
export default class ClassComp extends React.Component<ClassProps, ClassState> {
  state:ClassState = {
    number:this.props.initNumber
  }

  clickEventHandle() {
    this.setState({number:Math.random()});
  }

  // state 값이 바뀜에 따라 render() 호출
  // => 바뀐 결과 반영
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <input
          type="button" 
          value="random" 
          onClick={this.clickEventHandle.bind(this)}
          // arrow function
          // onClick={() => this.setState({number:Math.random()})}
        />
      </div>
    )
  }
}