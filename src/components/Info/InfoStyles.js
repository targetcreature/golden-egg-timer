import styled from "styled-components"
// import media from "../../utils/media"

export default styled.div`
  position: absolute;
  ${'' /* width: inherit; */}
  top:0;
  left:0;
  right:0;
  z-index:99999;
  padding: 20px;

  .content{
    background: #222;
    box-shadow: inset 0px 0px 25px #111;
    border-radius: 20px;
    border: 2px solid;
    border-color: #333;

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
    padding: 20px 20px 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color:rgba(255,255,255,0.66);
    font-size: 1em;
    .title{
      color:rgba(255,255,255,1);
    }
    a{
      color:cyan;
    }
  }

  .credits{
    padding: 5px 20px 3px;
    font-size:12px;
    background: rgba(255,255,255,0.05);
    color: rgba(255,255,255,0.5);
    ${'' /* border-top: 1px solid;
    border-bottom: 1px solid; */}
    ${'' /* color: rgba(255,255,255,0.75); */}
  }

  .info-person{
    font-size: 12px;
    color: lime;
    padding: 10px 20px;
    ${'' /* border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: lime; */}
  }

  .info-person-title,
  .info-company{
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 5px;
  }

  .details{
    font-size: 12px;
    padding: 0px 20px 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

  }
`
