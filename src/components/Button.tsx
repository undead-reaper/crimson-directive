import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  id: string;
  label: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      id={props.id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${props.className}`}
    >
      {props.leftIcon && React.createElement(props.leftIcon)}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>
            {props.label}
        </div>
      </span>
      {props.rightIcon && React.createElement(props.rightIcon)}
    </button>
  );
};

export default Button;
