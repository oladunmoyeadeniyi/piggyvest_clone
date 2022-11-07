import React from "react";

type SideCardProps = {
  children?: React.ReactNode;
  title: string;
  className?: string;
};
const SideCard = ({ children, title, className }: SideCardProps) => {
  return (
    <div className={`${className}`}>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default SideCard;
