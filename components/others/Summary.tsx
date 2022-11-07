import React from "react";

type SummaryProps = {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  text?: string;
  currency?: string;
  amount: number | string | React.ReactNode;
  background?: string;
  color?: string;
};
const Summary = ({
  className,
  children,
  icon,
  text,
  title,
  currency,
  amount,
  background,
  color,
}: SummaryProps) => {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col gap-y-2 text-lg ${className}`}
      style={{ background, color }}
    >
      <p>{icon}</p>
      <p>{title}</p>
      <p className="text-xs text-[#4a5568]">{text}</p>
      <p>
        {currency}
        {amount}
      </p>
    </div>
  );
};

export default Summary;
