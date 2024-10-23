"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { performLogin } from "@/app/actions";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const credential = {};
      credential.email = formData.get("email");
      credential.password = formData.get("password");

      const response = await performLogin(credential);

      if (response) {
        router.push("/");
      } else {
        setError("Please provide a valid login credential");
      }

      // if (!!response.error) {
      //   console.error(response.error);
      //   setError("Please provide a valid login credential");
      // } else {

      //   router.push("/");
      // }
    } catch (e) {
      setError("Please provide a valid login credential");
    }
  }

  return (
    <Card className="mx-auto max-w-sm w-full">
      <h2 className="text-sm text-red-600">{error}</h2>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <p>
            Register as{" "}
            <Link href="/register/instructor" className="underline">
              Instructor
            </Link>{" "}
            or{" "}
            <Link href="/register/student" className="underline">
              Student
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
