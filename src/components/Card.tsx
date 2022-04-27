import React, { FC } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children: JSX.Element;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
