import React, { useState } from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import globals, { ResponseData } from "../globals";
import AllCenter from "../styles/AllCenter";
import getServerUrl from "../utils/getServerUrl";
import IconsGrid from "./IconsGrid";

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  width: 100vw;
  background-color: #fff;
  box-shadow: 20px 30px 40px 0 #000a0028;
  padding: 80px;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;

const Header = styled.header`
  text-align: center;
  padding: 10px;
  h1,
  p {
    margin: 4px 0;
  }

  p {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    h1,
    p {
      margin: 8px;
    }

    p {
      font-size: 16px;
      padding: 0 12px;
    }
  }
`;

const ImageUploadContainer = styled.div`
  width: 100%;
  ${AllCenter}
  margin-top: 50px;

  h1,
  p {
    margin: 4px 0;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ActionsContainer = styled.div`
  ${AllCenter}
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

const ImageInputLabel = styled.div`
  height: 50px;
  max-width: 350px;
  flex-direction: column;
  ${AllCenter}
  background-color: #d8d8d8;
  margin: 20px 0;
  padding: 15px;
  border-radius: 20px;
  border: 2px solid #2222225e;
  transition: all 0.3s ${globals.styling.transition};

  /* Append cursor style to every child element inside ImageInputLabel */
  * {
    cursor: pointer;
  }

  label {
    font-size: 15px;
    font-weight: 600;
  }

  &:hover {
    border: 2px solid #222;
  }

  label {
    height: 100%;
    width: 100%;
    text-align: center;
    ${AllCenter}
    transition: 0.2s ${globals.styling.transition};
  }
`;

const GenerateIconButton = styled(ImageInputLabel)`
  flex-direction: row;
  margin: 0 8px;
  font-weight: 600;
  background-color: #77ea7e;
  color: #27522a;
  cursor: pointer;

  &:hover {
    border-color: #27522a;
  }
`;

const ImageUploadPreviewContainer = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 30px;
  overflow: hidden;
  margin: 0px 40px;
  border: 2px solid #c4c4c430;
  ${AllCenter}
`;

const ImageUploadPreview = styled.img`
  height: auto;
  max-height: 500px;
  max-width: 100%;
`;

interface LandingProps {
  defaultLink: string;
}

const Landing: FunctionComponent<LandingProps> = (props) => {
  const [imageUploadUrl, setImageUploadUrl] = useState<string>(
    props.defaultLink
  );
  const [uploadButtonText, setUploadButtonText] =
    useState<string>("Upload Image");
  const [dataStructue, setDataStructure] = useState<ResponseData>([]);
  const [showIconGrids, setShowIconGrids] = useState<boolean>(false);

  const handleDataStrucute = async () => {
    await fetch(`${getServerUrl()}/api/data`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setDataStructure(data);
      });

    setShowIconGrids(true);
  };

  const handleUpload = async (e: { target: { files: any } }) => {
    setShowIconGrids(false);

    const files = e.target.files;
    const formData = new FormData();
    formData.append("image-file", files[0]);

    setUploadButtonText("Uploading...");

    await fetch(`${getServerUrl()}/api/allResize`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUploadButtonText("Uploaded ✅");

        setTimeout(() => {
          setUploadButtonText("Upload Image");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadFile: (e: any) => void = async (e) => {
    const file: any = e.target.files![0];

    setImageUploadUrl(URL.createObjectURL(file));

    await handleUpload(e);
  };

  return (
    <Container>
      <Header>
        <h1>Imagable</h1>
        <p>
          Imagable automatically builds your icons for different platforms for
          easily and lightning fast{" "}
          <span role="img" aria-label="lightning fast">
            ⚡️
          </span>
          !
        </p>
      </Header>

      <ImageInput
        id="user-input-image-file"
        type="file"
        accept="image/*"
        name="image-file"
        onChange={loadFile}
        required
      />

      <ImageUploadContainer>
        <ActionsContainer>
          <ImageInputLabel>
            <label htmlFor="user-input-image-file">{uploadButtonText}</label>
          </ImageInputLabel>

          <GenerateIconButton onClick={async () => await handleDataStrucute()}>
            Generate Icons{" "}
            <span role="img" aria-label="working man">
              👷🏻‍♀️
            </span>
          </GenerateIconButton>
        </ActionsContainer>

        <ImageUploadPreviewContainer>
          <ImageUploadPreview
            src={imageUploadUrl}
            id="user-input-image-file-preview"
            alt="Upload your icon to start generating!"
          />
        </ImageUploadPreviewContainer>
      </ImageUploadContainer>

      {showIconGrids && <IconsGrid dataStrucute={dataStructue} />}
    </Container>
  );
};

export default Landing;
