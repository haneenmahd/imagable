import React from "react";
import styled, { css } from "styled-components";
import globals from "../globals";

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
  margin: 12px 8px;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ${globals.styling.transition};

  &:hover {
    transform: scale(1.2);
  }

  ${p => p.active && SliderActive}

  @media screen and (max-width: 600px) {
    margin: 8px 6px;
  }
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