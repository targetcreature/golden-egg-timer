import styled from "styled-components"
import { rgba } from "polished"
import media from "../utils/media"

const ratio = 9/16
const desktop_height = 75
const height = desktop_height + "vh"

const AppX = styled.div`
    ${media.phone`
      width:100vw;
      height:100vh;
    `}
    height:${height};
    width:calc(${height} * ${ratio});

    font-size: 1.5em;

    ul{
      list-style: none;
      padding: 0;
      margin: 0;
    }
    background: darkkhaki;

    .people,
    .timer,
    .time,
    .money,
    .go
    {
      margin-bottom: 20px;
    }

    .timeSelect{
    }
    .personSelect{
    }

    select{
      margin-right: 5px;
      margin-bottom: 5px;
      font-size: 16px;
      padding: 10px;
    }
    button{
      margin-right: 5px;
      font-size: 16px;
      padding: 10px;
    }

    .egg-shadow{
      position: relative;
      width:350px;
      height:50px;
      border-radius: 100%;
      background-image: radial-gradient(rgba(56, 45, 19,0.75) 25%, transparent 66%);
      ${media.phone`
        left:calc((100vw - 365px)/2);
        transform: scale(0.75);
        top:436px;
      `}
      left:calc(((${height} * ${ratio}) - 365px)/2);
      top:495px;
      margin-top: -125px;
    }

`

const EggX = styled.div`
  margin-bottom: 60px;
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
  `}

  .egg{
    width:350px;
    height:475px;
  }
  .money-container{
    z-index:1;
    align-self: center;
    margin-top: 140px;
    border-radius: 5px;
    background: #222;
    box-shadow: inset 0px 0px 25px #111;
    padding: 20px 20px 0;
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
  }
.dial-container{
  position: absolute;
  align-self: center;
  top:41%;
  text-align: center;
  transform: scale(1.5)
}
.arrow{
  font-size: 14px;
}
.dial{
  ${'' /* position: relative; */}
  font-size: 10px;
  border-radius: 100%;
  transform: rotate(-87deg);
  background:
    radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
    radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
  box-shadow: inset 0 0 3px #6e3e00, 0 0 5px ${rgba("#6e3e00",0.5)};

  svg{
    ${'' /* position: relative; */}
  }
}
.rotate{
  transform: rotate(${props => props.dial*6.125}deg);
}
`

export { AppX, EggX }
