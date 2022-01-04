import React from "react";
import styled, { css } from "styled-components";

const NavMobileStyle = css`
    width: 75%
`;

const NavBarComponent = styled.nav`
    position: fixed;
    top: 3%;
    left: 50%;
    transform: translate(-50%, -3%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 45%;
    height: 43px;

    @media screen and (max-width: 600px) {
        ${NavMobileStyle}
    }
`;

const NavContent = styled.div``;

export default class NavBar extends React.Component {
    render() {
        return(
            <NavBarComponent>

            </NavBarComponent>
        );
    }
}