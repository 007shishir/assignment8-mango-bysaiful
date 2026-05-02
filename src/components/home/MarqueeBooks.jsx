import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

const MarqueeBooks = ({ books = [], className }) => {
  // Sample data if none is provided
  const displayBooks =
    books.length > 0
      ? books
      : [
          { id: 1, title: "The Great Gatsby" },
          { id: 2, title: "Atomic Habits" },
          { id: 3, title: "Mango Street Chronicles" },
        ];

  const marqueeText = displayBooks
  .filter((book) => book.new) // Only include new arrivals
    .map((book) => `${book.title}`)
    .join(" | ");

  const fullText = `New Arrivals: ${marqueeText} | Special Discount on Memberships! | 🔥 Limited Time Offer | `;

  return (
    <div
      className={cn(
        "relative flex overflow-x-hidden border-y border-divider bg-primary/5 py-3 font-medium text-primary",
        className,
      )}
    >
      <Marquee>
        {/* We repeat the text twice to create a seamless loop */}
        <span className="mx-4 text-sm md:text-base">{fullText}</span>
        <span className="mx-4 text-sm md:text-base">{fullText}</span>
        <span className="mx-4 text-sm md:text-base">{fullText}</span>
      </Marquee>
    </div>
  );
};

export default MarqueeBooks;
