import { Card, Button, Link, Chip } from "@heroui/react";
import Image from "next/image"; // Import the Next.js Image component
import { cn } from "@/lib/utils";

const FeaturedBooks = ({ books = [] }) => {
  const featuredList = books.filter((book) => book.featured).slice(0, 4);

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured <span className="text-orange-500">Books</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredList.map((book) => (
            <Card
              key={book.id}
              className="border-none bg-default-50 overflow-hidden shadow-md"
            >
              {/* Image Container with fixed height */}
              <div className="relative h-[350px] w-full">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill // This makes it fill the parent div
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={book.id <= 4} // Optional: helps with LCP performance
                />

                {book.new && (
                  <Chip
                    color="warning"
                    variant="flat"
                    className="absolute top-3 left-3 z-10"
                    size="sm"
                  >
                    New
                  </Chip>
                )}
              </div>

              <div className="p-5 flex flex-col gap-2">
                <div>
                  <h3 className="font-bold text-lg text-foreground line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-xs text-default-400 uppercase tracking-wider font-semibold">
                    {book.author}
                  </p>
                </div>

                <p className="text-sm text-default-600 line-clamp-2 min-h-[40px]">
                  {book.description}
                </p>

                <Link
                  href={`/all-books/${book.id}`}
                >
                  <Button
                    fullWidth
                    color="primary"
                    variant="solid"
                    className="mt-2 font-medium"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
