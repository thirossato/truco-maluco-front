import React from "react";

type CardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`
        bg-tm-surface
        rounded-lg
        shadow-card
        p-5
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}