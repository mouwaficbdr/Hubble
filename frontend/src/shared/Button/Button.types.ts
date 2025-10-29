import { type ComponentPropsWithoutRef } from "react";

export type ButtonHTML = ComponentPropsWithoutRef<'button'>

export interface ButtonProps extends ButtonHTML{
  children: React.ReactNode
}