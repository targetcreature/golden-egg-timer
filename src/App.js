import React, { Component } from 'react'
import people from "./data/people"
import Egg from "./views/Egg"
import Stand from "./views/Stand"
import {
  AppX
} from "./styles/AppX"
import "./styles/Fonts.css"
// import logo from './logo.svg'

class App extends Component {
  constructor(props){
    super(props)
    this.defaults = {
      // timeType:"sec",
      money:0,
      running:0,
    }
    this.state = {
      mute:0,
      dial:15,
      time:15,
      lastTime:15,
      person: Object.keys(people)[0],
      category:"corporate"
    }
  }

  render() {
    return (
      <AppX>
        <Egg
          time={this.state.time}
          money={this.state.money}
          timeOnChange={this.timeOnChange}
          dial={this.state.dial}
          count={this.state.count}

          toggleTimer={this.toggleTimer}
          running={this.state.running}
          reset={this.reset}

          start={this.state.start}

          mute={this.state.mute}
          toggleMute={this.toggleMute}

          // menu
          person={this.state.person}
          peopleOnChange={this.peopleOnChange}
          lastTime={this.state.lastTime}
          timeType={this.state.timeType}
          timeTypeOnChange={this.timeTypeOnChange}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          cat={this.state.category}
        />
        <Stand/>
      </AppX>
    )
  }

  componentDidMount = () => {
    this.setState({...this.defaults, count: this.state.time*60 })
  }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  newTick = async () => {
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

  toggleTimer = () => {
    if(this.state.running) this.stopTimer()
    else this.startTimer()
  }

  startTimer = () => {
    const speed = this.state.timeType === "sec" ? 169 :

    this.moneyTick()
    this.timeTick()
    this.setState({timer: setInterval(this.newTick,1000), running:1, start:Date.now()})
  }


  timeOnChange = (event) => {
    const time = this.state.timeType === "min" ? event.target.value * 3600 : event.target.value*60
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


  stopTimer = () => {
    clearInterval(this.state.timer)
    this.setState({running:0})
  }

  tick = () => {
    this.timeTick()
    this.moneyTick()
    // this.dialTick()
    if(this.state.time===0) this.stopTimer()
  }

  dialTick = () => {
    if(this.state.timeType === "min"){
        this.setState({dial: this.state.dial-0.0167})
    } else {
      this.setState({dial: this.state.time+1})
    }
  }

  reset = () => {
    this.stopTimer()
    this.setState({...this.defaults, dial:this.state.lastTime+1, time:this.state.lastTime })
  }

  toggleMute = () => {
    const newMute = !this.state.mute;
    console.log(newMute)
    this.setState({mute:newMute})
  }

}

export default App
