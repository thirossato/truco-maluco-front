import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary text-black hover:bg-yellow-300",
    secondary: "bg-secondary text-black hover:bg-green-400",
    danger: "bg-accent text-white hover:bg-red-500",
  };

  return (
    <button
      className={`
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        px-6 py-4
        rounded-(--radius-md)
        font-extrabold uppercase
        tracking-wide

        cursor-pointer

        shadow-(--shadow-button)
        transition-all
        duration-150
        ease-out

        hover:scale-[1.03]
        hover:brightness-105

        active:translate-y-1
        active:scale-[0.98]
        active:shadow-[0_2px_0_rgba(0,0,0,0.4)]

        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100

        ${className}
      `}
      {...props}
    />
  );
}