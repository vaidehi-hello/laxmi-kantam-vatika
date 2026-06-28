import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

export default function StarRating({ rating, size = 'text-base' }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i)               stars.push(<FaStar key={i} />)
    else if (rating >= i - 0.5)   stars.push(<FaStarHalfAlt key={i} />)
    else                           stars.push(<FaRegStar key={i} />)
  }
  return (
    <span className={`flex gap-0.5 text-gold-500 ${size}`}>
      {stars}
    </span>
  )
}
