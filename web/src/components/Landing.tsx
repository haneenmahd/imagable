import styled from "styled-components";
import Actions from "./ActionsContainer";

// Styled Component Tokens
import Tokens from "../styles/tokens";

// Logo
import Logo from "../assets/svg/logo.svg";
import ImageDiamond from "./ImageDiamond";

const LandingContainer = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const LandingContent = styled.div`
  width: 46vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &:nth-child(2) {
    align-items: center;
  }
`;

const LandingImage = styled.img`
  height: 200px;
  margin: 0;
`;

const LandingHeader = styled.h1`
  ${Tokens.MainHeaderStyle}

  ${Tokens.MainHeaderStyleMobile}
`;

const LandingShortHeader = styled.h3`
  ${Tokens.SecondaryHeaderStyle}

  ${Tokens.SecondaryHeaderStyleMobile}
    ${Tokens.SecondaryHeaderStyleMobileSmall}
`;

const Landing = () => {
  return (
    <LandingContainer>
      <LandingContent>
        <LandingImage src={Logo} />
        <LandingHeader>Imagable</LandingHeader>
        <LandingShortHeader>
          Create, Edit and do <br />
          more with your images
        </LandingShortHeader>
        <Actions />
      </LandingContent>
      <LandingContent>
        <ImageDiamond />
      </LandingContent>
    </LandingContainer>
  );
};

export default Landing;
