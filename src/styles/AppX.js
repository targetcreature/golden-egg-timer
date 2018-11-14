import styled from "styled-components"
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
    font-size:16px;
    background: darkkhaki;

    .personSelect{
      border-color: green;
    }
    .timeSelect{
      border-color: blue;
    }
    .timeTypeSelect{
      border-color: indigo;
    }

    .timeSelect, .timeTypeSelect{
      padding: 5px 10px;
    }

    select{
      font-size: 16px;
      background: none;
      border: none;
      border-bottom: 5px solid;
      padding: 5px 0px;
      cursor: pointer;
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
    .base{
      display: flex;
      flex-direction: column;
    }
    .menu{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ${'' /* border: 1px solid #FFF; */}
      ${'' /* padding: 20px 0px; */}
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
    .buttons{
      margin-top: 20px;
    }
    .icon{
      display: inline-block;
      cursor: pointer;
      border-radius: 100%;
      width: 48px;
      height: 48px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border: 2px solid rgba(56, 45, 19,0.75);
      background: #fff;
      background: rgba(#e6dfd1, 0.75);
      box-shadow: inset 0 0 10px 1px rgba(255,255,255,0.25), 0px 3px 10px rgba(56, 45, 19,0.33);

    }

`

export { AppX }
