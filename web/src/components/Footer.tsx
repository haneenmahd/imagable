import React, { PureComponent } from "react";
import styled from "styled-components";
import { Info } from "react-feather";
import globals from "../globals";
import Seperator from "./Seperator";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  width: 100vw;
  max-width: 100vw;
  background: linear-gradient(12deg, #33333390, #333);

  a {
    border-bottom: 0.5px solid #fafafa60;
    transition: 0.2s ${globals.styling.transition};

    :hover {
      opacity: 0.8;
    }
  }

  h4 {
    color: #fafafa;
    font-weight: bold;
    margin: 8px 0;
  }

  h5 {
    color: #e3e3e3;
  }

  p {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    svg {
      margin: 0 4px;
      height: 12px;
      width: 12px;

      @media screen and (min-width: 700px) {
        height: 18px;
        width: 18px;
      }
    }
  }
`;

export default class Footer extends PureComponent {
  render() {
    return (
      <FooterStyle>
        <h4>
          Build and Developed with{" "}
          <span role="img" aria-label="Love Emoji">
            {" "}
            ❤️
          </span>{" "}
          from{" "}
          <a
            href="https://github.com/imagable"
            target="_blank"
            rel="noopener noreferrer"
          >
            Imagable
          </a>
        </h4>
        <h5>
          Give us a star{" "}
          <a
            href="https://github.com/imagable/imagable"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          <span role="img" aria-label="Star Image">
            ⭐️
          </span>
        </h5>

        <br />
        <Seperator />

        <p>
          <Info /> Your Images will be removed after a few hours
        </p>
      </FooterStyle>
    );
  }
}

// only allow generating after upload
