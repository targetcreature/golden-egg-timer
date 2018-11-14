import React from "react"
import lifecycle from "react-pure-lifecycle"

const componentDidMount = () => {}

const Timer = (props) => {
  let options = []
  for(let i=1; i<61; i++){
    options.push(
      <option key={i} value={i}>{i}</option>
    )
  }
  return(
    <>
      <select
        className="timeSelect"
        value={props.lastTime}
        onChange={props.onChange}
      >
        {options}
      </select>
      <select
        className="secondSelect"
        value={props.timeType}
        onChange={props.timeTypeOnChange}
      >
        <option key={"sec"}>sec</option>
        <option key={"min"}>min</option>
      </select>
    </>
      )
}

const methods = {
  componentDidMount
}

export default lifecycle(methods)(Timer)
