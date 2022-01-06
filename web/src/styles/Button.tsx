import React from "react";
import styled, { css } from "styled-components";

const DefaultStyles = css`
    background: #FFEFEF;
`;

const MainStyles = css`
    background: #92A9BD;
`;

interface ButtonStylesProps {
    theme?: "main" | "secondary";
}

const ButtonStyle = styled.button<ButtonStylesProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    ${p => p.theme === "main" ? MainStyles : DefaultStyles}
    border-radius: 20px;
`;

const ButtonIcon = styled.span`
    height: 20px; width: 20px;
    margin 0 5px;

    & svg, img {
        height: 20px; width: 20px;
    }
`;

const ButtonText = styled.p`
    font-size: 21px;
    font-weight: 500;
`;

interface ButtonProps extends ButtonStylesProps {
    text: string;
    icon?: JSX.Element;
}

const Button = (props: ButtonProps) => {
    return (
        <ButtonStyle theme={props.theme}>
            {/* Render only if `props.icon` exists */}
            {props.icon && <ButtonIcon>{props.icon}</ButtonIcon>}
            {/* Render only if `props.icon` exists */}
            <ButtonText>{props.text}</ButtonText>
        </ButtonStyle>
=======
import styled from "styled-components";

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #ffefef;
  border-radius: 20px;
`;

const ButtonIcon = styled.span`
  margin: 0px 5px;
  height: 20px;
  width: 20px;
`;

const ButtonText = styled.p`
  font-family: DM Sans;
  font-size: 21px;
  font-weight: 500;
  color: #768da1;
  margin: 0 5px;
`;

interface ButtonProps {
  text: string;
  icon?: JSX.Element;
}

const Button = (props: ButtonProps): JSX.Element => {
    return (
      <ButtonStyle>
        {/* Render only if `props.icon` exists */}
        {props.icon && <ButtonIcon>{props.icon}</ButtonIcon>}
        {/* Render only if `props.icon` exists */}
        <ButtonText>{props.text}</ButtonText>
      </ButtonStyle>
    );
}

export default Button;