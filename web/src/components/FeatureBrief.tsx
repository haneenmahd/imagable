import styled, { css } from "styled-components";

const FeatureBriefContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 5%;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

type FeatureBriefCardTheme = string | "pink" | "green" | "skin" | "violet" | "default";

function serializeBrierCardTheme(theme: FeatureBriefCardTheme) {
    const defaultCss = css`
      background: #c9c0ff;
    `;

    switch (theme) {
      case "pink":
        return css`
          background: #ffc7c7;
        `;

      case "green":
        return css`
          background: #b0cfc6;
        `;

      case "skin":
        return css`
          background: #ffefef;
        `;

      case "violet":
        return defaultCss;

      case "default":
        return defaultCss;

      default:
        return defaultCss;
    }
}

interface FeatureBriefCardProps {
    theme: FeatureBriefCardTheme;
}

const FeatureBriefCard = styled.div<FeatureBriefCardProps>`
  height: 70vh;
  width: 45vw;
  border-radius: 20px;
  padding: 62px;
  margin: 20px 40px;
  ${p => serializeBrierCardTheme(p.theme)}

  @media screen and (max-width: 1000px) {
      height: 60vh;
      width: 70vw;
      margin: 40px 20px;
  }
`;

const FeatureBrief = () => {
    return (
      <FeatureBriefContainer>
        <FeatureBriefCard></FeatureBriefCard>
        <FeatureBriefCard theme="pink"></FeatureBriefCard>
        <FeatureBriefCard theme="green"></FeatureBriefCard>
        <FeatureBriefCard theme="skin"></FeatureBriefCard>
      </FeatureBriefContainer>
    );
}

export default FeatureBrief;