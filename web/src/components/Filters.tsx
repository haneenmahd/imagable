import React from "react";
import styled from "styled-components";
import EditorSample from "../assets/png/editor-sample.jpg";
import FilterCircle from "./FilterCircle";

const FilterStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const Filters = (props: { activeIndex: number; setActiveIndex: React.Dispatch<React.SetStateAction<number>>; }) => {
    const activeIndex = props.activeIndex, setActiveIndex = props.setActiveIndex;

    return (
      <FilterStyle>
        <FilterCircle
          keyIndex={0}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          imageSource={EditorSample}
        />

        <FilterCircle
          keyIndex={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          imageSource={EditorSample}
        />
      </FilterStyle>
    );
}

export default Filters;