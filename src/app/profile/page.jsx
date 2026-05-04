"use client";

import React, { useState, useEffect } from "react";
import { 
  Card, 
  Avatar, 
  Button, 
  Separator, 
  Chip,
  Input,
  Spinner
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("profile");
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setNewName(session.user.name || "");
      setNewImage(session.user.image || "");
      setNewEmail(session.user.email || "");
    }
  }, [session]);

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const handleUpdateProfile = async () => {
    setIsUpdatingProfile(true);
    try {
      const { data, error } = await authClient.updateUser({
        name: newName,
        image: newImage,
      });
      if (error) {
        toast.error(error.message || "Failed to update profile");
      } else {
        toast.success("Profile updated successfully!");
      }
    } catch (err) {
      toast.error("An error occurred.");
    }
    setIsUpdatingProfile(false);
  };

  const handleUpdateEmail = async () => {
    setIsUpdatingEmail(true);
    try {
      const { data, error } = await authClient.changeEmail({
        newEmail: newEmail,
      });
      if (error) {
        toast.error(error.message || "Failed to update email");
      } else {
        toast.success("Email update requested! Please check your email.");
      }
    } catch (err) {
      toast.error("An error occurred.");
    }
    setIsUpdatingEmail(false);
  };

  const handleUpdatePassword = async () => {
    setIsUpdatingPassword(true);
    try {
      const { data, error } = await authClient.changePassword({
        newPassword: newPassword,
        currentPassword: currentPassword,
        revokeOtherSessions: true,
      });
      if (error) {
        toast.error(error.message || "Failed to update password");
      } else {
        toast.success("Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
      }
    } catch (err) {
      toast.error("An error occurred.");
    }
    setIsUpdatingPassword(false);
  };

  if (isPending) {
    return <div className="flex justify-center py-20"><Spinner size="lg" /></div>;
  }

  if (!session?.user) {
    return <div className="text-center py-20">Please log in to view this page.</div>;
  }

  const user = session.user;

  const navItems = [
    { key: "profile", label: "My Profile", icon: "solar:user-circle-bold" },
    { key: "library", label: "My Library", icon: "solar:library-bold" },
    { key: "settings", label: "Account Settings", icon: "solar:settings-bold" },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-6 py-12">
      <ToastContainer />
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
            onClick={handleLogout}
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
                      <Chip color="primary" size="sm" variant="flat">{user.role || "User"}</Chip>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 p-4 bg-default-50 rounded-xl">
                    <span className="text-tiny text-default-400 uppercase font-bold">Member Since</span>
                    <span className="text-medium">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </span>
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
                <div className="space-y-8">
                  
                  {/* Profile Form */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Update Profile</h3>
                      <p className="text-small text-default-400">Change your public profile details</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Input
                        label="Full Name"
                        placeholder="Enter your name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        variant="bordered"
                      />
                      <Input
                        label="Profile Image URL"
                        placeholder="Enter image URL"
                        value={newImage}
                        onChange={(e) => setNewImage(e.target.value)}
                        variant="bordered"
                      />
                      <Button 
                        color="primary" 
                        isLoading={isUpdatingProfile}
                        onClick={handleUpdateProfile}
                        className="w-fit"
                      >
                        Save Profile
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Email Form */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Change Email</h3>
                      <p className="text-small text-default-400">Update your email address</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Input
                        label="New Email Address"
                        type="email"
                        placeholder="Enter new email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        variant="bordered"
                      />
                      <Button 
                        color="secondary" 
                        isLoading={isUpdatingEmail}
                        onClick={handleUpdateEmail}
                        className="w-fit"
                      >
                        Update Email
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Password Form */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Change Password</h3>
                      <p className="text-small text-default-400">Update your security credentials</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Input
                        label="Current Password"
                        type="password"
                        placeholder="Enter current password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        variant="bordered"
                      />
                      <Input
                        label="New Password"
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        variant="bordered"
                      />
                      <Button 
                        color="warning" 
                        isLoading={isUpdatingPassword}
                        onClick={handleUpdatePassword}
                        className="w-fit text-white"
                      >
                        Update Password
                      </Button>
                    </div>
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