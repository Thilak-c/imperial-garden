export default function LogoMark({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" className="text-accent" />
      <path
        d="M30 50 L45 35 L55 35 L70 50 L55 65 L45 65 Z"
        fill="currentColor"
        className="text-accent"
      />
      <circle cx="50" cy="50" r="8" fill="currentColor" className="text-primary dark:text-neutral" />
    </svg>
  );
}

