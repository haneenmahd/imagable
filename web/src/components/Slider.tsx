import React, { useState } from "react";
import styled, { css } from "styled-components";
import globals from "../globals";

const SliderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 58px;
`;

const SliderActive = css`
  width: 5px;
  height: 44px;
  background: #ffffff;
`;

const SliderTarget = styled.span<{ active: boolean; }>`
  width: 4px;
  height: 28px;
  background: rgba(255, 255, 255, 0.46);
  border-radius: 40px;
  margin: 0 8px;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ${globals.styling.transition};

  &:hover {
    transform: scale(1.2);
  }

  ${p => p.active && SliderActive}
`;
const Slider = (props: {
  keyIndex: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <SliderTarget
      onClick={() => props.setActiveIndex(props.keyIndex)}
      active={props.activeIndex === props.keyIndex ? true : false}
      tabIndex={props.keyIndex}
    />
  );
};

export default Slider;