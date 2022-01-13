import { useState } from "react";
import styled from "styled-components";
import CropIcon from "../assets/js/CropIcon";
import DropIcon from "../assets/js/DropIcon";
import FitlersIcon from "../assets/js/FiltersIcon";
import SunIcon from "../assets/js/SunIcon";
import VectorIcon from "../assets/js/VectorIcon";
import Tab from "./Tab";

const TabBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7% 5%;
  width: 80%;
  height: 100px;

  svg {
    margin: 0 20px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 10% 0;
  }
`;

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabBarStyle>
      <Tab keyIndex={0} activeIndex={activeTab} setActiveIndex={setActiveTab}>
        <SunIcon />
      </Tab>

      <Tab keyIndex={1} activeIndex={activeTab} setActiveIndex={setActiveTab}>
        <CropIcon />
      </Tab>

      <Tab keyIndex={2} activeIndex={activeTab} setActiveIndex={setActiveTab}>
        <DropIcon />
      </Tab>

      <Tab keyIndex={3} activeIndex={activeTab} setActiveIndex={setActiveTab}>
        <VectorIcon />
      </Tab>

      <Tab keyIndex={4} activeIndex={activeTab} setActiveIndex={setActiveTab}>
        <FitlersIcon />
      </Tab>
    </TabBarStyle>
  );
};

export default TabBar;