import React from "react";

export default function Benefits() {
  const benefits = [
    "Single Page Application (SPA) Navigation",
    "Faster Page Loading",
    "Dynamic Routing",
    "Component-Based Routing",
    "Declarative Routing",
    "Active Link Styling (NavLink)",
    "Programmatic Navigation",
    "Route Protection (Private Routes)",
    "Nested and Conditional Routes",
    "Browser History Management",
    "404 and Fallback Pages",
    "Integration Friendly"
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Key Benefits of Using React Router</h2>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index} style={{ marginBottom: 10, fontWeight: "bold" }}>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
