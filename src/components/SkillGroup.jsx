import React from 'react';
import SkillChip from './SkillChip';

export default function SkillGroup({ items = [] }) {
  return (
    <div className="skills-grid">
      {items.map((it) => {
        const isLong = typeof it === 'string' && (it.length > 28 || it.includes('(') || it.includes(','));
        return <SkillChip key={it} emphasis={isLong}>{it}</SkillChip>;
      })}
    </div>
  );
}
