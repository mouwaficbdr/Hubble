import React from "react";
import type { ButtonProps } from "./Button.types";

import clsx from "clsx"

export const Button: React.FC<ButtonProps> = ({ children, disabled, className, ...rest }: ButtonProps) => {
  const baseClasses =
    'rounded-[2px] py-2 px-4 bg-primary hover:bg-button-primary-hover text-neutral-900 font-grotesk font-semibold transition-colors cursor-pointer';

  const finalClasses = clsx(
    baseClasses,
    className,
    {
    'opacity-50 pointer-events-none cursor-not-allowed': disabled,
    }
  );

  return (
    <button className={finalClasses} disabled={disabled} {...rest}>{children}</button>
  );
};