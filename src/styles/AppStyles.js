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
    padding-top: 20px;
    padding-left: 20px;

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

    .person{
        display: block;
    }

    button{
      font-size:2em;
      border-radius: 5px;
      margin-right: 10px;
      background: ${rgba("white",0.5)};
      border: 1px solid #FFF;
      cursor: pointer;
    }

    .egg-container{
      width:250px;
      height:325px;
      border-radius: 100%;
      background: gold;
      .egg-timer{
        font-size: 10.8px;
        letter-spacing: 3px;
      }
    }
`

export { AppX }
