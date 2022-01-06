import styled from "styled-components";

// Styled Component Tokens
import Tokens from "../styles/tokens";

const LayoutContainer = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const LayoutImage = styled.img`
    height: 120px;
`;

const LayoutHeader = styled.h1`
    ${Tokens.mainHeaderStyle}
`;

const LayoutShortHeader = styled.h3`
    ${Tokens.secondaryHeaderStyle}
`;

const Layout = () => {
    return (
        <LayoutContainer>
            <LayoutImage />
            <LayoutHeader>Imagable</LayoutHeader>
            <LayoutShortHeader>Create, Edit and do <br />more with your images</LayoutShortHeader>
        </LayoutContainer>
    );
};

export default Layout;