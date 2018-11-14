import React from "react"
import people from "../data/people"
import lifecycle from "react-pure-lifecycle"
import { FaPlay, FaPause, FaUndoAlt } from "react-icons/fa"

const componentDidMount = () => {}

const Timer = (props) => {
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

  const playButton = props.running ? <FaPause size={buttonSize}/> : <FaPlay size={buttonSize}/>

  const buttonSize = "1em"
  return(
    <>
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

      <div className="buttons">
        <div className="play icon" onClick={props.toggleTimer} running={props.running}>
          {playButton}
        </div>
        {/* <div className="pause icon" onClick={props.stopTimer}><FaPause size={buttonSize}/></div> */}
        <div className="reset icon" onClick={props.reset}><FaUndoAlt size={buttonSize}/></div>
      </div>
    </>
      )
}

const methods = {
  componentDidMount
}

export default lifecycle(methods)(Timer)
