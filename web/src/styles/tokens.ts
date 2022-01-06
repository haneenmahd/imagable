/*
Common Tokens for styled components.
Alternative to SCSS's variables.

Implement common styles here!

DO NOT IMPLEMENT COMPONENTS HERE! JUST STYLES
*/

import { css } from "styled-components";

const mainHeaderStyle = css`
  @media screen and(max-width: 600px) {
    font-size: 300%;
  }

  font-size: 70px;
`;

const secondaryHeaderStyle = css`
  @media screen and(max-width: 600px) {
    font-size: 300%;
  }

  font-size: 70px;
`;

const Tokens = {
    mainHeaderStyle: mainHeaderStyle,
    secondaryHeaderStyle: secondaryHeaderStyle
};

export default Tokens;