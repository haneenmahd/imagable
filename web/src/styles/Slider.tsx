import ReactSlider from "react-slider";
import styled from "styled-components";

const SliderStyle = styled(ReactSlider)`
  position: relative;
  padding: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;

  .slider-track {
    position: relative;
    height: 10px;
    width: 100%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 30px;
  }

  .slider-track:nth-child(2) {
    display: none;
  }

  .slider-thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 20px;
    width: 20px;
    margin: 0 4px;
    margin-right: 10px;
    color: #111;
    border-radius: 100px;
    background: #eee;
    vertical-align: middle;
    cursor: pointer;
  }
`;

interface SliderProps {
  onChange: (value: number | readonly number[], index: number) => void;
  currentIndex: number;
}

const Slider = (props: SliderProps) => {
  return (
    <SliderStyle
      className="horizontal-slider"
      defaultValue={0}
      min={0}
      max={100}
      onChange={props.onChange}
      value={props.currentIndex}
      thumbClassName="slider-thumb"
      trackClassName="slider-track"
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  );
};

export default Slider;
