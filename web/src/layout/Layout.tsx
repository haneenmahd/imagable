import styled from "styled-components";

const LayoutContainer = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const LayoutImage = styled.img`
    height: 120px;
`;

const LayoutHeader = styled.h1`
    @include main-header-font-size();
`;

const LayoutShortHeader = styled.h3`
    @include secondary-header-font-size();
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