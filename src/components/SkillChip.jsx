import React from 'react';

export default function SkillChip({ children, emphasis = false }) {
  return (
    <span
      className={`chip ${emphasis ? 'chip-wide' : ''}`}
      title={typeof children === 'string' ? children : undefined}
    >
      {children}
    </span>
  );
}
