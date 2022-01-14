import React from "react";
import styled, { css } from "styled-components";
import globals from "../globals";

const FilterBoxActive = css`
  font-size: 16px;
`;

const FilterBox = styled.div<{ active?: boolean }>`
  text-align: center;
  height: 100px;
  width: auto;
  font-weight: bold;
  font-size: 15px;

  ${(p) => p.active && FilterBoxActive}
`;

const FilterCircleActive = css`
  filter: sepia(0%);
  border-width: 5px;
  border-color: #fff;
  width: 60px;
  height: 60px;
`;

const FilterCircleTarget = styled.img<{ active?: boolean }>`
  width: 50px;
  height: 50px;
  border: 2px solid #d9d9d9;
  border-radius: 100px;
  margin: 0 10px;
  filter: sepia(20%);
  cursor: pointer;
  outline: none;
  transition: 0.3s ${globals.styling.transition};

  ${(p) => p.active && FilterCircleActive}
`;

const FilterCircleAccessibilityText = styled.p<{ active?: boolean; }>`
  font-weight: 500;
  font-size: 100%;
  line-height: 1rem;
  margin: 4px 0;
  color: #fff;

  ${p => p.active && css`font-weight: 600;`}
`;

const FilterCircle = (props: {
  keyIndex: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  imageSource: string;
  accessibilityText: string;
}) => {
  return (
    <FilterBox>
      <FilterCircleAccessibilityText
        active={props.activeIndex === props.keyIndex ? true : false}>
        {props.accessibilityText}
      </FilterCircleAccessibilityText>
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
