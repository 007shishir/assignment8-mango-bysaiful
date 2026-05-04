"use client";

import React, { useState } from "react";
import { 
  Card, 
  Avatar, 
  Button, 
  Separator, 
  Chip
} from "@heroui/react";
import { Icon } from "@iconify/react";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("profile");

  // User data for Md. Saiful Islam
  const user = {
    name: "Md. Saiful Islam",
    email: "saiful@example.com", // Placeholder email
    image: "https://ui-avatars.com/api/?name=Saiful+Islam&background=f97316&color=fff",
    role: "Reader",
    joinedDate: "May 2026", // Current date context
  };

  const navItems = [
    { key: "profile", label: "My Profile", icon: "solar:user-circle-bold" },
    { key: "library", label: "My Library", icon: "solar:library-bold" },
    { key: "settings", label: "Account Settings", icon: "solar:settings-bold" },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Navigation Column */}
        <div className="w-full md:w-72 flex flex-col gap-4">
          <Card className="p-4 shadow-sm border-none">
            <div className="flex items-center gap-3 px-2 py-4">
              <Avatar src={user.image} size="md" color="primary" />
              <div className="flex flex-col">
                <span className="text-small font-bold">{user.name}</span>
                <span className="text-tiny text-default-400">Personal Account</span>
              </div>
            </div>
            <Separator className="my-2" />
            
            <nav className="flex flex-col gap-1 p-1">
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  variant={activeSection === item.key ? "flat" : "light"}
                  color={activeSection === item.key ? "primary" : "default"}
                  className="justify-start font-medium"
                  startContent={<Icon icon={item.icon} width={20} />}
                  onClick={() => setActiveSection(item.key)}
                  fullWidth
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </Card>

          <Button 
            variant="light" 
            color="danger" 
            className="justify-start font-semibold"
            startContent={<Icon icon="solar:logout-3-bold" width={20} />}
          >
            Logout
          </Button>
        </div>

        {/* Right Content Column */}
        <div className="flex-1">
          <Card className="p-8 shadow-sm border-none min-h-[500px]">
            
            {activeSection === "profile" && (
              <div className="animate-in fade-in duration-400">
                <h1 className="text-2xl font-bold mb-6">Profile Information</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1 p-4 bg-default-50 rounded-xl">
                    <span className="text-tiny text-default-400 uppercase font-bold">Full Name</span>
                    <span className="text-medium">{user.name}</span>
                  </div>
                  <div className="flex flex-col gap-1 p-4 bg-default-50 rounded-xl">
                    <span className="text-tiny text-default-400 uppercase font-bold">Email Address</span>
                    <span className="text-medium">{user.email}</span>
                  </div>
                  <div className="flex flex-col gap-1 p-4 bg-default-50 rounded-xl">
                    <span className="text-tiny text-default-400 uppercase font-bold">Account Role</span>
                    <div className="mt-1">
                      <Chip color="primary" size="sm" variant="flat">{user.role}</Chip>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 p-4 bg-default-50 rounded-xl">
                    <span className="text-tiny text-default-400 uppercase font-bold">Member Since</span>
                    <span className="text-medium">{user.joinedDate}</span>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "library" && (
              <div className="animate-in fade-in duration-400 text-center py-20">
                <Icon icon="solar:library-bold" width={64} className="mx-auto text-default-200" />
                <h3 className="text-xl font-bold mt-4">MangoBooks Library</h3>
                <p className="text-default-400 mt-2">Manage your books and reading progress here.</p>
                <Button color="primary" className="mt-6 font-bold">Browse Books</Button>
              </div>
            )}

            {activeSection === "settings" && (
              <div className="animate-in fade-in duration-400">
                <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Password</p>
                      <p className="text-small text-default-400">Update your security credentials</p>
                    </div>
                    <Button variant="flat" size="sm">Update</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-danger">Delete Account</p>
                      <p className="text-small text-default-400">Permanently close your account</p>
                    </div>
                    <Button color="danger" variant="light" size="sm">Delete</Button>
                  </div>
                </div>
              </div>
            )}

          </Card>
        </div>

      </div>
    </div>
  );
}