import { Card } from "@heroui/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={cn(
            "h-3 w-3",
            star <= rating ? "text-amber-500 fill-amber-500" : "text-default-200 fill-default-200"
          )}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const UserReview = ({ review }) => {
  const avatarUrl = review.avatar || `https://ui-avatars.com/api/?name=${review.name}&background=f97316&color=fff`;

  return (
    <Card className="w-fullborder-none bg-transparent shadow-none hover:translate-y-[-4px] transition-transform duration-300">
      <div className="relative p-6 bg-white rounded-2xl border border-default-100 shadow-sm overflow-hidden">
        
        {/* Subtle top-accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/10" />

        <div className="w-full flex flex-col gap-5">
          {/* Quote Content */}
          <div className="relative">
             <span className="absolute -top-2 -left-2 text-4xl text-default-100 font-serif leading-none">“</span>
             <p className="text-default-600 text-sm leading-relaxed relative z-10 pl-2">
                {review.comment}
             </p>
          </div>

          {/* Bottom Row: User Info */}
          <div className="flex items-center justify-between border-t border-default-50 pt-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-full overflow-hidden border border-default-200">
                <Image 
                  src={avatarUrl} 
                  alt={review.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs text-default-900">
                  {review.name}
                </span>
                <StarRating rating={review.rating} />
              </div>
            </div>

            {review.bookTitle && (
              <div className="flex flex-col items-end">
                <span className="text-[9px] text-default-400 uppercase font-medium tracking-tighter">Reviewing</span>
                <span className="text-[10px] font-bold text-orange-600 truncate max-w-[100px]">
                  {review.bookTitle}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserReview;