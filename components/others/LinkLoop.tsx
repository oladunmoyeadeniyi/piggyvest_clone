import React from "react";
import Link from "next/link";

type LinkLoopProps = {
  title: string;
  links: { name: string; path: string }[];
};

const LinkLoop = ({ links, title }: LinkLoopProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className=" font-bold mb-[10px] ">{title}</p>
      {links.map((link) => (
        <Link href={`/${link.path}`} key={link.path} >
          <a className="hover:text-blue-400">{link.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default React.memo(LinkLoop);
