import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// components
import LocalLink from "./LocalLink";

// NavContentIcons
import NavContentToolsIcon from "../assets/svg/tools.svg";
import NavContentCreateIcon from "../assets/svg/create.svg";
import NavContentGitHubIcon from "../assets/svg/github.svg";
import globals from "../globals";

const NavScrolledEffect = css`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

const NavMobileStyle = css`
  width: 100%;
  top: 0%;
  height: 60px;
  border-radius: 0;
`;

interface NavBarComponentProps {
  scrolled: boolean;
}

const NavBarComponent = styled.nav<NavBarComponentProps>`
  position: fixed;
  top: 3%;
  left: 50%;
  transform: translate(-50%, -3%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 50%;
  height: 70px;
  border-radius: 30px;
  transition: all .3s ease-in-out;
  z-index: 200;
  ${p => p.scrolled && NavScrolledEffect}

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
    background: rgba(255, 255, 255, 0.88);
  }

  img {
    margin: 0 4px;
  }

  @media screen and (max-width: 350px) {
    padding: 6px;

    img {
      height: 18px;
      width: 18px;
      margin: 0 2px;
    }
  }
`;

const NavContentText = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 31px;
  color: #768da1;
  margin: 0 4px;

  @media screen and (max-width: 600px) {
    font-size: 100%;
  }
`;

const NavBar = () => {
  const [scrollState, setScrollState] = useState<boolean>(false);

  // use blur effect while scroll position is above 100
  window.onscroll = () => {
      if (window.scrollY > 100) {
          setScrollState(true);
      } else {
        setScrollState(false);
      }

      console.log(scrollState);
  }

  return (
    <NavBarComponent scrolled={scrollState}>
      <Link to="/tools">
        <NavContent>
          <img src={NavContentToolsIcon} alt="NavBar Tools Object NavLink" />
          <NavContentText>Tools</NavContentText>
        </NavContent>
      </Link>

      <Link to="/create">
        <NavContent>
          <img src={NavContentCreateIcon} alt="NavBar Tools Object NavLink" />
          <NavContentText>Create</NavContentText>
        </NavContent>
      </Link>

      <LocalLink target="_blank" href={globals.githubUrl} noStyles={false}>
        <NavContent>
          <img src={NavContentGitHubIcon} alt="NavBar Tools Object NavLink" />
          <NavContentText>GitHub</NavContentText>
        </NavContent>
      </LocalLink>
    </NavBarComponent>
  );
};

export default NavBar;
