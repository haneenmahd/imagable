import React from "react";
import styled from "styled-components";
import EditorSample from "../assets/png/logo.png";
import FilterCircle from "./FilterCircle";

const FilterStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const Filters = (props: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const activeIndex = props.activeIndex,
    setActiveIndex = props.setActiveIndex;

  return (
    <FilterStyle>
      <FilterCircle
        accessibilityText="Baked"
        keyIndex={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        imageSource={EditorSample}
      />

      <FilterCircle
        accessibilityText="Orion"
        keyIndex={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        imageSource={EditorSample}
      />
    </FilterStyle>
  );
};

export default Filters;
