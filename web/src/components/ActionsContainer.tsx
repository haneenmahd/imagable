import React from "react";
import styled from "styled-components";

// components
import Button from "../styles/Button";

// icons
import PlusIcon from "../assets/svg/plus.svg";
import ImageIcon from "../assets/svg/image.svg";

const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 20px;

    button {
        margin: 0 10px;
        margin-left: 0px;
    }
`;

const PlusImage = () => <img src={PlusIcon} alt="Create icon" />;
const ImageImage = () => <img src={ImageIcon} alt="Sample icon" />;

const Actions = () => {
    return (
        <ActionsContainer>
            <Button icon={<PlusImage />} text="Start Editing"/>
            <Button icon={<ImageImage />} theme="main" text="Try sample"/>
        </ActionsContainer>
    );
}

export default Actions;