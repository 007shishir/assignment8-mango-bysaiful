"use client";

import React from "react";
import { Button, Card, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
  import { ToastContainer, toast } from 'react-toastify';
import { authClient } from "@/lib/auth-client";

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
const getSession = async () => {
  const { data: session } = await authClient.getSession();
  return session;
}

export default function BookDetails() {



  const { bookId } = useParams();
  const router = useRouter();
  
  // Find the book based on the ID in the URL
  const book = bookData.find((b) => b.id === parseInt(bookId));

  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-xl font-semibold">Book not found</p>
        <Button as={Link} href="/books" color="primary">Back to Gallery</Button>
      </div>
    );
  }

  const handleBorrow = async () => {
    const session = await getSession();

    if (session) {
      toast.success(`You have borrowed "${book.title}"!`, {
        position: "top-right",
        autoClose: 3000
      });
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <ToastContainer />
      
      {/* Back Button */}
      <Link href="/all-books" className="flex items-center gap-2 text-default-500 hover:text-primary transition-colors mb-8 group">
        <Icon icon="lucide:arrow-left" className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to All Books</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Large Book Cover */}
        <Card className="border-none shadow-2xl overflow-hidden bg-transparent">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={book.image_url}
              alt={book.title}
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>
        </Card>

        {/* Right Side: Details */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Chip color="primary" variant="flat" size="sm" className="font-semibold uppercase tracking-wider">
              {book.category}
            </Chip>
            <h1 className="text-4xl font-bold text-default-900 leading-tight">
              {book.title}
            </h1>
            <p className="text-xl text-default-500">By {book.author}</p>
          </div>

          <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-lg w-fit border border-orange-100">
            <Icon icon="lucide:layers" />
            <span className="font-medium">{book.available_quantity} copies left</span>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold">About the Book</h3>
            <p className="text-default-600 leading-relaxed text-lg">
              {book.description}
            </p>
          </div>

          <div className="pt-6 border-t border-default-100">
            <Button
              onPress={handleBorrow}
              color="primary"
              size="lg"
              className="w-full md:w-fit px-12 font-bold text-lg h-14 shadow-lg shadow-primary/20"
              startContent={<Icon icon="lucide:book-open" width={22} />}
            >
              Borrow This Book
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}