import { css, /* types for use with TokenStyleObject interface */ThemedCssFunction, DefaultTheme, FlattenSimpleInterpolation, StyledComponent } from "styled-components";

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

interface TokenStyleObject {
  [styleName: string]: FlattenSimpleInterpolation  | ThemedCssFunction<DefaultTheme> | StyledComponent<any, any, {}, never>;
}

const Tokens: TokenStyleObject = {
    'mainHeaderStyle': mainHeaderStyle,
    'secondaryHeaderStyle': secondaryHeaderStyle
};

export default Tokens;