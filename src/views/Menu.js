import React from "react"
import people from "../data/people"
import lifecycle from "react-pure-lifecycle"
// import Select from "react-select"

const componentDidMount = () => {}



const Menu = (props) => {
    return(
        <div className="menu">
          <Person props={props}/>
          <Time props={props}/>
        </div>
      )
}

function Person(p){
  const props = p.props
  const list = Object.keys(people)
  const peopleOpts = []
  for(let i=0; i<list.length; i++){
    peopleOpts.push(
        <option key={list[i]} value={list[i]}>{list[i]}</option>
    )
  }
  return (
    <div className="personWrap">
      <div className="display">{props.person}</div>
      <select value={props.person} onChange={props.peopleOnChange}>
        {peopleOpts}
      </select>
    </div>
  )
}

function Time(p){
  const props = p.props
  let timeOpts = []
  for(let i=1; i<61; i++){
    timeOpts.push(
      <option key={i} value={i}>{i}</option>
    )
  }
  return(
    <div className="timeWrap">
      <select
        className="timeSelect"
        value={props.lastTime}
        onChange={props.timeOnChange}
      >
        {timeOpts}
      </select>

      <select
        className="timeTypeSelect"
        value={props.timeType}
        onChange={props.timeTypeOnChange}
      >
        <option key={"sec"}>sec</option>
        <option key={"min"}>min</option>
      </select>
    </div>
  )
}

const methods = {
  componentDidMount
}

export default lifecycle(methods)(Menu)
