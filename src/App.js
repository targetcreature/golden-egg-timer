import React, { Component } from 'react'
import people from "./data/people"
import Menu from "./views/Menu"
import Egg from "./views/Egg"
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
      dial:16,
      time:15,
      lastTime:15,
      person: Object.keys(people)[0]
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

          toggleTimer={this.toggleTimer}
          running={this.state.running}
          reset={this.reset}

          mute={this.state.mute}
          toggleMute={this.toggleMute}
        />
        <div className="egg-stand-wrap">
          <div className="egg-stand-bottom"/>
          <div className="egg-stand-top">
            <div className="egg-shadow"/>
          </div>
          <div className="egg-stand-title">
          Golden Egg Timer</div>
        </div>
        <Menu
          person={this.state.person}
          peopleOnChange={this.peopleOnChange}
          running={this.state.running}
          toggleTimer={this.toggleTimer}
          timeOnChange={this.timeOnChange}
          lastTime={this.state.lastTime}
          timeType={this.state.timeType}
          timeTypeOnChange={this.timeTypeOnChange}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          reset={this.reset}
        />
      </AppX>
    )
  }

  componentDidMount = () => {
    this.setState({...this.defaults })
  }

  toggleTimer = () => {
    if(this.state.running) this.stopTimer()
    else this.startTimer()
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
    this.moneyTick()
    if(this.state.timeType === "min"){
        this.setState({dial: this.state.dial-0.0167})
    } else {
      this.setState({dial: this.state.time})
    }
    this.timeTick()
    this.setState({timer: setInterval(this.tick,1000), running:1})
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
    this.setState({running:0})
  }

  tick = () => {
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
