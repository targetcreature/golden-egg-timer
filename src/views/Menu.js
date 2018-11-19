import React from "react"
import {
  FaVolumeUp as VolIcon,
  FaVolumeMute as MuteIcon,
 } from "react-icons/fa"
import { MdFingerprint as PersonIcon } from "react-icons/md"

import people from "../data/people"

function Menu(props){
  return(
    <div className="menu">
      <People props={props}/>
    </div>
      )
}


function People(p){
  const props = p.props
  const peopleOpts = getPeople()

  return(
    <>
      <PersonIcon className="person-settings"
        onClick={props.onClick}
        size="50px"
        fill="firebrick"
      />
      <select value={props.person} onChange={props.peopleOnChange}>
        {peopleOpts}
      </select>
    </>
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
