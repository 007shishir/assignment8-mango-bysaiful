"use client";

import React, { useMemo } from "react";
import { Card, Button, Chip, Separator } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const bookData = [
  {
    id: 1,
    title: "The Silent Patient",
    category: "Thriller",
    available_quantity: 10,
    new: true,
  },
  {
    id: 2,
    title: "Project Hail Mary",
    category: "Sci-Fi",
    available_quantity: 5,
    new: true,
  },
  {
    id: 3,
    title: "Book 3",
    category: "Sci-Fi",
    available_quantity: 10,
    new: false,
  },
  {
    id: 4,
    title: "Book 4",
    category: "Thriller",
    available_quantity: 5,
    new: false,
  },
  {
    id: 5,
    title: "Book 5",
    category: "Sci-Fi",
    available_quantity: 10,
    new: false,
  },
  {
    id: 6,
    title: "Book 6",
    category: "Thriller",
    available_quantity: 5,
    new: false,
  },
  {
    id: 7,
    title: "Book 7",
    category: "Sci-Fi",
    available_quantity: 10,
    new: false,
  },
  {
    id: 8,
    title: "Book 8",
    category: "Thriller",
    available_quantity: 5,
    new: false,
  },
  {
    id: 9,
    title: "Book 9",
    category: "Sci-Fi",
    available_quantity: 10,
    new: false,
  },
  {
    id: 10,
    title: "Book 10",
    category: "Thriller",
    available_quantity: 5,
    new: false,
  },
];

export default function HomeStats() {
  const stats = useMemo(() => {
    const totalCopies = bookData.reduce(
      (acc, book) => acc + book.available_quantity,
      0,
    );
    const categoryCount = new Set(bookData.map((b) => b.category)).size;
    const newArrivals = bookData.filter((b) => b.new);

    const byCategory = bookData.reduce((acc, book) => {
      acc[book.category] = (acc[book.category] || 0) + 1;
      return acc;
    }, {});

    return { totalCopies, categoryCount, newArrivals, byCategory };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10 font-sans w-full mx-auto">
      {/* Stats Section */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Total Inventory */}
        <Card className="bg-blue-600 text-white shadow-lg border-none p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Icon icon="lucide:library" width={32} />
            </div>
            <div>
              <p className="text-xs opacity-80 uppercase font-bold tracking-tighter">
                Total Copies
              </p>
              <h2 className="text-4xl font-bold">{stats.totalCopies}</h2>
            </div>
          </div>
        </Card>

        {/* Categories */}
        <Card className="bg-purple-600 text-white shadow-lg border-none p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Icon icon="lucide:tags" width={32} />
            </div>
            <div>
              <p className="text-xs opacity-80 uppercase font-bold tracking-tighter">
                Categories
              </p>
              <h2 className="text-4xl font-bold">{stats.categoryCount}</h2>
            </div>
          </div>
        </Card>

        {/* Category Breakdown */}
        <Card className="md:col-span-2 border-none shadow-md p-6 bg-white">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-800">
            <Icon icon="lucide:pie-chart" className="text-blue-600" />
            Inventory by Genre
          </h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(stats.byCategory).map(([name, count]) => (
              <div
                key={name}
                className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"
              >
                <span className="font-medium text-gray-600">{name}</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm font-bold">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* New Arrivals Sidebar */}
      <Card className="border-none shadow-xl bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2 text-gray-800">
            <Icon icon="lucide:sparkles" className="text-amber-500" />
            New Arrivals
          </h3>
          <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-1 rounded">
            NEW
          </span>
        </div>

        <div className="flex flex-col gap-1">
          {stats.newArrivals.map((book) => (
            <div key={book.id}>
              <Link
                href={`/all-books/${book.id}`}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 group transition-all"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {book.title}
                  </span>
                  <span className="text-xs text-gray-400">{book.category}</span>
                </div>
                <Icon
                  icon="lucide:arrow-right"
                  className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                />
              </Link>
              <Separator className="my-1 opacity-50" />
            </div>
          ))}
        </div>

        <Link
          href="/all-books"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
        >
          <Button
            color="primary"
            variant="solid"
            className="w-full mt-6 font-bold shadow-md shadow-blue-200"
          >
            View All Books
          </Button>
        </Link>
      </Card>
    </div>
  );
}
