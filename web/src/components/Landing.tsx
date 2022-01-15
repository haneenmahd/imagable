import {useState} from "react";
import {FunctionComponent} from "react";
import styled from "styled-components";
import globals from "../globals";
import AllCenter from "../styles/AllCenter";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  box-shadow: 20px 30px 40px 0 #000a0028;
  padding: 80px;

  @media screen and (max-width: 600px) {
    width: 90vw;
    height: 80vh;
    padding: 30px;
  }
`;

const Header = styled.header`
  h1,
  p {
    margin: 4px 0;
  }

  p {
    font-size: 18px;
  }
`;

const ImageUploadContainer = styled.div`
  width: 100%;
  ${AllCenter}
  justify-content: flex-start;
  margin-top: 50px;

  h1,
  p {
    margin: 4px 0;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ActionsContainer = styled.div`
  ${AllCenter}
  align-items: center;
  flex-direction: column;
`;

const ImageInputLabel = styled.div`
  height: 50px;
  max-width: 300px;
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

interface LandingProps {}

const Landing: FunctionComponent<LandingProps> = () => {
  const [imageUploadUrl, setImageUploadUrl] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const handleUpload = () => {
    setUploadButtonText("Uploaded ✅");

    setTimeout(() => {
      setUploadButtonText("Upload Image");
    }, 3000);
  };

  const loadFile: (e: any) => void = (e) => {
    const file: any = e.target.files![0];

    setImageUploadUrl(URL.createObjectURL(file));

    handleUpload();
  };

  return (
    <Container>
      <Header>
        <h1>Imagable</h1>
        <p>
          Imagable automatically builds your icons for different platforms for
          easily and lightning fast ⚡️!
        </p>
      </Header>

      <ImageInput
        id="user-input-image-file"
        type="file"
        accept="image/*"
        name="user-input-image-file"
        onChange={(e) => loadFile(e)}
      />

      <ImageUploadContainer>
        <ActionsContainer>
          <ImageInputLabel>
            <label htmlFor="user-input-image-file">{uploadButtonText}</label>
          </ImageInputLabel>

          <GenerateIconButton>Generate Icons 👷🏻‍♀️</GenerateIconButton>
        </ActionsContainer>

        <ImageUploadPreviewContainer>
          <ImageUploadPreview
            src={imageUploadUrl}
            id="user-input-image-file-preview"
          />
        </ImageUploadPreviewContainer>
      </ImageUploadContainer>
    </Container>
  );
};

export default Landing;
