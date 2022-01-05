import styled, { css } from "styled-components";

interface LocalLinkProps {
    noStyles: boolean;
}

// render with no advanced link styles
// use this for elements which are already using some custom styles
// else, use the default link which would help a bit in the website perfomance and SEO
const NoStyles = css``;

const LocalLinkStyles = css`
    color: $light-secondary-color;
`;

const LocalLink = styled.a<LocalLinkProps>`
    ${p => p.noStyles ? NoStyles : LocalLinkStyles}
`;

export default LocalLink;