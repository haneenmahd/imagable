import { IconCommons } from "../../globals";

const DropIcon = (props: IconCommons) => {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.6">
          <path
            d="M10.2291 2.12469C10.1051 2.04086 9.95878 1.99606 9.80908 1.99606C9.65938 1.99606 9.51311 2.04086 9.38908 2.12469C9.16408 2.27469 3.99658 5.87469 3.99658 11.1847C3.99658 12.7263 4.60897 14.2047 5.69902 15.2948C6.78908 16.3848 8.26751 16.9972 9.80908 16.9972C11.3507 16.9972 12.8291 16.3848 13.9191 15.2948C15.0092 14.2047 15.6216 12.7263 15.6216 11.1847C15.6216 5.78469 10.4466 2.26719 10.2291 2.12469ZM9.80908 15.4972C8.66594 15.4952 7.57019 15.0402 6.76187 14.2319C5.95355 13.4236 5.49856 12.3278 5.49658 11.1847C5.49658 7.43469 8.65408 4.60719 9.80908 3.68469C10.9716 4.59219 14.1216 7.43469 14.1216 11.1847C14.1196 12.3278 13.6646 13.4236 12.8563 14.2319C12.048 15.0402 10.9522 15.4952 9.80908 15.4972Z"
            fill={props.active ? "#FAFAFA" : "#D9D9D9"}
          />
        </g>
      </svg>
    );
}

export default DropIcon;