import styled from "styled-components"
import media from "../../utils/media"
import crack from "../../assets/crack.png"

const ratio = 9/16
const desktop_height = 75
const height = desktop_height + "vh"

const eggWidth = 350;
const eggHeight = 475;

const buttonSize = 45;
const sideButton = 30;

export default styled.div`

  height:${eggHeight}px;
  width:${eggWidth}px;
  border-radius: 100%;
  left:calc(((${height} * ${ratio}) - 365px)/2);
  margin-top:8vh;

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

  .crack{
    position: absolute;
    width: 125px;
    height: 225px;
    background: url(${crack});
    top:30px
    left: 61px;
    background-size: cover;
    transform: rotate(-25deg);
  }

  .person-container{
    display: flex;
    justify-content: center;
    transform: rotate(-25deg) translate(-25px,-5px);
    z-index: 999;

    .personWrap{
      text-align: center;
      transform: translate(-10px,0);
      color: seagreen;
      line-height: 42px;


      .textWrap{
        display: flex;
        justify-content: center;
        line-height:1;
        width: 125px;
        min-height: 75px;
        background:
        linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 20%, transparent 100%),
        linear-gradient(45deg, yellow 0%, yellow 100%);
        box-shadow: 2px 10px 10px rgba(0,0,0,0.25);
        padding: 20px 15px 5px;
      }

      select{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: transparent;
        z-index:100;
      }

      .company-container{
        display: flex;
        justify-content: center;
        color: darkred;
        font-size:18px;
        position: absolute;
        text-align:center;
        line-height:30px;
        top: 5px;
        width:20px;
        opacity:0.15;
      }
      .person{
        margin-top: 10px;;
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
    width: 158px;
    height: 158px;
    transform: translate(0,-24px);
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
    margin-top: 5px;

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
    position: relative;
    border-radius: 5px;
    background: #222;
    box-shadow: inset 0px 0px 25px #111;
    padding: 10px 0 5px 10px;

    border:1px;
    border-top-color:#7C6A41;
    border-left-color:#7C6A41;
    border-right-color:#D1B464;
    border-bottom-color:#D1B464;
    border-style: inset;

    margin-bottom: 10px;

    transition: width 0.5s;

    .money-row{
      display: grid;
      grid-template-columns: 40px auto 10px;
    }
    .solo{
      padding-bottom:3px;
    }

    .dollar{
      color:silver;
      transform: translate(0,-2px);
    }
    .money{
      min-width:60px;
      text-align: right;
      padding-right: 10px;
    }
    .rate{
      color:lime;
    }
    .workers{
      color: deeppink;
    }
    .volume{
      cursor: pointer;
      display: inline-block;
    }
    .more{
      cursor: pointer;
      &.solo{
        cursor: default;
      }
      .more-arrow{
        display: inline-block;
        transform: translate(1px,4px);
      }
      &.close .more-arrow{
        transform-origin: center center;
        transform: translate(1px,-10px) scale(1,-1);
      }
      transform:translate(0,1px)
    }
    svg{
      fill:silver;
      width: 15px;
      height: 15px;
    }
    .details{
      overflow:hidden;
      transition: height 0.1s;
      margin-top: 8px;
      margin-bottom: 5px;
      &.hidden{
        height:0px;
        margin-bottom: 0px;
        margin-top:3px;
      }
      .workers{
        /* margin-left: 20px; */
      }
      .worker-icon{
        transform:translate(0,2px);
      }

      }
  }

  .button-container{
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    svg{ fill: rgba(0,0,0,0.8); }
    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      width: ${buttonSize}px;
      height: ${buttonSize}px;
      border-radius: 100%;
      border: 3px solid #6b5b36;

      box-shadow:
        0px 0 5px 1px rgba(0,0,0,0.75),
        inset 1px 0px 1px 0px rgba(255, 255, 172,0.25),
        inset -1px 0px 1px 0px rgba(255, 255, 172,0.25),
        inset 0px 0px 3px 1px ${props => props.time > 0 ? "lime" : "orangered"};

      background-image:
      linear-gradient(to top right, #8A6E2F 0%, #9f7928 10%, #FFFFAC 50%, #9f7928 90%, #8A6E2F 0%);
      }
    }
    .play svg{ margin:0 -1px 0 1px; }
    .info svg{ fill: rgba(0,0,0,0.8); }

    .settings{
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${sideButton}px;
      height: ${sideButton}px;
      border-radius: 100%;
      border: 1px solid #5e502e;

      margin: -3px 6px 0px;

      box-shadow:
        0px 0 1px 1px rgba(0,0,0,0.1),
        inset 1px 0px 1px 0px rgba(255, 255, 172,0.25),
        inset -1px 0px 1px 0px rgba(255, 255, 172,0.25);

      background-image:
      linear-gradient(to top right, #8A6E2F 0%, #9f7928 10%, #FFFFAC 50%, #9f7928 90%, #8A6E2F 0%);
    }
  }

  .dial-container{
    position: absolute;
    align-self: center;
    top:35%;
    text-align: center;
    transform: translate(0,0px);

    .arrow{
      ${'' /* display: none; */}
      top: 0;left: 0;
      z-index: 3;
      font-size: 14px;
      transform:translate(0,-239px) rotate(180deg);
    }
    .dial{
      border-radius: 100%;
      background:
      radial-gradient(ellipse farthest-corner at right top, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
      radial-gradient(ellipse farthest-corner at right bottom, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
      box-shadow: 0px 0 3px 1px rgba(0,0,0,0.75), inset 1px 0px 1px 0px rgba(255, 255, 172,0.25), inset -1px 0px 1px 0px rgba(255, 255, 172,0.25);
      transform: scale(0.925,0.95) rotate(-87deg);
    }
    .rot-zero{
      ${'' /* transform: rotate(${props => props.time*6.125}deg); */}
      transform: rotate(${props => props.dial}deg);
    }
  }
`
