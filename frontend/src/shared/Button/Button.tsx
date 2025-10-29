import React from "react";
import type { ButtonProps } from "./Button.types";

import clsx from "clsx"

export const Button: React.FC<ButtonProps> = ({ children, className, ...rest }: ButtonProps) => {
  const baseClasses = "py-2 px-4 bg- text-white font-semibold rounded-lg transition-colors cursor-pointer"

  const finalClasses = clsx(baseClasses, className)

  return (
    <button className={finalClasses} {...rest}>{children}</button>
  );
};