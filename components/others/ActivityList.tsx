import { nanoid } from "nanoid";
import React from "react";
import { RecentActivities, ToDoList } from "../../utilities/DummyData";
import Container from "./Container";
import Section from "./Section";
import Link from "next/link";

type ActivityListProps = {
  children?: React.ReactNode;
  header: string;
  todo?: boolean;
};
const ActivityList = ({ children, header, todo }: ActivityListProps) => {
  if (todo) {
    return (
      <div className="mb-12 w-full text-xs text-blue-800">
        <p className="mb-[-30px]">{header}</p>
        {ToDoList.map((todo) => (
          <Link href={``} passHref key={nanoid()}>
            <Container className="flex border border-blue-900 my-10 w-full p-4 ">
              <div className="flex items-start">
                <span className="text-2xl">{todo.icon}</span>
                <div className="ml-3">
                  <p>{todo.title}</p>
                  <p className="text-[#979393]">{todo.text}</p>
                </div>
              </div>
            </Container>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="text-xs w-full">
      <p className="mb-2">{header}</p>
      {RecentActivities.slice(0, 5).map((list) => (
        <Container
          key={nanoid()}
          className="flex border border-[#E5E5E5] p-4 my-3"
        >
          <div className="flex">
            <span className="text-sm text-white mr-5 p-2 bg-pink-500 rounded-full">
              {list.icon}
            </span>
            <div>
              <p>{list.text}</p>
              <p>{list.time}</p>
            </div>
          </div>
          <p>
            {list.currency}
            {list.amount}
          </p>
        </Container>
      ))}
      <Link href={``} passHref>
        <p className="w-fit mx-auto text-blue-800 font-semibold mt-7">
          VIEW MORE ACTIVITIES
        </p>
      </Link>
    </div>
  );
};

export default ActivityList;
