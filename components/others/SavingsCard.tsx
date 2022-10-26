import Image from "next/image";
import React from "react";
import { savingsPlan } from "./DummyData";
import Link from "next/link";

type SavingsCardProps = {
  className?: string;
  onMouseOver?: React.MouseEventHandler;
  onMouseOut?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
};

const SavingsCard = ({
  className,
  onMouseOut,
  onMouseOver,
  onClick,
}: SavingsCardProps) => {
  return (
    <div
      onClick={onClick}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      className={`top-0 grid grid-cols-2 w-fit text-[11px] 
      border border-[#00000] py-5 px-7 rounded-lg ${className}`}
    >
      {savingsPlan.map((plan) => (
        <Link href={plan.path} key={plan.path}>
          <a>
            <span
              className="flex items-center hover:bg-slate-50 px-5 py-2 rounded-lg"
              key={plan.name}
            >
              <Image src={plan.image} alt={plan.name} width={25} height={25} />
              <span className="ml-2">{plan.name}</span>
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default React.memo(SavingsCard);
