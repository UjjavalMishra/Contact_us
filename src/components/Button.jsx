import React from "react";
import { useState } from "react";
const Button = (props) => {
  return (
    <div>
      <button
        className={`${
          props.outline
            ? "border-2 w-72 h-14 flex justify-center items-center bg-slate-400 "
            : "border-none flex w-32  h-10 justify-center items-center border-2 bg-slate-400"
        }`}
      >
        {props.icon}
        {props.text}
      </button>
    </div>
  );
};

export default Button;
