import styled from "styled-components"
import { rgba } from "polished"
import media from "../utils/media"

const ratio = 9/16
const desktop_height = 75
const height = desktop_height + "vh"

const EggX = styled.div`
  z-index: 1;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-top: 0px;
  position: relative;
  width:350px;
  height:475px;
  left:calc(((${height} * ${ratio}) - 365px)/2);
  ${'' /* top:20px; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 100%;
  background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #FFD200 25%, #F7971E 62.5%, #6e3e00 100%);
  ${'' /* background: radial-gradient(ellipse at top, #FFD200, #F7971E); */}
  ${media.phone`
    left:calc((100vw - 365px)/2);
    transform: scale(0.75);
    margin-bottom: -20px;
    margin-top:-60px;
  `}

  .egg{
    width:350px;
    height:475px;
  }
  .money-container{
    z-index:1;
    align-self: center;
    margin-top: 160px;
    border-radius: 5px;
    background: #222;
    box-shadow: inset 0px 0px 25px #111;
    padding: 15px;
  }
  .dollar{
    display: inline-block;
    margin-right: 5px;
    color:silver;
  }
  .money{
    display: inline-block;
    color:lime;
    width:100px;
    text-align: center;
    }
  .volume{
    cursor: pointer;
    display: inline-block;
    svg{
      color:silver;
    }
  }
}
.dial-container{
  position: absolute;
  align-self: center;
  top:41%;
  text-align: center;
  transform: scale(1.5);
}
.arrow{
  font-size: 14px;
}
.dial{
  font-size: 10px;
  border-radius: 100%;
  transform: rotate(-87deg);

  background-image:
    ${'' /* url("https://www.transparenttextures.com/patterns/smooth-wall-dark.png"), */}
    radial-gradient(ellipse farthest-corner at right top, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
    radial-gradient(ellipse farthest-corner at left bottom, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);

  box-shadow: inset 0 0 3px #6e3e00, 0 0 5px ${rgba("#6e3e00",0.5)};

  svg{
    ${'' /* position: relative; */}
  }
}
.rotate{
  transform: rotate(${props => props.dial*6.125}deg);
}


.buttons{
  z-index: 1;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.icon{
  display: inline-block;
  cursor: pointer;
  margin: 4px;
  border-radius: 100%;
  padding: 15px;
  border: 2px solid silver;
  ${'' /* box-shadow: inset 0px 0px 0px 3px #5e5e5e; */}
  background-image:
    ${'' /* linear-gradient(to top right, #fff 0%, rgb(167, 167, 167) 5%, rgb(167, 167, 167) 30%, rgb(108, 108, 108) 50%, rgb(167, 167, 167) 70%, rgb(167, 167, 167) 95%, #fff 0%); */}
    linear-gradient(to top right, #8A6E2F 0%, #9f7928 10%, #FFFFAC 50%, #9f7928 90%, #8A6E2F 0%);
}
.play{
  svg{
    margin-left: 2px;
    margin-right: -2px;
  }
}
`
export { EggX }
