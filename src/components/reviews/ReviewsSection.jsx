import { useGoogleReviews } from '../../hooks/useGoogleReviews'
import { useVenue }          from '../../context/VenueContext'
import ReviewCard            from './ReviewCard'
import StarRating            from './StarRating'
import SectionHeading        from '../ui/SectionHeading'
import AnimatedSection       from '../ui/AnimatedSection'

export default function ReviewsSection() {
  const venue                        = useVenue()
  const { reviews, rating, loading } = useGoogleReviews()
  const displayRating                = rating ?? parseFloat(venue.rating)

  return (
    <section className="section-pad bg-beige-100">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="What Our Guests Say" />
        </AnimatedSection>

        {/* Rating badge */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col items-center gap-2 mb-10">
            <StarRating rating={displayRating} size="text-2xl" />
            <p className="font-serif text-2xl text-maroon-800 font-semibold">
              Google Rating: {displayRating} Stars
            </p>
            <p className="text-gray-500 text-sm">Based on {venue.totalReviews} authentic guest reviews</p>
          </div>
        </AnimatedSection>

        {loading ? (
          <div className="text-center text-gray-400 py-10">Loading reviews…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((r, i) => (
              <AnimatedSection key={r.id} delay={i * 0.07}>
                <ReviewCard review={r} />
              </AnimatedSection>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href={venue.googleBizUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
