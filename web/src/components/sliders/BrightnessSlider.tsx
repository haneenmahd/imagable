import { FunctionComponent } from "react";
import Slider from "../Slider";

interface BrightnessSliderProps {
  keyIndex: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BrightnessSlider: FunctionComponent<BrightnessSliderProps> = (
  props: BrightnessSliderProps
) => {
  return <Slider {...props} />;
};

export default BrightnessSlider;
