import React from 'react';

export default function HeavyPage() {
  return (
    <div>
      <h2>Heavy Page Loaded!</h2>
      <img
        src="https://via.placeholder.com/600x400"
        alt="Placeholder"
        style={{ margin: '20px 0' }}
      />
      <p>This is a large component that is loaded only when needed.</p>
    </div>
  );
}
