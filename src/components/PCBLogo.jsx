import React from 'react';

// PCB-style logo: circuit traces forming Y and W letters
const PCBLogo = ({ size = 48, animated = false, className = '' }) => {
  const s = size;

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: 'visible' }}
    >
      {/* Outer PCB board shape */}
      <rect x="1" y="1" width="46" height="46" rx="4" ry="4"
        stroke="#544470" strokeWidth="0.8" fill="rgba(13,10,20,0.9)" />

      {/* Corner mounting holes */}
      <circle cx="5" cy="5" r="1.5" stroke="#3d3358" strokeWidth="0.8" fill="none" />
      <circle cx="43" cy="5" r="1.5" stroke="#3d3358" strokeWidth="0.8" fill="none" />
      <circle cx="5" cy="43" r="1.5" stroke="#3d3358" strokeWidth="0.8" fill="none" />
      <circle cx="43" cy="43" r="1.5" stroke="#3d3358" strokeWidth="0.8" fill="none" />

      {/* PCB trace grid (subtle background) */}
      <line x1="10" y1="1" x2="10" y2="47" stroke="#1a1428" strokeWidth="0.4" />
      <line x1="20" y1="1" x2="20" y2="47" stroke="#1a1428" strokeWidth="0.4" />
      <line x1="28" y1="1" x2="28" y2="47" stroke="#1a1428" strokeWidth="0.4" />
      <line x1="38" y1="1" x2="38" y2="47" stroke="#1a1428" strokeWidth="0.4" />
      <line x1="1" y1="10" x2="47" y2="10" stroke="#1a1428" strokeWidth="0.4" />
      <line x1="1" y1="20" x2="47" y2="20" stroke="#1a1428" strokeWidth="0.4" />
      <line x1="1" y1="28" x2="47" y2="28" stroke="#1a1428" strokeWidth="0.4" />
      <line x1="1" y1="38" x2="47" y2="38" stroke="#1a1428" strokeWidth="0.4" />

      {/* === Y LETTER traces === */}
      {/* Y left arm */}
      <line x1="8" y1="10" x2="14" y2="20" stroke="#a48fd4" strokeWidth="1.5" strokeLinecap="round" />
      {/* Y right arm */}
      <line x1="20" y1="10" x2="14" y2="20" stroke="#a48fd4" strokeWidth="1.5" strokeLinecap="round" />
      {/* Y stem */}
      <line x1="14" y1="20" x2="14" y2="30" stroke="#a48fd4" strokeWidth="1.5" strokeLinecap="round" />
      {/* Y junction pad */}
      <circle cx="14" cy="20" r="2" fill="#a48fd4" />
      {/* Y end pads */}
      <circle cx="8" cy="10" r="1.5" fill="none" stroke="#a48fd4" strokeWidth="1" />
      <circle cx="20" cy="10" r="1.5" fill="none" stroke="#a48fd4" strokeWidth="1" />
      <circle cx="14" cy="30" r="1.5" fill="none" stroke="#a48fd4" strokeWidth="1" />

      {/* Y trace routing extras */}
      <line x1="14" y1="30" x2="14" y2="38" stroke="#544470" strokeWidth="0.8" strokeDasharray="2,1" />
      <circle cx="14" cy="38" r="1" fill="#544470" />

      {/* === W LETTER traces === */}
      {/* W left arm down */}
      <line x1="26" y1="10" x2="28" y2="22" stroke="#DBD5F2" strokeWidth="1.5" strokeLinecap="round" />
      {/* W left-middle */}
      <line x1="28" y1="22" x2="32" y2="16" stroke="#DBD5F2" strokeWidth="1.5" strokeLinecap="round" />
      {/* W right-middle */}
      <line x1="32" y1="16" x2="36" y2="22" stroke="#DBD5F2" strokeWidth="1.5" strokeLinecap="round" />
      {/* W right arm up */}
      <line x1="36" y1="22" x2="40" y2="10" stroke="#DBD5F2" strokeWidth="1.5" strokeLinecap="round" />

      {/* W pads */}
      <circle cx="26" cy="10" r="1.5" fill="none" stroke="#DBD5F2" strokeWidth="1" />
      <circle cx="40" cy="10" r="1.5" fill="none" stroke="#DBD5F2" strokeWidth="1" />
      <circle cx="32" cy="16" r="2" fill="#DBD5F2" />
      <circle cx="28" cy="22" r="1.5" fill="none" stroke="#DBD5F2" strokeWidth="1" />
      <circle cx="36" cy="22" r="1.5" fill="none" stroke="#DBD5F2" strokeWidth="1" />

      {/* W routing traces down */}
      <line x1="28" y1="22" x2="28" y2="38" stroke="#544470" strokeWidth="0.8" strokeDasharray="2,1" />
      <line x1="36" y1="22" x2="36" y2="38" stroke="#544470" strokeWidth="0.8" strokeDasharray="2,1" />
      <line x1="28" y1="38" x2="36" y2="38" stroke="#544470" strokeWidth="0.8" />
      <circle cx="28" cy="38" r="1" fill="#544470" />
      <circle cx="36" cy="38" r="1" fill="#544470" />

      {/* Divider trace between Y and W */}
      <line x1="22" y1="8" x2="22" y2="40" stroke="#2e2540" strokeWidth="1" />

      {/* Animated signal dot */}
      {animated && (
        <circle r="1.5" fill="#c4b0f0" opacity="0.9">
          <animateMotion dur="2s" repeatCount="indefinite"
            path="M8,10 L14,20 L14,30 L14,38" />
        </circle>
      )}
    </svg>
  );
};

export default PCBLogo;
