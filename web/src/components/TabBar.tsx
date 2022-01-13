import styled from "styled-components";
import CropIcon from "../assets/js/CropIcon";

const TabBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 7% 5%;
  width: 80%;
  height: 100px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 10% 0;
  }
`;

const TabBar = () => {
  return (
    <TabBarStyle>
      <CropIcon active={true} />
    </TabBarStyle>
  );
};

export default TabBar;