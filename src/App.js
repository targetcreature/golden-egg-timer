import React, { Component } from 'react'
import people from "./data/people"
import Egg from "./views/Egg"
import Stand from "./views/Stand"
import Menu from "./views/Menu"
import {
  AppX
} from "./styles/AppX"
import "./styles/Fonts.css"
import sf from "./modules/StateFunctions"
import TickSound from "./assets/tick.wav"
// import logo from './logo.svg'

class App extends Component {
  constructor(props){
    super(props)
    this.defaults = {
      money:0,
      workers:0,
      running:0,
    }
    this.state = {
      timeType: "sec",
      details:0,
      mute:0,
      time:15,
      running:0,
      lastTime:15,
      person: Object.keys(people)[0],
      category:"corporate"
    }
  }

  render() {
    return (
      <AppX>
        <Menu
          person={this.state.person}
          peopleOnChange={this.peopleOnChange}
          toggleMute={this.toggleMute}
          mute={this.state.mute}

        />

        <div className="main">
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
            details={this.state.details}
            toggleDetails={this.toggleDetails}

            workers={this.state.workers}

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
        </div>
      </AppX>
    )
  }

  componentDidMount = () => {
    this.setState({...this.defaults})
    this.setState(sf.timer.set.dial)

    const tickwav = new Audio(TickSound)
    this.setState({wav:tickwav})
  }

  toggleTimer = () => {
    if(this.state.time !== 0){
      this.state.running ? this.stopTimer() : this.startTimer()
      return
    }
    this.reset()
    this.startTimer()
  }

  startTimer = () => {
    console.log(this.state.time)
    this.tick()
    this.setState({timer: setInterval(this.tick,1000), running:1})
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
    this.setState({running:0})
  }

  tick = () => {
    if(this.state.time===0){
      this.stopTimer()
      return
    }
    this.timeTick()
    this.moneyTick()
    this.dialTick()
    this.soundTick()
  }

  timeTick = () => this.setState(sf.timer.tick.time)
  moneyTick = () => this.setState(sf.timer.tick.money)
  dialTick = () => this.setState(sf.timer.tick.dial)
  soundTick = () => {
    if(!this.state.mute){
      this.state.wav.play()
    }
  }


  timeOnChange = (event) => {
    const time = event.target.value
    this.stopTimer()
    this.setState(sf.timer.set.time(this.state,time))
    this.setState(sf.timer.set.dial)
    this.setState(sf.timer.set.money)
  }

  getTime = (val) => {
    return val === "min"
      ? this.state.lastTime * 60
      : this.state.lastTime
  }

  timeTypeOnChange = (event) => {
    const val = event.target.value
    const time = this.getTime(val)
    this.stopTimer()
    this.setState(sf.timer.set.timeType(this.state,val))
    this.setState({time:time})
    this.setState(sf.timer.set.dial)
    this.setState(sf.timer.set.money)
  }

  peopleOnChange = (e) => {
    this.setState({person:e.target.value, details:0})
  }

  reset = () => {
    this.stopTimer()
    this.setState({...this.defaults})
    this.setState(sf.timer.set.time(this.state,this.state.lastTime))
    this.setState(sf.timer.set.dial)
    this.setState(sf.timer.set.money)
  }

  toggleMute = () => {
    const newMute = !this.state.mute;
    console.log(newMute)
    this.setState({mute:newMute})
  }

  toggleDetails = () => {
    console.log("hello")
    const n = !this.state.details
    this.setState({details:n})
  }

}

export default App
