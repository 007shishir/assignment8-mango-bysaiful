"use client";

import React, { useState } from "react";
import { Button, Card } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

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

export default function AllBooksPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = bookData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Search Bar Section */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold mb-6 text-default-900">Explore All Books</h1>
        
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Icon icon="lucide:search" className="text-gray-400 text-xl" />
          </div>
          <input
            type="text"
            placeholder="Search by book title..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Book Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden border-none shadow-md">
              {/* Fixed Image Width Error */}
              <div className="relative h-[280px] w-full">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-bold text-lg line-clamp-1">{book.title}</h3>
                <p className="text-gray-500 text-sm">{book.author}</p>
                <Link href={`/all-books/${book.id}`} className="text-blue-600 hover:underline mt-auto">
                  <Button
                  color="primary"
                  variant="flat"
                  className="w-full mt-2"
                >
                  Details
                </Button>
                </Link>
                
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          No books found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
}