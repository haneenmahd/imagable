import React from "react";
import styled, {css} from "styled-components";
import globals from "../globals";

const TabActive = css`
  background-color: #fafafa13;
`;

const TabTarget = styled.span<{active: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  background: transparent;
  border-radius: 40px;
  cursor: pointer;
  margin: 8px;
  outline: none;
  transition: transform 0.3s ${globals.styling.transition};

  &:hover,
  :focus {
    transform: scale(1.2);
  }

  ${(p) => p.active && TabActive}
`;
const Tab = (props: {
  keyIndex: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactChildren | JSX.Element;
}) => {
  return (
    <TabTarget
      onClick={() => props.setActiveIndex(props.keyIndex)}
      onKeyDown={(e) =>
        e.key === "Enter" ? props.setActiveIndex(props.keyIndex) : null
      }
      active={props.activeIndex === props.keyIndex ? true : false}
      tabIndex={props.keyIndex}
    >
      {props.children}
    </TabTarget>
  );
};

export default Tab;
