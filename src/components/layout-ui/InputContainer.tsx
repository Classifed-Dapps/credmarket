import React from "react";
import HeaderInputField from "./HeaderInputField";

export default function InputContainer() {
  return (
    <div className="flex gap-1 items-center justify-center">
      <HeaderInputField type="left" />
      <HeaderInputField type="right" />
    </div>
  );
}
