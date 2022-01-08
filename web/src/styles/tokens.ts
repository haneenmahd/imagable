/*
Common Tokens for styled components.
Alternative to SCSS's variables.

Implement common styles here!

use different style file for styled for large use cases. 
EG:- for a specific page or a group of pages.
For common styles like dark-mode text color or button responsive size you can this tokens file

DO NOT IMPLEMENT COMPONENTS HERE! JUST STYLES
*/

import { css } from "styled-components";

const MainHeaderStyle = css`
  font-size: 70px;
`;

const MainHeaderStyleMobile = css`
  @media screen and (max-width: 600px) {
    font-size: 300%;
  }
`;

const SecondaryHeaderStyle = css`
  font-size: 39px;
`;

const SecondaryHeaderStyleMobile = css`
  @media screen and (max-width: 600px) {
    font-size: 180%;
  }
`;

const SecondaryHeaderStyleMobileSmall = css`
  @media screen and (max-width: 350px) {
    font-size: 150%;
  }
`;

const themeColors = {
  mainColor: "#7C99AC",
  secondaryColor: "#92A9BD",
  lightSecondaryColor: "#768DA1",
  accentColor: "#FFEFEF",
  lightAccent: "#AEC3D6",
  secondaryAccentColor: "#D3DEDC",
  uiTextSelectionColor: "#aec3d65d",
};

const Tokens = {
    MainHeaderStyle,
    MainHeaderStyleMobile,
    SecondaryHeaderStyle,
    SecondaryHeaderStyleMobile,
    SecondaryHeaderStyleMobileSmall,
    themeColors
};

export default Tokens;