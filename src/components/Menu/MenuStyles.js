import styled from "styled-components"
import media from "../../utils/media"

export default styled.div`
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
`
