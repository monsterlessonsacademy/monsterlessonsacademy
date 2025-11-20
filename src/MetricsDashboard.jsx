import { useEffect, useState } from "react";

const MetricsDashboard = ({ selectedDate }) => {
  const [metrics, setMetrics] = useState(null);

  // Broken: runs only on mount
  useEffect(() => {
    mockFetchMetrics(selectedDate).then((data) => {
      setMetrics(data);
    });
  }, []); // selectedDate ignored

  if (!metrics) return <div>Loading…</div>;

  return (
    <div>
      <h2>Metrics for {selectedDate}</h2>
      <pre>{JSON.stringify(metrics, null, 2)}</pre>
    </div>
  );
};

const mockFetchMetrics = (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        date,
        impressions: Math.floor(Math.random() * 10000),
        clicks: Math.floor(Math.random() * 5000),
      });
    }, 600); // artificial delay
  });
};

export default MetricsDashboard;
