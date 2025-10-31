import { type ComponentPropsWithoutRef } from "react";

export type ButtonHTML = ComponentPropsWithoutRef<'button'>
export type ButtonVariant = "primary" | "secondary" | "danger"
export type ButtonSize = "sm" | "md" | "lg"

export interface ButtonProps extends ButtonHTML{
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}