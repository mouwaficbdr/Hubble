import React from "react";
import type { ButtonProps, ButtonVariant } from "./Button.types";

import clsx from "clsx"

const variantStyle: Record<ButtonVariant, string> = {
  primary: "bg-primary hover:bg-button-primary-hover text-neutral-900",
  secondary: "bg-secondary hover:bg-button-secondary-hover text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white"
} 

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  const baseClasses =
    'rounded-[2px] py-2 px-4 font-grotesk font-semibold transition-colors cursor-pointer';

  const finalClasses = clsx(
    baseClasses,
    className,
    variantStyle[variant],
    {
    'opacity-50 pointer-events-none cursor-not-allowed': disabled,
    }
  );

  return (
    <button className={finalClasses} disabled={disabled} {...rest}>{children}</button>
  );
};