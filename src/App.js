import React, { Component } from 'react'

/* Components */
import Main from "./components/Main/MainStyles"
import "./styles/Fonts.css"

/* Containers */
import Info from "./components/Info/Info"
import Egg from "./components/Egg/Egg"
import Stand from "./components/Stand/Stand"
// import Menu from "./components/Menu/Menu"

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
      isInfo:0,
      infoUnmounting:0,
    }
    this.state = {
      people: PEOPLE,
      timeType: "sec",
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
        {/* <Menu
          people = {this.state.people}
          person={this.state.person}
          peopleOnChange={this.peopleOnChange}
        /> */}
        {this.state.isInfo ? <Info people={this.state.people} person={this.state.person} rate={this.state.rate} infoUnmounting={this.state.infoUnmounting}/> : null }

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

          isInfo={this.state.isInfo}

          mute={this.state.mute}
          toggleMute={this.toggleMute}
          toggleInfo={this.toggleInfo}

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
    const person = Object.keys(PEOPLE)[0]
    const rate = this.getRate(person)
    this.setState({...this.defaults, rate:rate})
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
    const person = e.target.value
    const rate = this.getRate(person)
    this.setState({person:person, rate:rate, isDetails:0})
    this.reset()
  }

  getRate = (p) => {
    const annual = this.state.people[p].rate
    const seconds = 60 * 60 * 40 * 52
    return annual / seconds
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

  toggleInfo = () => {
    let delay = 0
    if(this.state.isInfo){
      delay = 500
      this.setState({infoUnmounting:1})
    }
    const n = !this.state.isInfo
    setTimeout(()=>{
      this.setState({isInfo:n, infoUnmounting:0})
    },delay)
  }

}

export default App
