"use client";

import React, { useState } from "react";
import { Card, Input, Button, Link, Separator } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function RegisterPage() {

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log("Registering user:", data);
  };

  const handleGoogleLogin = () => {
    console.log("Authenticating with Google...");
    // Logic to authenticate and then:
    // router.push("/");
  };

  return (
    <div className="flex items-center justify-center bg-zinc-50 px-6 py-12 dark:bg-black">
      <Card className="w-full max-w-md p-8 shadow-lg border-none">
        <div className="flex flex-col gap-2 pb-6 text-center">
          <h1 className="text-2xl font-bold text-default-900">
            Create an Account
          </h1>
          <p className="text-small text-default-500">Join MangoBooks today</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 rounded-medium bg-danger-50 p-3 text-tiny text-danger">
            {error}
          </div>
        )}

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleRegister)}
        >
          <Input
            name="name"
            label="Full Name"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}

          <Input
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
          <Input
            name="photoUrl"
            label="Photo URL"
            placeholder="https://example.com/photo.jpg"
            type="url"
            {...register("photoUrl")}
          />
          <Input
            required
            name="password"
            label="Password"
            placeholder="Create a password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}

          <Button
            color="primary"
            className="mt-2 font-bold"
            fullWidth
            type="submit"
          >
            Register
          </Button>
        </form>

        <div className="flex items-center gap-4 py-6">
          <Separator className="flex-1" />
          <p className="text-tiny text-default-400 uppercase font-bold">OR</p>
          <Separator className="flex-1" />
        </div>

        <Button
          variant="bordered"
          fullWidth
          onPress={handleGoogleLogin}
          startContent={<Icon icon="flat-color-icons:google" width={20} />}
          className="border-default-200"
        >
          Sign up with Google
        </Button>

        <p className="mt-6 text-center text-small text-default-500">
          Already have an account?{" "}
          <Link href="/login" size="sm" className="font-bold">
            Log In
          </Link>
        </p>
      </Card>
    </div>
  );
}
