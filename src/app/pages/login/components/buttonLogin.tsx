import React, { ReactNode } from "react";

interface IbuttonLoginProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const ButtonLogin: React.FC<IbuttonLoginProps> = ({
  children,
  type,
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
