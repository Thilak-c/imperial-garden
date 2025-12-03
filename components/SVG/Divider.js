export default function Divider({ className = "w-full h-px" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 1 L200 1"
        stroke="url(#gradient)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="currentColor" className="stop-color-accent" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

