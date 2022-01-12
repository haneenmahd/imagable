import styled, { css } from "styled-components";

const FeatureBriefContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5%;
`;

type FeatureBriefCardTheme = string | "pink" | "green" | "skin" | "violet" | "default";

function serializeBrierCardTheme(theme: FeatureBriefCardTheme) {
    const defaultCss = css`
      background: #c9c0ff;

      header {
        color: #504398;
      }

      h3 {
        color: #6253b8;
      }
    `;

    switch (theme) {
      case "pink":
        return css`
          background: #ffc7c7;

          header {
            color: #966060;
          }

          h3 {
            color: #b87474;
          }
        `;

      case "green":
        return css`
          background: #b0cfc6;

          header {
            color: #55887a;
          }

          h3 {
            color: #64a28f;
          }
        `;

      case "skin":
        return css`
          background: #ffefef;

          header {
            color: #ac8484;
          }

          h3 {
            color: #cb8f8f;
          }
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
  width: 40vw;
  border-radius: 20px;
  padding: 40px;
  margin: 20px 40px;
  ${(p) => serializeBrierCardTheme(p.theme)}

  @media screen and (max-width: 1400px) {
    height: 60vh;
    width: 42vw;
    margin: 30px 20px;
  }

  @media screen and (max-width: 1050px) {
    width: 80vw;
  }

  @media screen and (max-width: 600px) {
    padding: 27px;
    width: 95vw;
  }
`;

const FeatureBriefCardHeader = styled.header`
  font-size: 200%;
  font-weight: 900;
  margin: 8px 0;

  @media screen and (max-width: 600px) {
    font-size: 150%;
  }
`;

const FeatureBriefCardDescribe = styled.h3`
  font-size: 110%;
  font-weight: bold;
  margin: 8px 0;
`;

const FeatureBrief = () => {
    return (
      <FeatureBriefContainer>
        <FeatureBriefCard>
          <FeatureBriefCardHeader>
            Easy and simple editing!
          </FeatureBriefCardHeader>
          <FeatureBriefCardDescribe>
            Simple and powerful tools right in your hands. It is just so easy to
            use them. Just made them even easier!
          </FeatureBriefCardDescribe>
        </FeatureBriefCard>

        <FeatureBriefCard theme="pink">
          <FeatureBriefCardHeader>Use filters</FeatureBriefCardHeader>
          <FeatureBriefCardDescribe>
            Our custom filters lets you take your photos to the next level
          </FeatureBriefCardDescribe>
        </FeatureBriefCard>

        <FeatureBriefCard theme="green">
          <FeatureBriefCardHeader>
            Convert between formats
          </FeatureBriefCardHeader>
          <FeatureBriefCardDescribe>
            Export and convert your files between different image formats.
          </FeatureBriefCardDescribe>
        </FeatureBriefCard>

        <FeatureBriefCard theme="skin">
          <FeatureBriefCardHeader>
            Compress Images
          </FeatureBriefCardHeader>
          <FeatureBriefCardDescribe>
            Compress your images to save time, speed and storage!
          </FeatureBriefCardDescribe>
        </FeatureBriefCard>
      </FeatureBriefContainer>
    );
}

export default FeatureBrief;