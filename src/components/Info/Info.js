import React from "react"
import Info from "./InfoStyles"
import currency from "format-currency"
import {
  FaTwitter as Twitter,
 } from "react-icons/fa"

export default class extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      mounted: false
    }
  }

  componentDidMount = () => {
    setTimeout(()=>{
      this.setState({mounted: true})
    },10)
  }

  render(){
    const props = this.props

    const people = props.people
    const person = props.person
    const source = people[person].source
    const company = people[person].company

    let opts = { format: '%s%v', symbol: '$' }
    const pay = currency(props.rate,opts)

    let classes = ""
    if(this.state.mounted) classes += "mounted "
    if(props.infoUnmounting) classes += "unmount "

    return(
      <Info className={classes} >
        <div className="content">

          <div className="about">
            <div className="title-line"><span className="title">EGGTIME</span> is an ongoing project.</div>
            <div>For updates, suggestions, additions, corrections, follow <a href="https://twitter.com/_eggtime" target="_blank" rel="noopener noreferrer">@_eggtime</a>.</div>
          </div>

          <div className="credits">
            Design / Code<span className="name"><a href="https://twitter.com/_targetcreature" target="_blank" rel="noopener noreferrer">Targetcreature <Twitter size={12} style={{verticalAlign:"middle", marginTop:"-1px"}}/></a></span>
          </div>

          <div className="info-person">
            <div className="info-person-title">{person}</div>
            <div className="info-company">
              <span className="company">{company}</span>
            </div>
            <div className="info-pay">{pay}/s</div>
            <div className="details"><a href={source} target="_blank" rel="noopener noreferrer">{source}</a></div>
          </div>

        </div>
      </Info>
    )
  }
}
