import React from "react"
import lifecycle from "react-pure-lifecycle"
import currency from "format-currency"
import {
  EggX
} from "../styles/EggX"
// import Menu from "./Menu"
import people from "../data/people"
import {
  FaPlay,
  FaPause,
  FaUndoAlt,
  FaVolumeUp,
  FaVolumeMute as Mute,
  FaPeopleCarry as WorkersIcon,
  FaSlidersH as SettingsIcon,
 } from "react-icons/fa"

 import { triangle } from "../utils/shapes"

import {
  // IoIosPeople as Workers,
} from "react-icons/io"

const componentDidMount = () => {}

function Egg(props){
  return(
    <EggX
      time={props.time}
      timeType={props.timeType}
      dial={props.dial}
    >
      <Person props={props}/>
      <Console props={props}/>
      <Dial time={props.time} start={props.start} running={props.running}/>
    </EggX>

        )
}

function Person(p){
  const props = p.props

  const peopleOpts = getPeople()
  const person = getPerson()

  return (
    <div className="person-container">
      <div className={props.cat + " paper"}/>
      <div className={props.cat + " personWrap"}>
        <select value={props.person} onChange={props.peopleOnChange}>
          {peopleOpts}
        </select>
        <div className="textWrap">
          <div className={props.cat + " person"}>{person}</div>
        </div>
      </div>
    </div>
  )

  function getPeople(){
    const list = Object.keys(people)
    const peopleOpts = []
    for(let i=0; i<list.length; i++){
      peopleOpts.push(
          <option key={list[i]} value={list[i]}>{list[i]}</option>
      )
    }
    return peopleOpts
  }

  function getPerson(){
    // if(props.cat === "corporate"){
    //   const split = props.person.split(" ")
    //   return `[${split[0]}] [${split[1]}]`
    // }
    return props.person
  }
}

function Console(p){
  const props = p.props
  return(
  <div className="console">
    <Time props={props}/>
    <Money workers={props.workers} toggleDetails={props.toggleDetails} details={props.details} money={props.money} toggleMute={props.toggleMute} mute={props.mute} person={props.person}/>
    <Buttons toggleTimer={props.toggleTimer} running={props.running} reset={props.reset}/>
  </div>
  )
}

function Money(props){
  let opts = { format: '%v' }
  const pay = currency(props.money,opts)
  const workers = currency(props.workers,opts)
  const mute = props.mute ? <Mute/> : <FaVolumeUp/>

    return(
    <div className="money-container">
      <MoneyRow person={props.person} source="rate" pay={pay} moreOnClick={props.toggleDetails} details={props.details}/>
      <MoneyRow person={props.person} source="workers" pay={workers} details={props.details}/>
    </div>
  )
}

function MoneyRow(props){
  const arrow =
  <div key={"arrow"} className="more-arrow">
    {triangle(5)}
  </div>
  const icons = getIcons()
  const more = icons ? [icons[0],arrow] : ""
  const details = props.details ? "details" : "details hidden"

    function getIcons(){
      const icons = []
      const iconData = people[props.person].icons
      const keys = Object.keys(iconData)
      if(!keys) return <Mute/>
      else{
        for(let i = 0; i<keys.length; i++){
          icons.push(<span key={i}>{iconData[keys[i]]}</span>)
        }
        return icons
      }
    }

    let dollar, icon, className

    switch(props.source){
      case "workers":
        dollar = ""
        icon = <div className="worker-icon"><WorkersIcon/></div>
        className = props.details ? "details" : "details hidden"
        break
      default:
      case "rate":
        dollar = "$"
        const c = props.details ? "close" : ""
        icon = <div className={`more ${c}`} onClick={props.moreOnClick}>{more}</div>
        className = ""
        break
    }

  return(
    <div className={`money-row ${className}`}>
      <div className="dollar">{dollar}</div>
      <div className={`money ${props.source}`}>{props.pay}</div>
      {icon}
    </div>
  )
}

function Dial(props){
  // const area = Math.PI*149.95^2
  const area = Math.PI*150^2
  const ticks = getTicks()
  const rotating = props.running === 1 ? "rotating" : ""

  return(
    <div className="dial-container">

      <div className="dial">
        <div className="rot-zero">
          <svg
            viewBox="-87.75 -88.75 175 175"
            width="275"
            height="275"
          >
            <path
              id="eggtime"
              fill="none"
              stroke="none"
              d="M-75,0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"
              transform="scale(-1,1)"
            />

            <text
              className="ticks"
            >
              <textPath
                href="#eggtime"
                xlinkHref="#eggtime"
                textLength={area*0.995}
              >
                {ticks}
              </textPath>
            </text>

          </svg>
        </div>
      </div>
      <div className="arrow">
        {triangle(10)}
      </div>
    </div>
      )

  function getTicks(){
    let ticks = ""
    for(let i=59, n=-1; i>n; i--){
      let k = i%5 === 0 ? i : " ' "
      if(k===0) k = "00"
      if(k===5) k = "05"
      ticks += k
    }
    return ticks
  }
}

function Buttons(props){
  const buttonSize = "1em"
  const playButton = props.running ?   <div className="pause icon" onClick={props.toggleTimer} running={props.running}><FaPause size={buttonSize}/></div> :   <div className="play icon" onClick={props.toggleTimer} running={props.running}><FaPlay size={buttonSize}/></div>
  return(
  <div className="button-container">

    {playButton}
    <div className="reset icon" onClick={props.reset}><FaUndoAlt size={buttonSize}/></div>
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
    <div className="time-container">
      <select
        className="time-option timeSelect"
        value={props.lastTime}
        onChange={props.timeOnChange}
      >
        {timeOpts}
      </select>

      <select
        className="time-option timeTypeSelect"
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

export default lifecycle(methods)(Egg)
