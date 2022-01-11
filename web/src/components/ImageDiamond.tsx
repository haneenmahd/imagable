import styled, { css, keyframes } from "styled-components";

import SunsetImage from "../assets/png/sunset.png";

const Container = styled.div`
  position: relative;
  width: 504px;
  height: 448px;
`;

const ActiveEffectBox = css<{ text: string; }>`
  content: "${p => p.text}";
  position: absolute;
  top: 10%;
  left: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 13px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
`;

const ImageAnimation = keyframes`
    from {
        bottom: 0;
        left: 0;
    }
`;

const Image = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  height: 280px;
  width: 215px;
  border-radius: 40px;
  background-image: url(${SunsetImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: -4px -20px 20px 0 #22222210;
  animation: ${ImageAnimation} 0.8s cubic-bezier(0.44, 0.18, 0.22, 0.82);
  &::before {
    ${ActiveEffectBox}
  }
`;

const SepiaImage = styled(Image)`
  bottom: 15%;
  left: 20%;
  filter: sepia(60%);

  &::before {
    color: #6b6868;
  }
`;

const ColoredImage = styled(Image)`
  bottom: 20%;
  left: 30%;
  filter: contrast(120%) brightness(120%) saturate(85%);

  &::before {
    color: #7258cb;
  }
`;

const ImageDiamond = () => {
  return (
    <Container>
      <Image text="Effects" />
      <SepiaImage text="Filters" />
      <ColoredImage text="Tools" />
    </Container>
  );
};

export default ImageDiamond;
