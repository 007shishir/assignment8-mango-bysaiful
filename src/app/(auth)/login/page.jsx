"use client";

import React from "react";
// Change Divider to Separator
import { Card, Input, Button, Link, Separator } from "@heroui/react";
import { Icon } from "@iconify/react"; // Optional: for the Google icon

export default function LoginPage() {
  const handleGoogleLogin = () => {
    // Integrate your preferred auth library here (e.g., NextAuth or Firebase)
    console.log("Authenticating with Google...");
    // window.location.href = "/"; 
  };

  return (
    <div className="flex items-center justify-center bg-zinc-50 px-6 py-12 dark:bg-black">
      <Card className="w-full max-w-md p-8 shadow-lg border-none">
        {/* Header */}
        <div className="flex flex-col gap-2 pb-6 text-center">
          <h1 className="text-2xl font-bold text-default-900">User Login</h1>
          <p className="text-small text-default-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Credentials Form */}
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <Input
            isRequired
            label="Email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            labelPlacement="outside"
          />
          <Input
            isRequired
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
            labelPlacement="outside"
          />

          <Button color="primary" className="font-bold" type="submit" fullWidth>
            Log In
          </Button>
        </form>

        {/* Separator */}
        <div className="flex items-center gap-4 py-6">
          <Separator className="flex-1" />
          <p className="text-tiny text-default-400 uppercase font-bold">OR</p>
          <Separator className="flex-1" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          <Button
            variant="bordered"
            fullWidth
            onPress={handleGoogleLogin}
            startContent={<Icon icon="flat-color-icons:google" width={20} />}
            className="border-default-200"
          >
            Continue with Google
          </Button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-small text-default-500 mt-6">
          New to MangoBooks?{" "}
          <Link href="/register" size="sm" className="font-bold">
            Create an account
          </Link>
        </p>
      </Card>
    </div>
  );
}