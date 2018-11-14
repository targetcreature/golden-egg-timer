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

  return(
    // <div className="base">
    //   <div className="faceplate-wrap">
    //     <div className="faceplate">Golden Egg Timer®</div>
    //   </div>
      <div className="menu">
        {/* <div className="menu-face"> */}
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
          <Buttons toggleTimer={props.toggleTimer} running={props.running} reset={props.reset}/>
        </div>
      </div>
      // </div>
    // </div>
      )
}

function Buttons(props){
  const buttonSize = "2.5em"
  const playButton = props.running ? <FaPause size={buttonSize}/> : <FaPlay size={buttonSize}/>
  return(
  <div className="buttons">
    <div className="play icon" onClick={props.toggleTimer} running={props.running}>
      {playButton}
    </div>
    <div className="reset icon" onClick={props.reset}><FaUndoAlt size={buttonSize}/></div>
  </div>
  )
}

const methods = {
  componentDidMount
}

export default lifecycle(methods)(Timer)
