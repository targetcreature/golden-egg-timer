import React from "react"
// import { FaHandHolding as PersonToggle } from "react-icons/fa"
import { MdFingerprint as PersonToggle } from "react-icons/md"

import people from "../data/people"

function Menu(props){
  const peopleOpts = getPeople()

  return(
    <div className="menu">
      <PersonToggle className="person-settings"
        onClick={props.onClick}
        size="50px"
        fill="seagreen"
      />
      <select value={props.person} onChange={props.peopleOnChange}>
        {peopleOpts}
      </select>
    </div>
      )
      function getPeople(){
        const list = Object.keys(people)
        const peopleOpts = []
        for(let i=0; i<list.length; i++){
          peopleOpts.push(
            <option key={list[i]} value={list[i]}>{list[i]}</option>
          )
        }
        return peopleOpts
      }
}



export default Menu
