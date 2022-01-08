import styled, { css } from "styled-components";

const DefaultStyles = css`
    background: #FFEFEF;

    &:hover {
      background: #e6d2d2;
    }
`;

const MainStyles = css`
    background: #92A9BD;
    color: #FFEFEF;

    &:hover {
      background: #5c7183;
    }
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
    margin: 5px;
    cursor: pointer;
    transition: background ease-in .1s;
`;

const ButtonIcon = styled.span`
    height: 20px; width: 20px;
    margin: 0 5px;

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
    )
}

export default Button;