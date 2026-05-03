"use client";

import React, { useState, useMemo } from "react";
import { Button, Card, Chip } from "@heroui/react";
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
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: true,
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
    featured: true,
  },
];

export default function AllBooksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Automatically extract unique categories from data
  const categories = useMemo(() => {
    const unique = Array.from(new Set(bookData.map((book) => book.category)));
    return ["All", ...unique];
  }, []);

  // Combined Filter: Search + Category
  const filteredBooks = bookData.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header & Search Section */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-6 text-default-900 text-center">
          Explore Our Collection
        </h1>

        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Icon icon="lucide:search" className="text-gray-400 text-xl" />
          </div>
          <input
            type="text"
            placeholder="Search by book title..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 outline-none transition-all shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter Section */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <Chip
            key={cat}
            as="button"
            variant={selectedCategory === cat ? "solid" : "flat"}
            color={selectedCategory === cat ? "primary" : "default"}
            onClick={() => setSelectedCategory(cat)}
            className="cursor-pointer transition-transform active:scale-95 px-4 py-1"
          >
            {cat}
          </Chip>
        ))}
      </div>

      {/* Book Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBooks.map((book) => (
            <Card
              key={book.id}
              className="overflow-hidden border-none shadow-md"
            >
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Visual indicator for category on the card */}
                <div className="absolute top-2 right-2">
                   <Chip size="sm" variant="backdrop" className="text-[10px] uppercase font-bold">
                     {book.category}
                   </Chip>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-bold text-lg line-clamp-1">{book.title}</h3>
                <p className="text-gray-500 text-sm">{book.author}</p>
                <Link
                  href={`/all-books/${book.id}`}
                  className="text-blue-600 hover:underline mt-auto"
                >
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
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <Icon icon="lucide:search-x" className="text-6xl mb-4" />
          <p className="text-xl">No books found matching your criteria</p>
          <Button
            variant="light"
            color="primary"
            className="mt-4"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}
