import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #c4c4c450;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const LoadingAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled.span`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  border: 5px solid #fff;
  border-left: 5px solid #454545;
  animation: ${LoadingAnimation} 1s infinite ease-in-out;
`;

const Loading = () => {
  return (
    <LoadingStyle>
      <Loader />
    </LoadingStyle>
  );
};

export default Loading;
