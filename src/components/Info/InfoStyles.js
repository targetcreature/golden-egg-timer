import styled from "styled-components"
import media from "../../utils/media"

export default styled.div`
  position: absolute;
  top:0;
  left:0;
  right:0;
  z-index:99999;
  padding: 20px;
  display: flex;
  justify-content: center;


  .content{
    ${media.desktop`
      max-width:500px;
      `}
    background: #222;
    box-shadow: inset 0px 0px 25px #111;
    border-radius: 20px;
    a{
      text-decoration: none;
    }
  }

  &.mount{
  }
  &.unmount{
    transform: translate(0,-110%);
    transition: transform .5s;

  }


  .about{
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color:rgba(255,255,255,0.66);
    font-size: 1em;
    .title{
      color:rgba(255,255,255,1);
    }
    a{
      color:cyan;
      &:hover{
        color:lime;
      }
    }
    .title-line{
      margin-bottom: 10px;
    }
  }

  .credits{
    padding: 0px 20px 10px;
    font-size:12px;
    ${'' /* background: rgba(255,255,255,0.05); */}
    color: rgba(255,255,255,0.75);
    a{
      color: rgba(255,255,255,0.5);
      &:hover{
        color: cyan;
      }
    }
    .name{
      margin-left: 20px;
    }
  }


  .info-person{
    font-size: 12px;
    padding: 10px 20px;
    border-top: 1px solid #000;
    background: #111;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .info-person-title,
  .info-company,
  .info-pay{
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 5px;
  }

  .info-person-title{
    background: green;
  }

  .info-company{
    background: darkgoldenrod;
  }

  .info-pay{
    background: crimson;
  }

  .details{
    font-size: 12px;

    a{
      color: rgba(255,255,255,.25);
      &:hover{
        color: rgba(255,255,255,.5);
      }
    }
  }
`
