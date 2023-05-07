import { HeaderStyle, SubheaderStyle } from "../styles/Component.styles";
import Gallery from "./Gallery";

function Header() {
  return (
    <HeaderStyle>
      J O S H U A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B A Y O N A
      <SubheaderStyle href="#">
        C O N T A C T&nbsp;&nbsp;&nbsp;M E
      </SubheaderStyle>
      <Gallery />
    </HeaderStyle>
  );
}

export default Header;
