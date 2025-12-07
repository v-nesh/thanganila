import React from 'react';
import { cn } from '../utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  bg?: 'white' | 'gray' | 'transparent';
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  bg = 'white',
  className 
}) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-12 md:py-16",
        bg === 'white' ? "bg-white" : bg === 'gray' ? "bg-slate-50" : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};
