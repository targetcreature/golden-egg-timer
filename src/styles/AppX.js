import styled from "styled-components"
import { rgba } from "polished"
import media from "../utils/media"

const ratio = 9/16
const desktop_height = 75
const height = desktop_height + "vh"

const eggWidth = 350;

const AppX = styled.div`
    ${media.phone`
      width:100vw;
      height:92vh;
      margin-top:8vh;
    `}
    height:${height};
    width:calc(${height} * ${ratio});
    font-size:16px;
    background: darkkhaki;
    margin-top:-40px;

    select{
      font-size: 16px;
      background: none;
      border: none;
      cursor: pointer;
      appearance: none;
      option{
        color: black;
        font-size: initial;
      }
    }

    .menu{
      z-index: 999;
      ${media.phone`
        position: absolute;
        top: 10px;
        right: 0px;
      `}
      position: relative;
      width:75px;
      height:75px;
      top: 70px;
      right: -240px;
      ${'' /* display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; */}

      .person-settings{
        transform: scale(-1,1);
      }
      select{
        position: absolute;
        top:0;
        left: 0;
        width:75px;
        height:75px;
        color:transparent;
      }

      .mute,
      .info
      {
        cursor: pointer;
        margin-top: 15px;
        svg{
          width: 28px;
          height: 28px;
          color: ${rgba("seagreen",1)};
        }
      }
  }

    .main{
      margin-top:8vh;
    }

    .egg-stand-wrap{
      position: relative;
      ${media.phone`
        left:calc((100vw - ${eggWidth}px)/2);
        transform: scale(1);
        margin-top: -28px;
        `}
      left:calc(((${height} * ${ratio}) - 365px)/2);
      height: 100px;
      margin-top: -25px;
      margin-bottom: 60px;
    }

    .egg-stand-top,
    .egg-stand-bottom{
      position: absolute;
      width:350px;
      background: linear-gradient(to right, rgb(167, 167, 167) 0%, #fff 15%, rgb(167, 167, 167) 80%,rgb(108, 108, 108) 100%);
    }

    .egg-stand-top{
      border-top-right-radius: 100%;
      border-top-left-radius: 100%;
      height:50px;
      top:0px;
    }

    .egg-stand-bottom{
      border-bottom-left-radius: 100%;
      border-bottom-right-radius: 100%;
      height:80px;
      top:40px;
      background:
      linear-gradient(to right, rgb(167, 167, 167) 0%, #fff 15%, rgb(167, 167, 167) 80%,rgb(108, 108, 108) 100%);
      border-bottom: 2px solid rgba(0,0,0,0.5);
    }
    .egg-stand-title{
      position: absolute;
      font-size: 40px;
      width: 350px;
      text-align: center;
      top: 63px;
      color: rgba(0,0,0,0.75);
      text-shadow: 1px 1px 0px rgba(255,255,255,1);
    }
    .egg-shadow{
      width: 100%;
      height: 100%;
      border-radius: 100%;
      margin-top: -5px;
      background-image: radial-gradient(rgba(0,0,0,0.6) 25%, transparent 66%);
    }

    .base{
      display: flex;
      flex-direction: column;
    }
    .menu-face{
      border: 1px solid #FFF;
      display: flex;
      flex-direction: column;
      align-items: center;
      ${'' /* padding: 10px 20px; */}
    }
    .faceplate-wrap{
      display: flex;
      justify-content: center;
    }
    .faceplate{
      display: inline-block;
      border: 1px solid #FFF;
      border-top-left-radius:100%;
      border-top-right-radius:100%;
      ${'' /* padding: 20px; */}
    }

`

export { AppX }
