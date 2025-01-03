("");

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SignInFlow } from "../types";
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react";

interface SignInProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignInProps) => {
  const { signIn } = useAuthActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setPending(true);

    signIn("password", {
      name,
      email,
      password,
      flow: "signUp",
    })
      .catch((error) => {
        setError("Something went wrong.");
      })
      .finally(() => {
        setPending(false);
      });
  };

  const handleProviderSignIn = (value: "github" | "google") => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <Card className="w-full h-full " style={{ padding: 8 }}>
      <CardHeader className="px-0 pt-0">
        <CardTitle
          className="text-black "
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#122316",
            marginTop: 10,
          }}
        >
          Signup to continue
        </CardTitle>

        <CardDescription className="text-black">
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4 " />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0 ">
        <form
          onSubmit={onPasswordSignIn}
          className="gap-y-2 flex flex-col"
          style={{
            gap: 10,
            marginBottom: 8,
          }}
        >
          <Input
            className=""
            disabled={pending}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
          />

          <Input
            className=""
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            type="email"
          />

          <Input
            className=""
            disabled={pending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            type="password"
          />

          <Input
            className=""
            disabled={false}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            required
            type="password"
          />

          <Button
            type="submit"
            className="w-full"
            size={"lg"}
            disabled={pending}
          >
            Continue
          </Button>
        </form>

        <Separator />

        <div
          style={{
            marginTop: 6,
            display: "flex",
            gap: 8,
            flexDirection: "column",
          }}
        >
          <Button
            disabled={pending}
            onClick={() => handleProviderSignIn("github")}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FaGithub
              style={{
                position: "absolute",
                top: 12,
                left: 24,
                transition: "transform 0.2s ease-in-out",
              }}
            />
            Continue with Github
          </Button>
        </div>

        <p
          className=""
          style={{
            color: "black",
            marginTop: 8,
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Already have an account?{" "}
          <span
            style={{
              color: "#0ea5e9",
              fontWeight: 500,
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => setState("signIn")}
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
