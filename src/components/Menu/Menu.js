import React from "react"
import Menu from "./MenuStyles"
import Select from "react-select"
import { MdFingerprint as PersonIcon } from "react-icons/md"

export default (props) => (
    <Menu>
      <People props={props}/>
    </Menu>
)

function People(p){
  const props = p.props
  const options = getPeople()

  return(
    <React.Fragment>
      <PersonIcon className="person-settings"
          // onClick={props.onClick}
        size="50px"
        fill="seagreen"
      />
      <select value={props.person} onChange={props.peopleOnChange}>
        {options}
      </select>
    </React.Fragment>
  )

  function getPeople(){
    const list = Object.keys(props.people)
    const options = []
    for(let i=0; i<list.length; i++){
      options.push(
        <option key={list[i]} value={list[i]}>{list[i]}</option>
      )
    }
    return options
  }
}
