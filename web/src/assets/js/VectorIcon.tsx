import { IconCommons } from "../../globals";

const VectorIcon = (props: IconCommons) => {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.6"
          d="M18.7886 16.9604L10.6872 0.977449C10.5972 0.874994 10.5071 0.772539 10.4171 0.670085C9.96705 0.362721 9.42695 0.465175 9.15691 0.977449L1.05552 16.9604C0.875488 17.0628 0.875488 17.2677 0.875488 17.4726C0.875488 18.0874 1.23555 18.4972 1.77564 18.4972H17.9784C18.1584 18.4972 18.2485 18.4972 18.4285 18.3947C18.8786 18.0874 18.9686 17.4726 18.7886 16.9604Z"
          fill={props.active ? "#FAFAFA" : "#D9D9D9"}
        />
      </svg>
    );
}

export default VectorIcon;