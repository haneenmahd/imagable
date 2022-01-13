// global variables that should be used under specific views or components
// that re-use the same thing again and again
const globals = {
  githubUrl: "https://github.com/imagable",
  styling: {
    transition: "cubic-bezier(0.44, 0.18, 0.22, 0.82)"
  }
};

interface IconCommons {
  active?: boolean;
}

export type { IconCommons };
export default globals;