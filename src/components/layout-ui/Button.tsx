import React, { ReactNode } from "react";
import { Button } from "../ui/button";

export default function ButtonComponent({
  type,
  children,
  className,
}: {
  children: string | ReactNode;
  className?: string;
  type: string;
}) {
  if (type === "primary")
    return (
      <Button
        className={`${className} rounded-3xl font-[500] text-lg bg-primary-1 font-inter text-secondary-1`}
      >
        {children}
      </Button>
    );
  if (type === "rounded-button")
    return (
      <Button className={`rounded-full ${className} font-inter  `}>
        {children}
      </Button>
    );

  if (type === "secondary")
    return (
      <Button
        className={`rounded-lg bg-secondary-1 text-xl  text-primary-1 ${className} font-inter py-5 `}
      >
        {children}
      </Button>
    );
  if (type === "tertiary")
    return (
      <Button
        className={`rounded-lg bg-secondary-1/20 text-xl  text-primary-2 ${className} font-inter py-5 `}
      >
        {children}
      </Button>
    );
  if (type === "transparent")
    return (
      <Button
        className={`rounded-l-full rounded-r-full  text-base  text-primary-2/60 border border-primary-2/40 shadow-none font-inter py-5 `}
      >
        {children}
      </Button>
    );
}
