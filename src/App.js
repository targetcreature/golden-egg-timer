import React, { Component } from 'react'
import people from "./data/people"
import currency from "format-currency"
// import logo from './logo.svg'
import {
  AppX,
  EggX
} from "./styles/AppStyles"

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      timeType: "sec",
      lastTime: 15,
      money: 0,
      time: 15,
      dial: 15,
      person: Object.keys(people)[0],
    }
  }


  timeOnChange = (event) => {
    const time = this.state.timeType === "min" ? event.target.value * 60 : event.target.value
    this.stopTimer()
    this.setState({
      time:time,
      lastTime:event.target.value,
      dial:event.target.value
    })
  }
  timeTypeOnChange = (event) => {
    this.stopTimer()
    this.setState({timeType:event.target.value, dial:this.state.lastTime})
  }

  peopleOnChange = (e) => {
    this.setState({person:e.target.value})
  }

  startTimer = () => {
    if(this.state.time > 0){
      this.setState({timer: setInterval(this.tick,1000)})
    }
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
    this.setState({time:this.state.lastTime})
  }

  tick = ()=> {
    this.timeTick()
    this.moneyTick()
    this.dialTick()
    if(this.state.time===0) this.stopTimer()
  }

  timeTick = () => {
    this.setState({time:this.state.time-1})
  }

  moneyTick = () => {
    const seconds = 60 * 60 * 40 * 52
    const rate = (people[this.state.person].rate * 1000000) / seconds
    this.setState({money:this.state.money+rate})
  }

  dialTick = () => {
  if(this.state.timeType === "min"){
      this.setState({dial: this.state.dial-0.0167})
  } else {
    this.setState({dial: this.state.time})
  }
}

  reset = () => {
    this.setState({
      timeType:"sec",
      lastTime:15,
      time:15,
      money:0,
      dial:15
    })
  }


  render() {
    return (
      <AppX>
        <Egg knobTwist={this.knobTwist} time={this.state.time} money={this.state.money} timeOnChange={this.timeOnChange} dial={this.state.dial}/>
        <People person={this.state.person} onChange={this.peopleOnChange}/>
        <Timer lastTime={this.state.lastTime} onChange={this.timeOnChange} timeType={this.state.timeType} timeTypeOnChange={this.timeTypeOnChange}/>
        <div className="buttons">
          <button name="start" onClick={this.startTimer}>START</button>
          <button name="stop" onClick={this.stopTimer}>STOP</button>
          <button name="reset" onClick={this.reset}>RESET</button>
        </div>
      </AppX>
    )
  }
}

function Timer(props){
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

function Egg(props){
  return(
    <EggX time={props.time} timeType={props.timeType} dial={props.dial}>
      <Money money={props.money}/>
      <Dial/>
    </EggX>

        )
}

function Money(props){
  let opts = { format: '%v' }
  const pay = currency(props.money,opts)

  return(
    <div className="money-container">
      <div className="dollar">$</div>
      <div className="money">{pay}</div>
    </div>
  )
}

function Dial(props){
  const area = Math.PI*150^2
  let string = ""
  for(let i=59, n=-1; i>n; i--){
    const k = i%5 === 0 ? i : "'"
    string += k
  }

  return(
    <div className="dial-container">

      <div className="arrow">
        <svg height="10" width="10">
          <polygon points="0,0 5,10 10,0"/>
        </svg>
      </div>

      <div className="rotate">
        <div className="dial">
          <svg viewBox="-87.5 -88.75 175 175" width="175" height="175">
            <path
              id="eggtime"
              fill="none"
              stroke="none"
              d="M-75,0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"
              transform="scale(-1,1)"
            />
            <text>
              <textPath
                href="#eggtime"
                textLength={area}
                // spacing="auto"
                // method="stretch"
                // side="right"
              >
                {string}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
      )
      }

      export default App
