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
      lastTime: 60,
      money: 0,
      time: 60,
      people: people,
      person: Object.keys(people)[0],
      twisting:false,
    }
  }


  timeOnChange = (event) => {
    this.setState({time:event.target.value,lastTime:event.target.value})
  }

  peopleOnChange = (e) => {
    this.setState({person:e.target.value})
  }

  startTimer = () => {
    if(this.state.time > 0){
      this.setState({timer: setInterval(this.tick,1000) })
    }
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
  }

  tick = ()=> {
    this.timeTick()
    this.moneyTick()
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

  reset = () => {
    this.setState({
      lastTime:60,
      time:60,
      money:0,
    })
  }


  render() {
    return (
      <AppX>
        <div className="egg-container">
          <Egg knobTwist={this.knobTwist} time={this.state.time} money={this.state.money} timeOnChange={this.timeOnChange}/>
        </div>
        <People person={this.state.person} onChange={this.peopleOnChange}/>
        <Timer lastTime={this.state.lastTime} onChange={this.timeOnChange}/>
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
    <select
      value={props.lastTime}
      onChange={props.onChange}
    >
      {options}
    </select>
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
      value={props.person}
      onChange={props.onChange}
    >
      {options}
    </select>
      )
}

function Egg(props){
  return(
    <EggX time={props.time}>
      <Money time={props.time} money={props.money}/>
      <Dial/>
    </EggX>

        )
}

function Money(props){
  let opts = { format: '%v' }
  const pay = currency(props.money,opts)

  return(
    <div className="money-container">
      <div className="bar">
        <div className="left">
          <div className="dollar">$</div>
          <div className="money">{pay}</div>
        </div>
        {/* <div className="right"> */}
        {/* <div className="time">{props.time}</div> */}
        {/* </div> */}
      </div>
    </div>
  )
}

function Dial(props){
  const area = Math.PI*150^2
  let string = ""
  for(let i=0, n=60; i<n; i++){
    const k = i%5 === 0 ? i : ","
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

          <svg class="dialSVG" viewBox="-75 -75 150 150" width="150" height="150">
            <path
              id="eggtime"
              fill="none"
              stroke="none"
              d="M-75,0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"
            />
            <text>
              <textPath href="#eggtime" textLength={area}>
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
