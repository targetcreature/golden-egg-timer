import React from "react"
import people from "../data/people"
import lifecycle from "react-pure-lifecycle"

const componentDidMount = () => {}

const Menu = (props) => {
  let timeOpts = []
  for(let i=1; i<61; i++){
    timeOpts.push(
      <option key={i} value={i}>{i}</option>
    )
  }

  const list = Object.keys(people)
  const peopleOpts = []
  for(let i=0; i<list.length; i++){
    peopleOpts.push(
        <option key={list[i]} value={list[i]}>{list[i]}</option>
    )
  }

  return(
      <div className="menu">
        <div className="settings">
          <select
            className="personSelect"
            value={props.person}
            onChange={props.peopleOnChange}
          >
            {peopleOpts}
          </select>

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
      </div>
      )
}

const methods = {
  componentDidMount
}

export default lifecycle(methods)(Menu)
