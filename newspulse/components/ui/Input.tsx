import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${className}`}
      {...props}
    />
  );
}

