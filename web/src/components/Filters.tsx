import { useState } from "react";
import styled, { css } from "styled-components";
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

const Filters = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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