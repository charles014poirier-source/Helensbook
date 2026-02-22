"use client";

import siteData from '@/lib/siteData';

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-caramel' : 'text-coffee/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {siteData.reviews.map((review, index) => (
        <div
          key={index}
          className="card p-6 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-caramel to-beige flex items-center justify-center text-white font-semibold text-lg">
                {review.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-coffee">{review.author}</p>
                {review.source && (
                  <p className="text-sm text-coffee/60">{review.source}</p>
                )}
              </div>
            </div>
            {review.rating && <StarRating rating={review.rating} />}
          </div>
          <p className="text-body text-coffee/80 italic">
            &quot;{review.text}&quot;
          </p>
        </div>
      ))}
    </div>
  );
}
