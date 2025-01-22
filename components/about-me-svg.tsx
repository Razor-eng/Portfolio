export function AboutMeSVG() {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8e2de2", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#4a00e0", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad2)" rx="20" ry="20" />
      <circle cx="250" cy="180" r="100" fill="#ffffff" />
      <circle cx="250" cy="400" r="80" fill="#ffffff" fillOpacity="0.6" />
      <path
        d="M175 220 Q 250 280 325 220"
        stroke="#4a00e0"
        strokeWidth="8"
        fill="none"
      />
      <circle cx="210" cy="160" r="15" fill="#4a00e0" />
      <circle cx="290" cy="160" r="15" fill="#4a00e0" />
    </svg>
  )
}

