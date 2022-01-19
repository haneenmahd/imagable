import { useState } from "react";

export default function useForceUpdate() {
  const [_, setValue] = useState(0);

  return () => setValue((value) => value + 1);
}
