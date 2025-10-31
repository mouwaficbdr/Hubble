import type { LogoProps } from "./Logo.types";
import clsx from "clsx";

const Logo: React.FC<LogoProps> = ({
  size = "md",
  href = "#",
  className,
  ...rest
}: LogoProps) => {
  
  const baseClasses = ''

//  const finalClasses = 

  return (
    <a className={className} href={href} {...rest}>
      Logo
    </a>
  );
};

export default Logo;