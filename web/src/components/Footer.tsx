import React, { PureComponent } from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  height: 100px;
  width: 100vw;
  max-width: 100vw;
  background: #333;
`;

export default class Footer extends PureComponent {
  render() {
    return <FooterStyle></FooterStyle>;
  }
}
