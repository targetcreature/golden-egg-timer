import React from "react"
import people from "../data/people"
import lifecycle from "react-pure-lifecycle"

const componentDidMount = () => {}

const People = (props) => {

  const list = Object.keys(people)
  const options = []
  for(let i=0; i<list.length; i++){
    options.push(
        <option key={list[i]} value={list[i]}>{list[i]}</option>
    )
  }
  return (
    <select
      className="personSelect"
      value={props.person}
      onChange={props.onChange}
    >
      {options}
    </select>
      )
}

const methods = {
  componentDidMount
}

export default lifecycle(methods)(People)
