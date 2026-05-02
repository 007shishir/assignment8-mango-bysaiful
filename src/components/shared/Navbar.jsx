"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { cn } from "@/lib/utils"; // Ensure this utility exists in your project

const maxWidthClasses = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1280px]",
  "2xl": "max-w-[1536px]",
  full: "max-w-full",
};

const Navbar = ({ user=null, handleLogout, className, maxWidth = "lg", position = "sticky" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Your Navigation Links
  const navItems = [
    { label: "Home", href: "/" },
    { label: "All Books", href: "/all-books" },
    { label: "My Profile", href: "/profile" },
  ];

  return (
    <nav
      className={cn(
        "z-40 w-full border-b border-divider bg-background/70 backdrop-blur-lg",
        position === "sticky" && "sticky top-0",
        position === "fixed" && "fixed top-0",
        className
      )}
    >
      <header
        className={cn(
          "flex h-16 items-center justify-between px-6",
          maxWidth !== "full" && maxWidthClasses[maxWidth],
          "mx-auto"
        )}
      >
        {/* Left: Website Logo (Links to Home) */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            <span className="text-orange-500">Mango</span>
            <span className="text-foreground">Books</span>
          </Link>
        </div>

        {/* Center: Navigation links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-default-600 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Conditional Rendering (Login/User Info) */}
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-default-700">
                {user.name}
              </span>
              <Button 
                onPress={handleLogout} 
                color="danger" 
                variant="flat" 
                size="sm"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login" color="primary" variant="solid" size="sm">
             <Button 
              as={Link} 
              href="/login" 
              color="primary" 
              variant="solid"
            >
              Login
            </Button>
            </Link>
            
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-divider md:hidden bg-background">
          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="block py-2 w-full text-lg text-default-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            <li className="mt-4 border-t border-divider pt-4">
              {user ? (
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-default-500 font-medium">Logged in as: {user.name}</p>
                  <Button onPress={handleLogout} color="danger" variant="flat" fullWidth>
                    Logout
                  </Button>
                </div>
              ) : (
                <Button as={Link} href="/login" color="primary" fullWidth>
                  Login
                </Button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;