interface FuncProps {
  initNumber:number
}

// function component : 자기자신이 render() method
export default function FuncComp(props:FuncProps) {
    return (
      <div className="container">
        <h2>function style component</h2>
        <p>Number : {props.initNumber}</p>
      </div>
    )
}