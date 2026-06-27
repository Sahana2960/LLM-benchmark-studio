import { useEffect, useState } from "react";
import MetricCard from "../../components/ui/MetricCard";
import { getModels } from "../../api/ollamaApi";

function Dashboard() {
  const [modelCount, setModelCount] = useState(0);

  useEffect(() => {
    async function loadModels() {
      try {
        const models = await getModels();
        setModelCount(models.length);
      } catch (error) {
        console.error("Failed to load models:", error);
      }
    }

    loadModels();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <MetricCard title="CPU Usage" value="0" unit="%" />
        <MetricCard title="RAM Usage" value="0" unit="%" />
        <MetricCard title="Models" value={modelCount} unit="" />
        <MetricCard title="Avg Latency" value="0" unit="ms" />
      </div>
    </div>
  );
}

export default Dashboard;