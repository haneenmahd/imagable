import React, { useState } from "react";
import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import Logo from "../assets/svg/logo.svg";
import globals, { ResponseData } from "../globals";
import AllCenter from "../styles/AllCenter";
import getServerUrl from "../utils/getServerUrl";
import IconsGrid from "./IconsGrid";
import Loading from "./Loading";
import toast, { Toaster } from "react-hot-toast";
import scrollTo from "../utils/scrollTo";
import { PlusCircle, Aperture } from "react-feather";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  max-width: 100vw;
  width: 100vw;
  background-color: #fff;
  box-shadow: 20px 30px 40px 0 #000a0028;
  padding: 80px;
  text-align: center;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }

  a {
    display: inline;
    margin: 10px;
    border-bottom: 0.5px solid #0a0a0a60;
    transition: 0.2s ${globals.styling.transition};

    :hover {
      opacity: 0.5;
      border-width: 2px;
    }
  }
`;

const Header = styled.header`
  text-align: center;
  padding: 10px;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100px;
    }
  }

  h1,
  p {
    margin: 8px 0;
  }

  p {
    font-size: 18px;
    color: #4b4b4b;
    line-height: 1.5rem;
    font-weight: 600;
  }

  p.description {
    font-weight: normal;
    margin: 10px 5px;
    font-size: 14px;
    color: #606060;
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

const ImageInputLabel = styled.button`
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

    svg {
      margin: 0 5px;
    }
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
  background-color: #0a0a0a;
  color: #fafafa;
  border: 2px solid #0a0a0a20;
  cursor: pointer;

  &:hover {
    border-color: #c4c4c4;
  }

  ${(p) =>
    p.disabled &&
    css`
      * {
        cursor: not-allowed;
      }

      cursor: not-allowed;

      background: #938f8f;
    `}
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
  const [uploadButtonText, setUploadButtonText] = useState<string>("Upload");
  const [dataStructue, setDataStructure] = useState<ResponseData>([]);
  const [isUploaded, setUploaded] = useState<boolean>(false);
  const [showIconGrids, setShowIconGrids] = useState<boolean>(false);
  const [iconsLoading, setIconsLoading] = useState<boolean>(false);

  const handleDataStrucute = async () => {
    setIconsLoading(true);

    await fetch(`${getServerUrl()}/api/data`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setDataStructure(data);
      })
      .catch((error) => {
        console.error(error);
        // remove loading element
        setIconsLoading(false);
        toast.error("An error occured while fetching the server data");
      });

    setShowIconGrids(true);

    setIconsLoading(false);

    scrollTo(0, 450);

    toast.success("Successfully Generated Icons");
    // inform how to download the generated icon
    toast("Click on any of these buttons to download the generated image");
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
        setUploaded(true);
        setUploadButtonText("Upload");
      })
      .catch((error) => {
        setUploaded(false);

        setUploadButtonText("Upload Image");
        console.error(error);
        // reset text to default
        toast.error("An error occured while uploading the image");
      });
  };

  const loadFile: (e: any) => void = async (e) => {
    const file: any = e.target.files![0];

    setImageUploadUrl(URL.createObjectURL(file));

    await handleUpload(e);
  };

  return (
    <>
      <Container>
        <Header>
          <h1>
            Imagable{" "}
            <img height={100} width={100} src={Logo} alt="Imagable's Logo" />
          </h1>
          <p>
            Imagable automatically optimizes and resizes your icons for
            different platforms for easily and super fast{" "}
            <span role="img" aria-label="lightning fast">
              ⚡️
            </span>
            ! <br />
          </p>
          <p className="description">
            Imagable is a micro-service that automatically optimizes and resizes
            your icons and logos for different platforms including iOS, Android
            and Web and for devices with different display depths. It also
            generates for App Store, Play Store and icons that can used in
            differnet scenarios like Settings, Notification bars.
          </p>

          <a href="#upload-container">Get started by uploading a image</a>
        </Header>

        <ImageInput
          id="user-input-image-file"
          type="file"
          accept="image/*"
          name="image-file"
          onChange={loadFile}
          required
        />
        <ImageUploadContainer id="upload-container">
          <ActionsContainer>
            <ImageInputLabel>
              <label htmlFor="user-input-image-file">
                {uploadButtonText} <PlusCircle />
              </label>
            </ImageInputLabel>

            <GenerateIconButton
              disabled={!isUploaded}
              onClick={async () => await handleDataStrucute()}
            >
              <label>Generate</label> <Aperture />
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
        {iconsLoading && <Loading />}

        {/* Wrapper for React Hot toast Component */}
        <Toaster reverseOrder />
      </Container>
      {showIconGrids && <IconsGrid dataStrucute={dataStructue} />}
    </>
  );
};

export default Landing;
