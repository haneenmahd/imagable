import React from "react";
import styled, { css } from "styled-components";
import globals from "../globals";

const FilterCircleActive = css`
  filter: sepia(0%);
  border-width: 5px;
  width: 60px;
  height: 60px;
`;

const FilterCircleTarget = styled.img<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border: 2px solid #ffffff;
  border-radius: 100px;
  margin: 0 10px;
  filter: sepia(20%);
  cursor: pointer;
  outline: none;
  transition: all 0.1s ${globals.styling.transition};

  ${(p) => p.active && FilterCircleActive}
`;
const FilterCircle = (props: {
  keyIndex: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  imageSource: string;
}) => {
  return (
    <FilterCircleTarget
      onClick={() => props.setActiveIndex(props.keyIndex)}
      onKeyDown={(e) =>
        e.key === "Enter" ? props.setActiveIndex(props.keyIndex) : null
      }
      active={props.activeIndex === props.keyIndex ? true : false}
      tabIndex={props.keyIndex}
      src={props.imageSource}
      alt="Filter Image" />
  );
};

export default FilterCircle;
