import React from 'react';

export const LeafIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
     <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M14.121 15.879A3 3 0 0112.025 18H12a3 3 0 01-2.121-.879M14.121 15.879L12 18l-2.121-2.121m4.242 0H18a3 3 0 000-6H6a3 3 0 000 6h2.121m4.242 0A3 3 0 0112 12a3 3 0 012.121-5.121M12 6V3" 
    />
  </svg>
);
