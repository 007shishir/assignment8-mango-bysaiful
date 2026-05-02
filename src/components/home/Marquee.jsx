import { cn } from "@/lib/utils";

const Marquee = ({ books = [], className }) => {
  // Sample data if none is provided
  const displayBooks = books.length > 0 ? books : [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "Atomic Habits" },
    { id: 3, title: "Mango Street Chronicles" }
  ];

  const marqueeText = displayBooks
    .map((book) => `New Arrivals: ${book.title}`)
    .join(" | ");

  const fullText = `${marqueeText} | Special Discount on Memberships! | 🔥 Limited Time Offer | `;

  return (
    <div 
      className={cn(
        "relative flex overflow-x-hidden border-y border-divider bg-primary/5 py-3 font-medium text-primary",
        className
      )}
    >
      <div className="animate-marquee whitespace-nowrap flex">
        {/* We repeat the text twice to create a seamless loop */}
        <span className="mx-4 text-sm md:text-base">{fullText}</span>
        <span className="mx-4 text-sm md:text-base">{fullText}</span>
        <span className="mx-4 text-sm md:text-base">{fullText}</span>
      </div>
    </div>
  );
};

export default Marquee;