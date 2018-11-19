import React from "react"
import people from "../data/people"

let timer = {}

timer.set = {
  time: (s,last) => {
    console.log(s.timeType)
    const time = s.timeType === "min"
      ? last * 60
      : last
    return{
      time:time,
      lastTime:last
    }},
  timeType: (s,val) => { return {
    timeType: val
  }},
  dial: (s,p) => { return {
    dial:s.lastTime*6.1
  }},
  money: () => { return {
    money:0
  }}
}

timer.tick = {
  time: (s) => { return {
    time:s.time-1
  }},
  money: (s) => {
    const person = people[s.person]
    const seconds = 60 * 60 * 40 * 52
    const rate = person.rate / seconds
    const wrate = person.workers / seconds
    return{
      money: s.money + rate,
      workers: s.workers + wrate
    }},
  dial: (s) => {
    const inc = s.timeType === "sec" ? 6.1 : 0.0167
    return{
      dial:s.dial - inc
  }},


}

const sf = {
  timer,
}

export default sf
