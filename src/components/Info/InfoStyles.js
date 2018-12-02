import styled from "styled-components"
// import media from "../../utils/media"

export default styled.div`
  position: absolute;
  width: inherit;
  top:0;
  z-index:99999;
  ${'' /* height: 200px; */}

  background: darkgoldenrod;
  border-radius: 20px;


  &.mount{
  }
  &.unmount{
    background: blue;
    transform: translate(0,-110%);
    transition: transform .5s;

  }
`
