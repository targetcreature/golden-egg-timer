import React, { Component } from 'react'

/* Components */
import Main from "./components/Main/MainStyles"
import "./styles/Fonts.css"

/* Containers */
import Egg from "./components/Egg/Egg"
import Stand from "./components/Stand/Stand"
import Menu from "./components/Menu/Menu"

/* Data & Assets */
import PEOPLE from "./data/people"
import TickSound from "./assets/tick.wav"

/* Funcs */
import SF from "./modules/StateFunctions"


class App extends Component {
  constructor(props){
    super(props)
    this.defaults = {
      money:0,
      workers:0,
      running:0,
    }
    this.state = {
      people: PEOPLE,
      timeType: "sec",
      isDetails:0,
      mute:0,
      time:15,
      running:0,
      lastTime:15,
      person: Object.keys(PEOPLE)[0],
    }
  }

  render() {
    return (
      <Main>
        <div className="mobile">

          <Menu
            people = {this.state.people}
            person={this.state.person}
            peopleOnChange={this.peopleOnChange}
          />
          
        </div>
        <Egg
          time={this.state.time}
          dial={this.state.dial}

          timeType={this.state.timeType}
          running={this.state.running}
          people={this.state.people}
          money={this.state.money}

          timeOnChange={this.timeOnChange}
          toggleTimer={this.toggleTimer}
          reset={this.reset}

          isDetails={this.state.isDetails}
          toggleDetails={this.toggleDetails}

          mute={this.state.mute}
          toggleMute={this.toggleMute}

          workers={this.state.workers}

          person={this.state.person}
          peopleOnChange={this.peopleOnChange}
          lastTime={this.state.lastTime}
          timeTypeOnChange={this.timeTypeOnChange}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
        />
        <Stand/>
      </Main>
    )
  }

  componentDidMount = () => {
    this.setState({...this.defaults})
    this.setState(SF.timer.set.dial)

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

  timeTick = () => this.setState(SF.timer.tick.time)
  moneyTick = () => this.setState(SF.timer.tick.money)
  dialTick = () => this.setState(SF.timer.tick.dial)
  soundTick = () => {
    if(!this.state.mute){
      this.state.wav.play()
    }
  }


  timeOnChange = (event) => {
    const time = event.target.value
    this.stopTimer()
    this.setState(SF.timer.set.time(this.state,time))
    this.setState(SF.timer.set.dial)
    this.setState(SF.timer.set.money)
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
    this.setState(SF.timer.set.timeType(this.state,val))
    this.setState({time:time})
    this.setState(SF.timer.set.dial)
    this.setState(SF.timer.set.money)
  }

  peopleOnChange = (e) => {
    this.setState({person:e.target.value, isDetails:0})
    this.reset()
  }

  reset = () => {
    this.stopTimer()
    this.setState({...this.defaults})
    this.setState(SF.timer.set.time(this.state,this.state.lastTime))
    this.setState(SF.timer.set.dial)
    this.setState(SF.timer.set.money)
  }

  toggleMute = () => {
    const newMute = !this.state.mute;
    console.log(newMute)
    this.setState({mute:newMute})
  }

  toggleDetails = () => {
    const n = !this.state.isDetails
    this.setState({isDetails:n})
  }

}

export default App
