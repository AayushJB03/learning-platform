import type { ButtonHTMLAttributes } from "react";

const variants = {
  primary: "bg-primary-500 text-white hover:brightness-95",
  secondary: "border border-primary-500 bg-white text-primary-500 hover:bg-primary-100",
  tertiary: "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50",
  text: "text-primary-500 hover:underline",
};
const sizes = { lg: "px-4", md: "px-3" };

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({ variant = "primary", size = "lg", className = "", ...props }: Props) {
  return (
    <button
      type="button"
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md text-body font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 disabled:pointer-events-none disabled:opacity-40 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
