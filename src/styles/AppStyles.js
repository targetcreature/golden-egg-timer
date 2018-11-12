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

    position: relative;

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

    select{
      margin-right: 5px;
    }
    button{
      margin-right: 5px;
    }

    .egg-container{
      margin-bottom: 40px;
    }

`

const EggX = styled.div`
  position: relative;
  width:350px;
  height:475px;
  ${media.phone`
    left:calc((100vw - 365px)/2)
  `}
  left:calc(((${height} * ${ratio}) - 365px)/2);
  top:20px;
  display: flex;
  justify-content: center;
  border-radius: 100%;
  background: radial-gradient(ellipse at top, #FFD200, #F7971E);

  .egg{
    width:350px;
    height:475px;
  }
  .people{
    display: none;
  }
  .money-container{
    position: relative;
    align-self: center;
    margin-top: 100px;
  }
  .bar{
    div{
      display: inline-block;
    }
  }
  .left{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #000;
    padding: 20px 20px 0;
  }
  .right{
    background: #333;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 20px 20px 0 15px;
    text-align: center;
  }
  .time{
    color:lightcoral;
    width: 30px;
  }
  .dollar{
    margin-right: 5px;
    color:silver;
  }
  .money{
    color:lime;
    width:100px;
    text-align: center;
    }
  }
  .time{

  }
  .dial{
    display: none;
    position: relative;
    left:-8px;
    top:95px;
    font-size: 10px;
    border-radius: 100%;
    padding: 10px;
    background: radial-gradient(closest-side, #FFD200 50%, #F7971E);
    transform: scale(0.75) rotate(90deg);
    box-shadow: 0px 0px 10px #000;
  }
  .rotate{
    transform: rotate(${props => props.time*2}deg);
  }
`

export { AppX, EggX }
