import { type ComponentPropsWithoutRef } from "react";

export type ButtonHTML = ComponentPropsWithoutRef<'button'>
export type ButtonVariant = "primary" | "secondary" | "danger"

export interface ButtonProps extends ButtonHTML{
  variant?: ButtonVariant
  children: React.ReactNode
}