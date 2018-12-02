import React from "react"
import Info from "./InfoStyles"

export default function(props){
  const people = props.people
  const person = props.person

  const mount = props.infoUnmounting ? "unmount" : "mount"

  return(
    <Info className={mount} >
      <div className="person">
        {person}
      </div>
      <div className="source">
        {people[person].source}
      </div>
    </Info>
  )
}
