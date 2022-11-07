import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Background, Card } from "../components/login";
import { LogoWhite } from "../public/Images";
import { TextField } from "../components/inputFields";
import { inputFocus } from "../utilities";

type handleFormInputProps = {
  name: string;
  value: string | number;
};

const Login = () => {
  const [loginForm, setLoginForm] = useState({ user: "", password: "" });

  return (
    <form>
      <Background>
        <Card
          heading="Login to your account"
          text="Securely login to your PiggyVest"
          button="LOG IN"
          path="/dashboard"
        >
          <TextField
            Ref={inputFocus()}
            name="user"
            value={loginForm.user}
            onChange={(e) =>
              setLoginForm({ ...loginForm, user: e.target.value })
            }
            placeholder=""
            label="Email or Phone Number"
          />
          <TextField
            value={loginForm.password}
            name="password"
            type="password"
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            placeholder=""
            label="Password"
          />
        </Card>

        <div className="text-center text-xs grid gap-y-5">
          <p>
            <Link href="/register">
              <a>Don't have an account? Register</a>
            </Link>
          </p>
          <p>
            <Link href="/forgot-password">
              <a>Forgot Password?</a>
            </Link>
          </p>
        </div>
      </Background>
    </form>
  );
};

export default Login;
