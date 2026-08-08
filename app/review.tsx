import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  avatarUrl?: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  helpfulCount: number;
}

interface ReviewCardProps {
  review: Review;
  onHelpfulClick?: (id: string) => void;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, onHelpfulClick }) => {
  const [helpful, setHelpful] = useState(review.helpfulCount);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      setHelpful((prev) => prev + 1);
      setHasVoted(true);
      onHelpfulClick?.(review.id);
    }
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl m-2 w-70 lg:w-90 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          {review.avatarUrl ? (
            <img src={review.avatarUrl} alt={review.author} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 font-semibold flex items-center justify-center text-sm">
              {review.author.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <h4 className="font-semibold text-slate-900 text-sm">{review.author}</h4>
            {review.verified && (
              <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified Customer
              </span>
            )}
          </div>
        </div>
        <span className="text-xs text-slate-400">{review.date}</span>
      </div>

      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 fill-slate-100'
            }`}
          />
        ))}
      </div>

      <h3 className="font-medium text-slate-900 text-base mb-1">{review.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">{review.content}</p>

      {/* <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-xs text-slate-500">
        <span>Was this review helpful?</span>
        <button
          onClick={handleVote}
          disabled={hasVoted}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
            hasVoted
              ? 'bg-indigo-50 border-indigo-100 text-indigo-600 cursor-default'
              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600'
          }`}
        >
          <ThumbsUp className="w-3.5 h-3.5" />
          <span>{helpful}</span>
        </button>
      </div> */}
    </div>
  );
};
