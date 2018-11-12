import React, { Component } from 'react'
import people from "./data/people"
// import logo from './logo.svg'
import {
  AppX
} from "./styles/AppStyles"

// import {
//   Stage
//   ,Rect
//   ,Layer
//  } from "react-konva"

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      startTime:10,
      money: 0,
      time: 10,
      people: people,
      person: Object.keys(people)[0],
    }
  }


  timeOnChange = (event) => {
    this.setState({time:event.target.value})
  }

  peopleOnSelect = (e) => {
    console.log(e)
    this.setState({person:e.target.id})
  }

  startTimer = () => {
    this.setState({timer: setInterval(this.tick,1000) })
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
    const rate = people[this.state.person]
    this.setState({money:this.state.money+rate})
  }


  render() {
    return (
      <AppX>
        <People person={this.state.person}/>
        <Timer startTime={this.state.startTime} onChange={this.timeOnChange}/>
        <Time time={this.state.time} />
        <Money money={this.state.money}/>
        <Go startTimer={this.startTimer}/>
      </AppX>
    )
  }
}

function Timer(props){
  return(
    <div className="timer">

      <input
        type="number"
        name="countdown"
        min="1"
        max="3600"
        className="get"
        onChange={props.onChange}
        value={props.startTime}
      />

    </div>
  )
}

function People(props){
  const list = Object.keys(people)
  const options = []
  for(let i=0; i<list.length; i++){
    options.push(
      <div key={list[i]} className="person">
        <input
          type="radio"
          id={list[i]}
          name="people"
          onChange={props.peopleOnSelect}
          defaultChecked={i===0}
        />
        <label for={list[i]}>{list[i]}</label>
      </div>
    )
  }
  return (
    <div className="people">
      {options}
    </div>
      )
}


function Time(props){
  return (
    <div className="time">
      Time: {props.time}
    </div>
  )
}

function Money(props){

  return(
    <div className="money">
      Money: ${props.money}
    </div>
  )
}

function Go(props){
  return(
    <button className="go" name="go" onClick={props.startTimer}>GO</button>
  )
}


export default App
