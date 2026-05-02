import Banner from "@/components/home/Banner";
import MarqueeBooks from "@/components/home/MarqueeBooks";
import Marquee from "@/components/home/MarqueeBooks";
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
    image_url: "/sample-book.png",
    new: true, 
    featured: true 
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    description: "Interstellar survival story.",
    category: "Sci-Fi",
    available_quantity: 5,
    image_url: "/sample-book.png",
    new: true,
    featured: true
  },
  {
    id: 3,
    title: "Book 3", 
    author: "Andy Weir",
    description: "Interstellar survival story.",
    category: "Sci-Fi",
    available_quantity: 10,
    image_url: "/sample-book.png",
    new: false,
    featured: false
  },
  {
    id: 4,
    title: "Book 4",
    author: "Alex Michaelides",
    description: "A shocking psychological thriller.",
    category: "Thriller",
    available_quantity: 5,
    image_url: "/sample-book.png",
    new: false,
    featured: false
  },
  {
    id: 5,
    title: "Book 5",
    author: "Andy Weir",
    description: "Interstellar survival story.",
    category: "Sci-Fi",
    available_quantity: 10,
    image_url: "/sample-book.png",
    new: false,
    featured: true
  },
  {
    id: 6,
    title: "Book 6",
    author: "Alex Michaelides",
    description: "A shocking psychological thriller.",
    category: "Thriller",
    available_quantity: 5,
    image_url: "/sample-book.png",
    new: false,
    featured: true
  },
  {
    id: 7,
    title: "Book 7",
    author: "Andy Weir",
    description: "Interstellar survival story.",
    category: "Sci-Fi",
    available_quantity: 10,
    image_url: "/sample-book.png",
    new: false,
    featured: false
  },
  {
    id: 8,
    title: "Book 8",
    author: "Alex Michaelides",
    description: "A shocking psychological thriller.",
    category: "Thriller",
    available_quantity: 5,
    image_url: "/sample-book.png",
    new: false,
    featured: false
  },
  {
    id: 9,
    title: "Book 9",
    author: "Andy Weir",
    description: "Interstellar survival story.",
    category: "Sci-Fi",
    available_quantity: 10,
    image_url: "/sample-book.png",
    new: false,
    featured: true
  },
  {
    id: 10,
    title: "Book 10",
    author: "Alex Michaelides",
    description: "A shocking psychological thriller.",
    category: "Thriller",
    available_quantity: 5,
    image_url: "/sample-book.png",
    new: false,
    featured: true
  }
];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between px-16 bg-white dark:bg-black sm:items-start">
        <Banner/>
        <MarqueeBooks books={bookData} className="mx-auto w-full" />
      </main>
    </div>
  );
}
