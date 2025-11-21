import React, { useState } from "react";
import StatsCard from "./components/StatsCard";

function App() {
  const [sales, setSales] = useState(100);
  const [visits, setVisits] = useState(500);

  return (
    <div style={{ padding: 20 }}>
      <h1>Pure Component Demo</h1>

      <StatsCard title="Sales" value={sales} lastUpdated={new Date().toLocaleTimeString()} />

      <StatsCard title="Website Visits" value={visits} lastUpdated={new Date().toLocaleTimeString()} />

      <button onClick={() => setSales(sales + 10)}>Update Sales</button>
      <button onClick={() => setVisits(visits + 50)} style={{ marginLeft: 10 }}>
        Update Visits
      </button>
    </div>
  );
}

export default App;
