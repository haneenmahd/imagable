import styled from "styled-components";
import CropIcon from "../assets/js/CropIcon";
import SunIcon from "../assets/js/SunIcon";
import VectorIcon from "../assets/js/VectorIcon";

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
  return (
    <TabBarStyle>
      <CropIcon />
      <SunIcon />
      <VectorIcon />
    </TabBarStyle>
  );
};

export default TabBar;