import React from "react";
import type { ButtonProps, ButtonVariant, ButtonSize } from "./Button.types";

import clsx from "clsx"

const variantStyle: Record<ButtonVariant, string> = {
  primary: "bg-primary hover:bg-button-primary-hover text-neutral-900",
  secondary: "bg-secondary hover:bg-button-secondary-hover text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white"
} 

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg',
}; 

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  className,
  variant = "primary",
  size = "md",
  ...rest
}: ButtonProps) => {
  const baseClasses =
    'rounded-[2px] py-2 px-4 font-grotesk font-semibold transition-colors cursor-pointer';

  const finalClasses = clsx(
    baseClasses,
    variantStyle[variant],
    sizeStyles[size],
    className,
    {
    'opacity-50 pointer-events-none cursor-not-allowed': disabled,
    }
  );

  return (
    <button className={finalClasses} disabled={disabled} {...rest}>{children}</button>
  );
};