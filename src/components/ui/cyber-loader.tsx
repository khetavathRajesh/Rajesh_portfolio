
import { useEffect, useState } from 'react';

export const CyberLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState('INITIALIZING');

  const glitchTexts = [
    'INITIALIZING',
    'LOADING ASSETS',
    'CONNECTING',
    'READY'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setGlitchText(glitchTexts[Math.floor(progress / 25) % glitchTexts.length]);
    }, 300);

    return () => clearInterval(textInterval);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-cyan-500/20 bg-[size:50px_50px]" />
      </div>
      
      {/* Glitch effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20" />
      
      <div className="relative z-10 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 glitch" data-text="RAJESH">
            RAJESH
          </h1>
          <div className="text-cyan-400 text-sm tracking-[0.3em] mt-2 animate-pulse">
            PORTFOLIO_SYSTEM
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden border border-cyan-500/30">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-100 ease-out animate-pulse-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Status text */}
        <div className="text-cyan-400 text-sm font-mono tracking-wider">
          <span className="glitch" data-text={glitchText}>
            {glitchText}
          </span>
          <span className="animate-pulse">...</span>
        </div>

        {/* Progress percentage */}
        <div className="text-gray-400 text-xs mt-2 font-mono">
          {progress}% COMPLETE
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};
