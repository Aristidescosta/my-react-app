import React from "react";

interface IinputLoginProps {
  label: string;
  type: string;
  value: string;
  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin: React.FC<IinputLoginProps> = ({
  label,
  type,
  value,
  onChange,
  onPressEnter,
}) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        onKeyDown={(e) =>
          e.key === "Enter" ? onPressEnter && onPressEnter() : undefined
        }
      />
    </label>
  );
};
