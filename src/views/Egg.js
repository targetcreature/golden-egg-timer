import React from "react"
import lifecycle from "react-pure-lifecycle"
import currency from "format-currency"
import {
  EggX
} from "../styles/EggX"
import { FaPlay, FaPause, FaUndoAlt, FaVolumeUp, FaVolumeMute } from "react-icons/fa"

const componentDidMount = () => {}

function Egg(props){
  return(
    <EggX time={props.time} timeType={props.timeType} dial={props.dial}>
      <Money money={props.money} toggleMute={props.toggleMute} mute={props.mute}/>
      <Buttons toggleTimer={props.toggleTimer} running={props.running} reset={props.reset}/>
      <Dial/>
    </EggX>

        )
}

function Money(props){
  let opts = { format: '%v' }
  const pay = currency(props.money,opts)
  const mute = props.mute ? <FaVolumeMute/> : <FaVolumeUp/>

  return(
    <div className="money-container">
      <div className="dollar">$</div>
      <div className="money">{pay}</div>
      <div className="volume" onClick={props.toggleMute}>{mute}</div>
    </div>
  )
}

function Dial(props){
  // const area = Math.PI*149.95^2
  const area = Math.PI*150^2
  let ticks = ""
  for(let i=59, n=-1; i>n; i--){
    let k = i%5 === 0 ? i : " ' "
    if(k===0) k = "00"
    if(k===5) k = "05"
    ticks += k
  }

  return(
    <div className="dial-container">

      <div className="arrow">
        <svg height="10" width="10">
          <polygon points="0,0 5,10 10,0"/>
        </svg>
      </div>


      <div className="dial">
        <div className="rotate">
          <svg
            viewBox="-87.75 -88.75 175 175"
            width="175"
            height="175"
          >
            <path
              id="eggtime"
              fill="none"
              stroke="none"
              d="M-75,0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"
              transform="scale(-1,1)"
            />

            <text className="ticks">
              <textPath
                href="#eggtime"
                xlinkHref="#eggtime"
                textLength={area*0.995}
              >
                {ticks}
              </textPath>
            </text>

          </svg>
        </div>
      </div>
    </div>
      )
}

function Buttons(props){
  const buttonSize = "1.5em"
  const playButton = props.running ?   <div className="pause icon" onClick={props.toggleTimer} running={props.running}><FaPause size={buttonSize}/></div> :   <div className="play icon" onClick={props.toggleTimer} running={props.running}><FaPlay size={buttonSize}/></div>
  return(
  <div className="buttons">

    {playButton}
    <div className="reset icon" onClick={props.reset}><FaUndoAlt size={buttonSize}/></div>
  </div>
  )
}


const methods = {
  componentDidMount
}

export default lifecycle(methods)(Egg)
