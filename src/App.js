import React, { Component } from 'react'
import people from "./data/people"
import currency from "format-currency"
// import logo from './logo.svg'
import {
  AppX,
} from "./styles/AppStyles"

import {
  Stage,
  Layer,
  Circle,
  Ellipse,
  TextPath
 } from "react-konva"

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      startTime:10,
      money: 0,
      time: 10,
      people: people,
      person: Object.keys(people)[0],
      twisting:false,
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
      time:0,
      money:0,
    })
  }


  render() {
    return (
      <AppX>
        <People person={this.state.person}/>
        <Timer startTime={this.state.startTime} onChange={this.timeOnChange}/>
        <Time time={this.state.time} />
        <Money money={this.state.money}/>
        <Knob knobTwist={this.knobTwist} time={this.state.time}/>
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
          return(
    <div className="timer">

      <input
        type="number"
        name="countdown"
        min="1"
        max="3600"
        className="get"
        onChange={props.onChange}
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
  let opts = {
    format: '%s%v',
    symbol: '$'
  }
  const pay = currency(props.money,opts)

  return(
    <div className="money">
      Money: {pay}
    </div>
  )
}

function Knob(props){
  let string = ""
  for(let i=0, n=60; i<n; i++){
    const k = i%5 === 0 ? i : "'"
    string += k
  }
  return(
    <div className="egg-container">
      <svg className="egg-timer" viewBox="-75 -75 150 150">
        <path
          id="eggtime"
          fill="none"
          stroke="none"
          d="M-75,0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"
        />
        <text
          width="2px"
        >
          <textPath href="#eggtime">
            {string}
          </textPath>
        </text>
      </svg>
    </div>

        )
}

        function Knob2(props){
          let string = ""
          for(let i=0, n=60; i<n; i++){
            const k = i%5 === 0 ? i : "'"
            string += k
          }
          const width = 150
          return(
            <Stage
              width={width*2}
              height={width*2.25}
            >
              <Layer>
                <Ellipse
                  x={width}
                  y={width}
                  radius={{
                    x:width*0.8,
                    y:width
                  }}
                  fill={"pink"}
                />
              </Layer>
              <Layer
                offsetX={width/2}
                offsetY={width/2}
                x={width}
                y={width*1.15}
                rotation={parseInt(props.time)}
              >
                <Circle
                  x={width/2}
                  y={width/2}
                  radius={width*0.4}
                  fill={"green"}
                  stroke={"black"}
                />
                <TextPath
                  x={width/2}
                  y={35}
                  fill={"black"}
                  text={string}
                  fontSize={21}
                  data={"M-75,0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"}

          />
          {/* <Circle
            x={width/2}
            y={35}
            radius={width*0.075}
            fill={"green"}
            stroke={"black"}
          /> */}
        </Layer>
      </Stage>
      )
}


export default App
