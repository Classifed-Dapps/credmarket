import React from "react";
import HeaderInputField from "./HeaderInputField";

export default function InputContainer() {
  return (
    <div className="flex md:flex-row flex-col gap-4 md:gap-1 items-center justify-start  w-full">
      <HeaderInputField type="left" />
      <HeaderInputField type="right" />
    </div>
  );
}
