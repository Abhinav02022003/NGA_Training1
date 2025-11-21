import React from "react";

function StatsCard({ title, value, lastUpdated }) {
  console.log(`Rendering: ${title}`);

  return (
    <div style={{ padding: 20, border: "1px solid grey", margin: 10 }}>
      <h3>{title}</h3>
      <p>Value: {value}</p>
      <small>Last Updated: {lastUpdated}</small>
    </div>
  );
}

export default React.memo(StatsCard);
