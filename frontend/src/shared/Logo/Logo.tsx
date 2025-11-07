import type { LogoProps, LogoSizes } from "./Logo.types";
import clsx from "clsx";

const textSizeStyles: Record<LogoSizes, string> = {
  sm: 'text-[1.5rem]',
  md: 'text-[2.5rem]',
  lg: 'text-[3rem]',
};

const iconSizeStyles: Record<LogoSizes, string> = {
  sm: 'text-[1.8rem]',
  md: 'text-[2.8rem]',
  lg: 'text-[3.2rem]',
};

const Logo: React.FC<LogoProps> = ({
  size = "md",
  href = "#",
  className
}: LogoProps) => {
  
  const baseClasses = 'text-white font-bold tracking-tighter'

  const finalClasses = clsx(
    baseClasses,
    textSizeStyles[size],
    className
  )

  return (
    <a className={finalClasses} href={href}>
      <span className={
        clsx(iconSizeStyles[size], 'text-primary-accent mr-2.5', 'logo-icon')
      }>✶</span>
      Hubble
    </a>
  );
};

export default Logo;