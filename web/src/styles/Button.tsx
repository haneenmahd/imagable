import React from "react";
import styled, { css } from "styled-components";

const DefaultStyles = css`
    background: #FFEFEF;
`;

const MainStyles = css`
    background: #92A9BD;
`;

interface ButtonStylesProps {
    theme: "main" | "secondary";
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

    & svg {
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
    );
}

export default Button;