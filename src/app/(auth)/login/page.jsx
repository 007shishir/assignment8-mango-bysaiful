"use client";

import React from "react";
import { Card, Input, Button, Link, Separator } from "@heroui/react";
import { Icon } from "@iconify/react"; // Optional: for the Google icon
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginForm = async (data) => {
    console.log("Logging in with:", data);
    // Implement your login logic here (e.g., API call to your backend)

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
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
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleLoginForm)}
        >
          <Input
            required
            label="Email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}

          <Input
            required
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}

          <Button color="primary" type="submit" className="font-bold" fullWidth>
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
            Sign in with Google
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
