import React from "react"
import people from "../data/people"

let timer = {}

timer.set = {
  time: (s,last) => {
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
    dial:s.lastTime*6.125
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
    const sec = 6
    const min = sec / 60
    const inc = s.timeType === "sec" ? sec : min
    const dial = s.time === 0 ? 3 : s.dial - inc
    return{
      dial:dial
  }},
}

const sf = {
  timer,
}

export default sf
