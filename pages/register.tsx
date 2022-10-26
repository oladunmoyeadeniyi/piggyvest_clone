import React, { useState } from "react";
import Link from "next/link";
import { Background, Card } from "../components/login";
import { TextField } from "../components/inputFields";
import { handleInput, inputFocus } from "../utilities";

const Register = () => {
  const [registration, setRegistration] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    refferer: "",
    hearAboutUs: "",
  });

  return (
    <form>
      <Background>
        <Card
          heading="Create a Secure Account"
          text="Welcome to the future of Savings & Investments"
          button="LOG IN"
        >
          <div className="grid h-fit mt-7 gap-y-7">
            <TextField
              Ref={inputFocus()}
              name="fullName"
              onChange={(e) => handleInput(e, registration, setRegistration)}
              value={registration.fullName}
              placeholder="Full Name"
              label="Full Name"
            />
            <TextField
              name="email"
              type="email"
              onChange={(e) => handleInput(e, registration, setRegistration)}
              value={registration.email}
              placeholder="Email Address"
              label="Email Address"
            />
            <TextField
              name="phoneNumber"
              onChange={(e) => handleInput(e, registration, setRegistration)}
              value={registration.phoneNumber}
              placeholder="Phone Number"
              label="Phone Number"
            />
            <TextField
              name="password"
              type="password"
              onChange={(e) => handleInput(e, registration, setRegistration)}
              value={registration.password}
              placeholder="Password"
              label="Password"
            />
            <TextField
              name="referrer"
              onChange={(e) => handleInput(e, registration, setRegistration)}
              value={registration.refferer}
              placeholder="Referrer Phone or Promo Code"
              label="Referrer Phone or Promo Code (Optional)"
            />
            <TextField
              name="hearAboutUs"
              onChange={(e) => handleInput(e, registration, setRegistration)}
              value={registration.hearAboutUs}
              placeholder="Click To Select"
              label="How Did You Hear About Us? (Optional)"
            />
          </div>
        </Card>

        <div className="text-center text-xs">
          <p>
            <Link href="/login">
              <a>Already have an account? Log In</a>
            </Link>
          </p>
        </div>
      </Background>
    </form>
  );
};

export default Register;
