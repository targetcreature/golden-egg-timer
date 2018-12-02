import React from "react"
import Info from "./InfoStyles"
import currency from "format-currency"

export default function(props){
  const people = props.people
  const person = props.person
  const source = people[person].source
  const company = people[person].company
  let opts = { format: '%s%v', symbol: '$' }
  const pay = currency(props.rate,opts)

  const mount = props.infoUnmounting ? "unmount" : "mount"

  return(
    <Info className={mount} >
      <div className="content">

        <div className="about">
          <span className="title">EGGTIME</span> is an ongoing project. For updates, suggestions, additions, corrections, follow <a href="https://twitter.com/eggtimeproject">eggtimeproject</a>
        </div>

        <div className="credits">
          Design / Code, <span className="name">Craig Hildebrand</span>
        </div>

        <div className="info-person">
          <div className="info-person-title">{person}</div>
          <div className="info-company">
            <span className="company">{company}</span> CEO
          </div>
          <div className="info-pay">{pay} per second</div>
        </div>

        <div className="details">
          <div className="info-source">
            source: <a href={source} target="_blank" rel="noopener noreferrer">{source}</a>
          </div>
        </div>

      </div>
    </Info>
  )
}
