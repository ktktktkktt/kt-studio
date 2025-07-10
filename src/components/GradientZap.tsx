
const GradientZap = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="zapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2B5CE6" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
      </defs>
      <path 
        d="m13 2-2 8h5l-3 12-2-8H6l3-12Z" 
        fill="url(#zapGradient)"
        stroke="url(#zapGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GradientZap;
