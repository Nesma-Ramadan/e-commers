"use client"

import { useSession } from 'next-auth/react';
import { ReactNode, useState, useEffect } from 'react';
import AuthModal from '@/app/(Auth)/signUp/AuthModal';
import { createPortal } from 'react-dom';

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { data: session } = useSession();
  const [authMode, setAuthMode] = useState<"signup" | "login" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (!session) {
      e.preventDefault();
      e.stopPropagation();
      setAuthMode('login');
    }
  };

 
    return (
      <>
        <div onClick={handleClick}>
          {fallback || children}
        </div>
        {mounted && authMode && createPortal(
          <AuthModal
            mode={authMode}
            onClose={() => setAuthMode(null)}
            onSwitch={(mode) => setAuthMode(mode)}
          />,
          document.body
        )}
      </>
    );
  
}