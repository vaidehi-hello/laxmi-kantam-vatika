export default function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p className={`text-xs uppercase tracking-widest font-sans font-medium mb-2 ${light ? 'text-gold-300' : 'text-gold-700'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl font-semibold ${light ? 'text-white' : 'text-maroon-800'}`}>
        {title}
      </h2>
      <span className="block w-14 h-0.5 bg-gold mx-auto mt-3" />
    </div>
  )
}
