import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// components
import LocalLink from "./LocalLink";

// NavContentIcons
import NavContentToolsIcon from "../assets/svg/tools.svg";
import NavContentCreateIcon from "../assets/svg/create.svg";
import NavContentGitHubIcon from "../assets/svg/github.svg";
import globals from "../globals";

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

const NavContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    margin: 0 4px;
    border-radius: 20px;
    transition: background 200ms ease-out;
    &:hover {
        background: rgba(255, 255, 255, 0.88);;
    }

    img {
        margin: 0 4px;
    }
`;

const NavContentText = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 31px;
    color: #768DA1;
    margin: 0 4px;
`;

export default class NavBar extends React.Component {
    render() {
        return(
            <NavBarComponent>
                <Link to="/tools">
                    <NavContent>
                        <img src={NavContentToolsIcon} alt="NavBar Tools Object NavLink" />
                        <NavContentText>
                            Tools
                        </NavContentText>
                    </NavContent>
                </Link>

                <Link to="/create">
                    <NavContent>
                        <img src={NavContentCreateIcon} alt="NavBar Tools Object NavLink" />
                        <NavContentText>
                            Create
                        </NavContentText>
                    </NavContent>
                </Link>

                <LocalLink target="_blank" href={globals.githubUrl} noStyles={false}>
                    <NavContent>
                    <img src={NavContentGitHubIcon} alt="NavBar Tools Object NavLink" />
                    <NavContentText>
                        GitHub
                    </NavContentText>
                </NavContent>
                </LocalLink>
            </NavBarComponent>
        );
    }
}