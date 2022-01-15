// global variables that should be used under specific views or components

import {css, FlattenSimpleInterpolation} from "styled-components";

// that re-use the same thing again and again
const globals = {
  githubUrl: "https://github.com/imagable",
  styling: {
    transition: "cubic-bezier(0.44, 0.18, 0.22, 0.82)",
  },
};

export interface IconCommons {
  active?: boolean;
}

export interface FilterInput {
  sepia?: number;
  blur?: number;
  saturation?: number;
  contrast?: number;
  brightness?: number;
  hueRotate?: number;
}

export function applyFilter(_input: FilterInput): FlattenSimpleInterpolation {
  let mixUpFilter: FlattenSimpleInterpolation = css`
    filter: blur(${_input.blur}px) brightness(${_input.brightness}%)
      contrast(${_input.contrast! / 10}) saturate(${_input.saturation! / 10});
  `;

  return mixUpFilter;
}

export default globals;
