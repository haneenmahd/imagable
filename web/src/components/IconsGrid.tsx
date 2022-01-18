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

const IconGrid = styled.a`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 250px;
  border-radius: 30px;
  border: 2px solid #c4c4c430;
  padding: 20px 0;
  margin: 30px;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ${globals.styling.transition};

  &:hover {
    box-shadow: 20px 40px 80px 0 #c4c4c430;
  }

  @media screen and (max-width: 600px) {
    max-height: 500px;
    max-width: 500px;
    margin: 20px;
  }
`;

const IconGridText = styled.span`
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #6c6c6c;
  margin-top: 10px;

  p {
    margin: 3px 0;
    font-weight: 400;
    color: #b1b1b1;
  }
`;

const IconGridImage = styled.img`
  max-height: 100%;
  max-width: 100%;
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
            <IconGrid target="_blank" href={size.path} key={index} download>
              <IconGridImage
                src={size.path}
                alt={`Icon generated by imagable - ${data.folderName}-${data.folderName}-${size.size}x${size.size}`}
              />

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