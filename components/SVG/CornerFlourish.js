export default function CornerFlourish({ className = "w-24 h-24", position = "top-left" }) {
  const transforms = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  };

  return (
    <svg
      className={`${className} ${transforms[position]}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0 L0 30 Q0 50 20 50 L50 50 Q70 50 70 70 L70 100"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-accent/30"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="20" cy="50" r="3" fill="currentColor" className="text-accent/50" />
      <circle cx="70" cy="50" r="3" fill="currentColor" className="text-accent/50" />
    </svg>
  );
}

