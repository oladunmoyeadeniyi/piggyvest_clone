import React from "react";
import { HalfSection, CommentCard } from "../others";
import { comments } from "../../utilities/DummyData";

const FifthSection = () => {
  return (
    <div className="flex items-center lg:max-w-[85%] lg:mx-auto lg:p-10 lg:justify-between lg:flex-row">
      <div className="bg-transparent">
        {comments.map((user, index) => (
          <CommentCard key={index} {...user} />
        ))}
      </div>

      <HalfSection
        heading="4 Million + customers"
        btnText="Create free account"
        text=" Since launching in 2016, over 4,000,000 people have used PiggyVest to
          manage their money better, avoid over-spending and be more
          accountable."
        AppStores
        className="w-[400px]"
        fontSize="28px"
      />
    </div>
  );
};

export default React.memo(FifthSection);

{
  /* <div className="">
  <h1 className="text-2xl font-bold">4 Million + customers</h1>
  <p className="">
    Since launching in 2016, over 4,000,000 people have used PiggyVest to manage
    their money better, avoid over-spending and be more accountable.
  </p>

  <ButtonField text="Create free account" background="#0c1825" />

  <div className="">
    <ButtonField outlined>
      <span className="text-black">
        <AiFillApple />
      </span>
      <span className="">Get on iPhone</span>
    </ButtonField>

    <ButtonField outlined>
      <span className="text-green-400">
        <FaGooglePlay />
      </span>
      <span className="">Get on Android</span>
    </ButtonField>
  </div>
</div>; */
}
