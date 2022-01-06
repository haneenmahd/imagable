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

  @media screen and(max-width: 600px) {
    font-size: 300%;
  }
`;

const SecondaryHeaderStyle = css`
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
    MainHeaderStyle: MainHeaderStyle,
    SecondaryHeaderStyle: SecondaryHeaderStyle
};

export default Tokens;