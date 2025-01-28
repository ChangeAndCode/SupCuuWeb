// app/invest-in-talent/components/TornPaper/index.tsx
export const TornPaper = ({ 
    position = 'bottom', 
    className = '', 
    color = 'white' 
  }: { 
    position?: 'top' | 'bottom';
    className?: string;
    color?: string;
  }) => {
    return (
      <div className={`absolute w-full overflow-hidden ${position === 'bottom' ? 'bottom-0 transform rotate-180' : 'top-0'} ${className}`}>
        <svg viewBox="0 0 1440 48" className="w-full h-12" preserveAspectRatio="none">
          <path
            d="M0,0 C240,48 480,48 720,24 C960,0 1200,0 1440,48 L1440,48 L0,48 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  };