import StarRating from './StarRating'

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-xl border border-beige-200 p-6 shadow-sm flex flex-col gap-3">
      <StarRating rating={review.rating} />
      <p className="text-gray-600 text-sm leading-relaxed italic">"{review.text}"</p>
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-beige-100">
        <div className="w-9 h-9 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-xs font-semibold font-sans">
          {review.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">— {review.author}</p>
          <p className="text-xs text-gray-400">{review.date}</p>
        </div>
      </div>
    </div>
  )
}
