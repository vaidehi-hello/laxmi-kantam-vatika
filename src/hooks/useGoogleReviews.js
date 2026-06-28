import { useState, useEffect } from 'react'
import { fallbackReviews } from '../data/reviews'

const API_KEY  = import.meta.env.VITE_GOOGLE_PLACES_API_KEY
const PLACE_ID = import.meta.env.VITE_PLACE_ID

/**
 * Fetches reviews from Google Places API (New).
 * Falls back to local data if API key or Place ID is missing,
 * or if the fetch fails.
 */
export function useGoogleReviews() {
  const [reviews, setReviews]     = useState([])
  const [rating,  setRating]      = useState(null)
  const [loading, setLoading]     = useState(true)
  const [source,  setSource]      = useState('fallback') // 'google' | 'fallback'

  useEffect(() => {
    if (!API_KEY || !PLACE_ID) {
      setReviews(fallbackReviews)
      setLoading(false)
      return
    }

    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,reviews,userRatingCount`

    fetch(url, {
      headers: {
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'rating,reviews,userRatingCount',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Places API error')
        return res.json()
      })
      .then((data) => {
        if (data.rating)  setRating(data.rating)
        if (data.reviews) {
          const mapped = data.reviews.map((r, i) => ({
            id:     i,
            author: r.authorAttribution?.displayName || 'Guest',
            rating: r.rating,
            date:   r.relativePublishTimeDescription || '',
            text:   r.text?.text || '',
            avatar: (r.authorAttribution?.displayName || 'G').substring(0, 2).toUpperCase(),
          }))
          setReviews(mapped)
          setSource('google')
        } else {
          setReviews(fallbackReviews)
        }
      })
      .catch(() => {
        setReviews(fallbackReviews)
      })
      .finally(() => setLoading(false))
  }, [])

  return { reviews, rating, loading, source }
}
