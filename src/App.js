import React, { Component } from 'react'
import people from "./data/people"
// import logo from './logo.svg'
import Timer from "./views/Timer"
import People from "./views/People"
import Egg from "./views/Egg"
import {
  AppX
} from "./styles/AppStyles"

class App extends Component {
  constructor(props){
    super(props)
    this.defaults = {
      timeType:"sec",
      lastTime:15,
      time:15,
      money:0,
      dial:15,
    }
    this.state = {
      person: Object.keys(people)[0]
    }
  }

  render() {
    return (
      <AppX>
        <div className="egg-shadow"/>
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

  componentDidMount = () => {
    this.setState({...this.defaults })
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
    this.stopTimer()
    this.setState({...this.defaults })
  }

}

export default App
