import styled from "styled-components"
import { rgba } from "polished"
import media from "../utils/media"

const ratio = 9/16
const desktop_height = 75
const height = desktop_height + "vh"

const eggWidth = 350;
const eggHeight = 475;



const EggX = styled.div`
  height:${eggHeight}px;
  width:${eggWidth}px;
  border-radius: 100%;
  left:calc(((${height} * ${ratio}) - 365px)/2);

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;

  background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #FFD200 25%, #F7971E 62.5%, #6e3e00 100%);

  ${media.phone`
    left:calc((100vw - ${eggWidth}px)/2);
    transform: scale(1);
  `}

  .person-container{
    display: flex;
    justify-content: center;
    height:36px;
    transform: rotate(-15deg) translate(-20px,-50px);

    .paper{
      position: absolute;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 20%, transparent 100%),
        linear-gradient(45deg, yellow 0%, yellow 100%);
      width: 125px;
      height: 75px;
      box-shadow: 2px 10px 10px rgba(0,0,0,0.25);
    }

    .personWrap{
      position: absolute;
      height:36px;
      width:125px;
      text-align: center;
      margin-bottom: 0px;

      select{
        position: absolute;
        width: 100%;
        height:75px;
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0;
        color: transparent;
      }

      .textWrap{
        display: flex;
        justify-content: center;
        width: 100%;
      }
      .person{
        width:100px;
        margin-top: 10px;
      }
    }
  }

  .console{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    z-index: 1;

    border-radius: 100%;
    border: 2px solid #7C6A41;
    box-shadow: inset 0 0 3px 2px rgba(0,0,0,0.5);
    padding: 25px 20px 20px;
    width: 165px;
    height: 165px;
    transform: translate(0,-8px);
  }

  .time-container{
    display: inline-block;
    border:1px;
    border-top-color:#7C6A41;
    border-left-color:#7C6A41;
    border-right-color:#D1B464;
    border-bottom-color:#D1B464;
    border-style: inset;
    background: linear-gradient(135deg, #D1B464 25%, #7C6A41 62.5%, #D1B464 100%);
    box-shadow: inset 1px 1px 3px 0px black;

    margin-bottom: 15px;

    select{
      padding: 2px 5px;
      margin: 0;
      border-radius: 0px;
      :first-child{
        border:0;
        border-right: 1px solid rgba(0,0,0,0.5);
      }
      :last-child{
        border:0;
        border-left: 1px solid #7C6A41;
      }
    }
  }

  .money-container{
    border-radius: 5px;
    background: #222;
    box-shadow: inset 0px 0px 25px #111;
    padding: 15px;

    border:1px;
    border-top-color:#7C6A41;
    border-left-color:#7C6A41;
    border-right-color:#D1B464;
    border-bottom-color:#D1B464;
    border-style: inset;

    margin-bottom: 12px;

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

  .button-container{
    .icon{
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      margin: 0 4px;
      padding: 8px;
      cursor: pointer;
      border: 1.5px solid #5e502e;
      box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
      background-image:
      linear-gradient(to top right, #8A6E2F 0%, #9f7928 10%, #FFFFAC 50%, #9f7928 90%, #8A6E2F 0%);
    }
    .play{
      svg{
        margin:1px -1px -1px 1px;
      }
    }
    .reset{
      svg{
        margin:1.25px 0px -1.25px 0px;
      }
    }
  }

  .dial-container{
    position: absolute;
    align-self: center;
    top:35%;
    text-align: center;
    .arrow{
      font-size: 14px;
    }
    .dial{
      border-radius: 100%;
      background:
      radial-gradient(ellipse farthest-corner at right top, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
      radial-gradient(ellipse farthest-corner at right bottom, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
      box-shadow: 0px 0 3px 1px rgba(0,0,0,0.75), inset 1px 0px 1px 0px rgba(255, 255, 172,0.25), inset -1px 0px 1px 0px rgba(255, 255, 172,0.25);
      transform: scale(0.95,0.95) translate(0,-20px) rotate(-87deg);
    }
    .rotate{
      transform: rotate(${props => props.dial*6.125}deg);
    }
  }
`



export { EggX }
