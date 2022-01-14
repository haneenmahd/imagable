import styled, {css} from "styled-components";
import globals from "../globals";
import {SliderProps} from "./sliders/SliderCommons";

const SliderActive = css`
  width: 5px;
  height: 44px;
  background: #ffffff;

  @media screen and (max-width: 1100px) {
    height: 28px;
  }
`;

const SliderTarget = styled.span<{active: boolean}>`
  width: 4px;
  height: 28px;
  background: rgba(255, 255, 255, 0.46);
  border-radius: 40px;
  margin: 12px 8px;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ${globals.styling.transition};

  &:hover,
  :focus {
    transform: scale(1.2);
  }

  ${(p) => p.active && SliderActive}

  @media screen and (max-width: 600px) {
    margin: 8px 6px;
  }

  @media screen and (max-width: 1100px) {
    width: 3px;
    height: 24px;
  }
`;
const Slider = (props: SliderProps) => {
  return (
    <SliderTarget
      onClick={() => props.setActiveIndex(props.keyIndex)}
      onKeyDown={(e) =>
        e.key === "Enter" ? props.setActiveIndex(props.keyIndex) : null
      }
      active={props.activeIndex === props.keyIndex ? true : false}
      tabIndex={props.keyIndex}
    />
  );
};

export default Slider;
