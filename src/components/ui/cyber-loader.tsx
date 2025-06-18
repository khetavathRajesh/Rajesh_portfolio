
import { useEffect, useState } from 'react';

export const CyberLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      
      <div className="relative z-10 text-center">
        {/* Simple Logo/Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center animate-pulse-glow">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spinner"></div>
          </div>
          <div className="text-slate-600 dark:text-slate-300 text-sm tracking-wide">
            Loading Portfolio
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress percentage */}
        <div className="text-slate-500 dark:text-slate-400 text-xs font-medium">
          {progress}%
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
    </div>
  );
};
