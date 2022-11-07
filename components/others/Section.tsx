import React from "react";
import Link from "next/link";
import { HiUser } from "react-icons/hi";

type SectionProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  text?: string;
  icon?: boolean;
};
const Section = ({ children, className, text, title, icon }: SectionProps) => {
  return (
    <div className={`w-full flex justify-between ${className}`}>
      {title && (
        <>
          <div className="flex flex-col gap-y-1">
            <p className="text-3xl font-bold">{title}</p>
            <p>{text}</p>
          </div>
          {icon && (
            <Link href={`/dashboard/settings`}>
              <a>
                <span
                  className={`bg-blue-700 rounded-full text-2xl text-white
             w-10 h-10 flex justify-center items-center`}
                >
                  <HiUser />
                </span>
              </a>
            </Link>
          )}
        </>
      )}

      {children}
    </div>
  );
};

export default Section;
