import { useEffect, useState, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export const CyberCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const trailId = useRef(0);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Add new trail point
      trailId.current++;
      setTrail(prev => [
        ...prev.slice(-8), // Keep only last 8 points
        { x: e.clientX, y: e.clientY, id: trailId.current }
      ]);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check for hoverable elements
    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.matches('button, a, input, [role="button"], .blockchain-block, .cyber-button') ||
                         target.closest('button, a, input, [role="button"], .blockchain-block, .cyber-button');
      setIsHovering(!!isHoverable);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousemove', checkHover);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousemove', checkHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Trail points - blockchain chain effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-1 h-1 rounded-full transition-all duration-200"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            opacity: (index + 1) / trail.length * 0.6,
            transform: `scale(${(index + 1) / trail.length})`,
            background: `hsl(var(--primary))`,
            boxShadow: `0 0 ${4 + index}px hsl(var(--primary) / 0.8)`,
          }}
        />
      ))}

      {/* Main cursor - cyber block */}
      <div
        className={`absolute transition-all duration-200 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      >
        {/* Outer glow ring */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isHovering ? 'animate-pulse' : ''
          }`}
          style={{
            width: '24px',
            height: '24px',
            background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
            transform: isHovering ? 'scale(2)' : 'scale(1)',
          }}
        />

        {/* Middle ring */}
        <div 
          className="absolute inset-0 rounded-full border transition-all duration-200"
          style={{
            width: '16px',
            height: '16px',
            left: '4px',
            top: '4px',
            borderColor: `hsl(var(--primary) / ${isHovering ? '1' : '0.6'})`,
            borderWidth: '1px',
            boxShadow: `0 0 8px hsl(var(--primary) / 0.5), inset 0 0 8px hsl(var(--primary) / 0.2)`,
          }}
        />

        {/* Core block */}
        <div 
          className={`absolute rounded-sm transition-all duration-200 ${
            isHovering ? 'rotate-45' : 'rotate-0'
          }`}
          style={{
            width: '8px',
            height: '8px',
            left: '8px',
            top: '8px',
            background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
            boxShadow: `
              0 0 4px hsl(var(--primary)),
              0 0 8px hsl(var(--primary) / 0.5),
              inset 0 0 4px hsl(var(--primary-foreground) / 0.2)
            `,
          }}
        />

        {/* Corner accents for blockchain theme */}
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className="absolute w-1 h-1 transition-all duration-300"
            style={{
              left: i % 2 === 0 ? '-2px' : '18px',
              top: i < 2 ? '-2px' : '18px',
              background: `hsl(var(--accent))`,
              boxShadow: `0 0 4px hsl(var(--accent))`,
              opacity: isHovering ? 1 : 0.7,
              transform: `scale(${isHovering ? 1.5 : 1})`,
            }}
          />
        ))}
      </div>

      {/* Hover effect - expanding data grid */}
      {isHovering && (
        <div
          className="absolute pointer-events-none animate-pulse"
          style={{
            left: position.x - 32,
            top: position.y - 32,
            width: '64px',
            height: '64px',
            background: `radial-gradient(circle, transparent 30%, hsl(var(--primary) / 0.1) 31%, hsl(var(--primary) / 0.1) 32%, transparent 33%)`,
            backgroundSize: '8px 8px',
          }}
        />
      )}
    </div>
  );
};