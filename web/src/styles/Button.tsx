import styled, {css} from "styled-components";
import Tokens from "./tokens";

const DefaultStyles = css`
  background: #ffefef;
  color: ${Tokens.themeColors.lightSecondaryColor};

  &:hover {
    background: #e6d2d2;
  }
`;

const MainStyles = css`
  background: #92a9bd;
  color: #ffefef;

  &:hover {
    background: #5c7183;
  }
`;

interface ButtonStylesProps {
  theme?: "main" | "secondary";
}

export const ButtonStyle = styled.button<ButtonStylesProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  ${(p) => (p.theme === "main" ? MainStyles : DefaultStyles)}
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
  transition: background ease-in 0.1s;

  @media screen and (max-width: 600px) {
    padding: 3.6%;
  }
`;

const ButtonIcon = styled.span`
  height: 20px;
  width: 20px;
  margin: 0 5px;

  & svg,
  img {
    height: 20px;
    width: 20px;
  }
`;

const ButtonText = styled.p`
  font-size: 160%;
  font-weight: 500;

  @media screen and (max-width: 400px) {
    font-size: 127%;
  }

  @media screen and (max-width: 350px) {
    font-size: 100%;
  }
`;

interface ButtonProps extends ButtonStylesProps {
  text?: string;
  icon?: JSX.Element;
  onClick?: any;
  children?: React.ReactChildren | string;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonStyle onClick={props.onClick} theme={props.theme}>
      {/* Render only if `props.icon` exists */}
      {props.icon && <ButtonIcon>{props.icon}</ButtonIcon>}
      {/* Render only if `props.icon` exists */}
      {props.text && <ButtonText>{props.text}</ButtonText>}

      {props.children}
    </ButtonStyle>
  );
};

export default Button;
