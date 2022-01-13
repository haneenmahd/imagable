import React from "react";
import styled, { css } from "styled-components";
import globals from "../globals";

const FilterBoxActive = css`
  font-size: 16px;
`;

const FilterBox = styled.div<{ active?: boolean; }>`
  height: 100px;
  width: auto;
  font-weight: bold;
  font-size: 15px;

  ${p => p.active && FilterBoxActive}
`;

const FilterCircleActive = css`
  filter: sepia(0%);
  border-width: 5px;
  width: 60px;
  height: 60px;
`;

const FilterCircleTarget = styled.img<{ active?: boolean }>`
  width: 50px;
  height: 50px;
  border: 2px solid #ffffff;
  border-radius: 100px;
  margin: 0 10px;
  filter: sepia(20%);
  cursor: pointer;
  outline: none;
  transition: all 0.3s ${globals.styling.transition};

  ${(p) => p.active && FilterCircleActive}
`;
const FilterCircle = (props: {
  keyIndex: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  imageSource: string;
}) => {
  return (
    <FilterBox>
      <FilterCircleTarget
        onClick={() => props.setActiveIndex(props.keyIndex)}
        onKeyDown={(e) =>
          e.key === "Enter" ? props.setActiveIndex(props.keyIndex) : null
        }
        active={props.activeIndex === props.keyIndex ? true : false}
        tabIndex={props.keyIndex}
        src={props.imageSource}
        alt="Filter Image"
      />
    </FilterBox>
  );
};

export default FilterCircle;
