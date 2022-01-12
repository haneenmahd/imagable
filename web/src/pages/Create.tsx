import React from "react";
import styled from "styled-components";
import BackBlur from "../styles/BackBlur";
import Page from "../styles/Page";

import Sunset from "../assets/png/sunset.png";

const PageContainer = styled(Page)`
    min-height: 100vh;
    max-width: 100vw;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ToolsSection = styled.div<{ show: boolean; }>`
    display: ${p => p.show ? "default" : "none"};
    position: fixed;
    top: 50%;
    left: 7%;
    transform: translate(-7%, -50%);
    height: 80vh;
    width: 50vw;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    z-index: 200;
    ${BackBlur}
`;

const ImageCanvas = styled.img`
    max-height: 85vh;
    width: auto;
    border-radius: 30px;
    filter: blur(1px) contrast(500px);
    box-shadow: 20px 40px 50px 0 #c4c4c4aa;
`;

export default class Create extends React.Component<{}, { isToolsOpen: boolean; }> {
    constructor(props: any) {
        super(props);

        this.state = {
            isToolsOpen: true
        };

        this.setToolsOpen = this.setToolsOpen.bind(this);
    }

    setToolsOpen() {
        this.setState({
            isToolsOpen: !this.state.isToolsOpen
        });
    }

    render() {
        const toolsOpen = this.state.isToolsOpen;

        return(
            <PageContainer>
                <ToolsSection show={toolsOpen}>

                </ToolsSection>
                
                <ImageCanvas src={Sunset} />
            </PageContainer>
        );
    }
}