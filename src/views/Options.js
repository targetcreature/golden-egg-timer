import React from "react"
import people from "../data/people"
import lifecycle from "react-pure-lifecycle"

export function Timer(props){
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

const componentDidMount = () => console.log("tests")
const methods = {
  componentDidMount
}

function People(props){

  const list = Object.keys(people)
  const options = []
  for(let i=0; i<list.length; i++){
    options.push(
        <option key={list[i]} value={list[i]}>{list[i]}</option>
    )
  }
  return (
    <select
      className="personSelect"
      value={props.person}
      onChange={props.onChange}
    >
      {options}
    </select>
      )
}

export lifecycle(){ People }
