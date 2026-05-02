import { Button, Link } from "@heroui/react";
import { cn } from "@/lib/utils";

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* 1. THE IMAGE */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/banner-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* 2. THE OVERLAY (Ensures text is readable) */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* 3. THE CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
         <div className="mb-6 rounded-full bg-orange-500/20 border border-orange-500/30 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-md">
            Welcome to MangoBooks 🥭
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            Find Your <span className="text-orange-500">Next Read</span>
          </h1>
          <Button
            as={Link}
            href="/all-books"
            color="primary"
            size="lg"
            className="mt-10 font-bold"
            radius="full"
          >
            Browse Now
          </Button>
      </div>
    </section>
  );
};

export default Banner;