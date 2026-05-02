"use client";

import React, { useState } from "react";
import { Card, Input, Button, Link, Separator } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Replace this with your actual API call
      console.log("Registering user:", data);
      
      // Simulate success
      const success = true; 
      
      if (success) {
        router.push("/login");
      } else {
        throw new Error("Registration failed. Please try again.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
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
          <h1 className="text-2xl font-bold text-default-900">Create an Account</h1>
          <p className="text-small text-default-500">Join MangoBooks today</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 rounded-medium bg-danger-50 p-3 text-tiny text-danger">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <Input
            required
            name="name"
            label="Full Name"
            placeholder="Enter your name"
            variant="bordered"
            labelplacement="outside"
          />
          <Input
            required
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            labelplacement="outside"
          />
          <Input
            name="photoUrl"
            label="Photo URL"
            placeholder="https://example.com/photo.jpg"
            type="url"
            variant="bordered"
            labelplacement="outside"
          />
          <Input
            required
            name="password"
            label="Password"
            placeholder="Create a password"
            type="password"
            variant="bordered"
            labelplacement="outside"
          />

          <Button 
            color="primary" 
            className="mt-2 font-bold" 
            type="submit" 
            isLoading={isLoading}
            fullWidth
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