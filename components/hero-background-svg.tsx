export function HeroBackgroundSVG() {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4a00e0", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#8e2de2", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)" />
      <circle cx="100" cy="100" r="80" fill="#ffffff" fillOpacity="0.2" />
      <circle cx="900" cy="800" r="150" fill="#ffffff" fillOpacity="0.2" />
      <path
        d="M0 1000 Q 500 800 1000 1000"
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        strokeOpacity="0.3"
      />
      <path
        d="M0 900 Q 500 700 1000 900"
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        strokeOpacity="0.3"
      />
    </svg>
  )
}

