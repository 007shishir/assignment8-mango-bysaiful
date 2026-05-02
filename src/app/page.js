import Banner from "@/components/home/Banner";
import Marquee from "@/components/home/Marquee";
import Image from "next/image";

export default function Home() {
  const bookData = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A shocking psychological thriller.",
    category: "Thriller",
    available_quantity: 10,
    image_url: "https://example.com/image1.jpg"
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    description: "Interstellar survival story.",
    category: "Sci-Fi",
    available_quantity: 5,
    image_url: "https://example.com/image2.jpg"
  }
];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between px-16 bg-white dark:bg-black sm:items-start">
        <Banner/>
        {/* <Marquee books={bookData}/> */}
      </main>
    </div>
  );
}
