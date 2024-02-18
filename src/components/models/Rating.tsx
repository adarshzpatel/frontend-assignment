import { FaStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  const filledStar = <FaStar className="text-primary-400 h-5 w-5" />;
  const emptyStar = <FaStar className="text-gray-900 h-5 w-5" />;

  return (
    <div className="flex gap-1 items-center justify-center">
      {Array.from({ length: maxRating }).map((_, index) => (
        <span key={index}>{index < rating ? filledStar : emptyStar}</span>
      ))}
    </div>
  );
};
export default Rating;
