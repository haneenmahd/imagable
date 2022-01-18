import React, { FunctionComponent } from "react";
import styled from "styled-components";
import globals, { ResponseData } from "../globals";

const IconsGridStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 50px 10px;
`;

const IconGrid = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 30px;
  border: 2px solid #c4c4c430;
  padding: 20px;
  margin: 30px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ${globals.styling.transition};

  &:hover {
    box-shadow: 20px 40px 80px 0 #c4c4c430;
  }

  @media screen and (max-width: 600px) {
    height: 220px;
    width: 220px;
    margin: 20px;
  }
`;

const IconGridText = styled.p`
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #6c6c6c;

  p {
    margin: 3px 0;
    font-weight: 400;
    color: #b1b1b1;
  }
`;

interface IconsGridProps {
  dataStrucute: ResponseData;
}

const IconsGrid: FunctionComponent<IconsGridProps> = (props) => {
  return (
    <IconsGridStyle>
      {props.dataStrucute.map((data) =>
        data.files.map((file) =>
          file.files.map((size, index) => (
            <IconGrid key={index}>
              <IconGridText key={index}>
                Icon for {data.folderName}-{file.folderName}
                <br />
                <p>
                  {size.size}x{size.size}
                </p>
              </IconGridText>
            </IconGrid>
          ))
        )
      )}
    </IconsGridStyle>
  );
};

export default IconsGrid;
