import React from "react";
import styled from "styled-components";
import Page from "../styles/Page";

const PageContainer = styled(Page)``;

export default class Tools extends React.Component {
    render() {
        return(
            <PageContainer>
                <h1>Tools Page</h1>
                <p>Incomplete</p>
            </PageContainer>
        );
    }
}