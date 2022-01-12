import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

const SliderStyle = styled(ReactSlider)`

`;

const Slider = () => {
    return (
        <SliderStyle 
            thumbClassName=""
            trackClassName=""/>
    );
}

export default Slider;