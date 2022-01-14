import React, {useState} from "react";
import styled, {css, keyframes} from "styled-components";
import TabBar from "./TabBar";
import Seperator from "./Seperator";
import Filters from "./Filters";
import globals from "../globals";
import { BookOpen } from "react-feather";

const CloseControlsView = styled.button`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2% 4%;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.15) 200px
  );
  border: 0.5px solid #ffffff43;
  box-shadow: 4px 8px 28px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 39px;
  color: #fff;
  font-size: 90%;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 1%;
  transition: all 0.3s ${globals.styling.transition};

  p {
    display: flex;
    align-items: center;

    svg {
      margin: 0 8px;
    }
  }

  &:hover {
    background-color: #fafafa20;
  }

  @media screen and (max-width: 1100px) {
    display: flex;
  }
`;

const ControlViewStyleAnimation = keyframes`
  from {
    bottom: -100%;
  }
`;

const ClosedControlViewStyle = css`
  height: 50px;
  min-height: 50px;
  bottom: 0%;

  * {
    opacity: 0;
    display: none;
    transition: opacity 0.3s ${globals.styling.transition};
  }

  button, svg, p, path {
    opacity: 1;
    display: inherit;
  }

  button {
    padding: 15px;
    margin-bottom: 0;
  }
`;

const ControlsViewStyle = styled.div<{visible: boolean}>`
  position: fixed;
  bottom: 0;
  min-height: 317px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(63px);
  -webkit-backdrop-filter: blur(63px);
  animation: ${ControlViewStyleAnimation} 1s ${globals.styling.transition};
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.42, 0, 0.49, 0.79);

  ${(p) => p.visible && ClosedControlViewStyle}

  @media screen and (min-width: 1100px) {
    position: relative;
    margin: 0 40px;
    width: 50vw;
    height: 90vh;
    border-radius: 30px;
    box-shadow: 4px 8px 28px 0px #00000026;
  }

  @media screen and (max-width: 900px) {
    position: absolute;
  }
`;

const ControlsView = (props: {
  currentSlider: JSX.Element;
  filterActiveIndex: number;
  setFilterActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  tabBarActiveIndex: number;
  setTabBarActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  currentSliderText: string;
}) => {
  const [isControlsOpen, setControlsOpen] = useState(false);

  return (
    <ControlsViewStyle visible={isControlsOpen}>
      <CloseControlsView onClick={() => setControlsOpen(!isControlsOpen)}>
        {isControlsOpen ? (
          <p>
            <BookOpen /> Open Editor
          </p>
        ) : (
          <p>
            <BookOpen /> Close Editor
          </p>
        )}
      </CloseControlsView>
      {props.currentSlider}

      <TabBar
        activeTab={props.tabBarActiveIndex}
        setActiveTab={props.setTabBarActiveIndex}
      />
      <Seperator />
      <Filters
        activeIndex={props.filterActiveIndex}
        setActiveIndex={props.setFilterActiveIndex}
      />
    </ControlsViewStyle>
  );
};

export default ControlsView;
