/*
Common Tokens for styled components.
Alternative to SCSS's variables.

Implement common styles here!

DO NOT IMPLEMENT COMPONENTS HERE! JUST STYLES
*/

import { css } from "styled-components";

const mainHeaderStyle = css`
  font-size: 70px;

  @media screen and(max-width: 600px) {
    font-size: 300%;
  }
`;

const secondaryHeaderStyle = css`
  font-size: 39px;
  
  @media screen and(max-width: 600px) {
    font-size: 180%;
  }

  // for really small devices
  @media screen and (max-width: 350px) {
    font-size: 150%;
  }
`;

const Tokens = {
    mainHeaderStyle: mainHeaderStyle,
    secondaryHeaderStyle: secondaryHeaderStyle
};

export default Tokens;