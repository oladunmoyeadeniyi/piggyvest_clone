import React from "react";
import Link from "next/link";
import { TextField } from "../components/inputFields";
import { Background, Card } from "../components/login";

const ForgotPassword = () => {
  return (
    <form>
      <Background>
        <Card
          heading="Forgot Password"
          text="Enter your email to reset your password"
          button="RESET PASSWORD"
        >
          <TextField
            name=""
            type="email"
            onChange={() => {}}
            value=""
            placeholder="e.g. john@gmail.com"
            label="Email Address"
          />
        </Card>

        <div className="text-center text-xs grid gap-y-5">
          <p>
            <Link href="/login">
              <a>Back to login</a>
            </Link>
          </p>
        </div>
      </Background>
    </form>
  );
};

export default ForgotPassword;
