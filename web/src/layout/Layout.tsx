import styled from "styled-components";
import Actions from "../components/ActionsContainer";

// Styled Component Tokens
import Tokens from "../styles/tokens";

// Logo
import Logo from "../assets/svg/logo.svg";
import ImageDiamond from "../components/ImageDiamond";

const LayoutContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const LayoutImage = styled.img`
  height: 200px;
  margin: 0;
`;

const LayoutHeader = styled.h1`
  ${Tokens.MainHeaderStyle}

  ${Tokens.MainHeaderStyleMobile}
`;

const LayoutShortHeader = styled.h3`
  ${Tokens.SecondaryHeaderStyle}

  ${Tokens.SecondaryHeaderStyleMobile}
    ${Tokens.SecondaryHeaderStyleMobileSmall}
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <LayoutImage src={Logo} />
      <LayoutHeader>Imagable</LayoutHeader>
      <LayoutShortHeader>
        Create, Edit and do <br />
        more with your images
      </LayoutShortHeader>
      <Actions />
      <ImageDiamond />
    </LayoutContainer>
  );
};

export default Layout;
