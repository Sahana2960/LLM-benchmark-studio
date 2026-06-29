import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/leaderboard/"
        );
        setLeaderboard(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadLeaderboard();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        🏆 Leaderboard
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-700">
          <thead className="bg-slate-800">
            <tr>
              <th className="p-3">Rank</th>
              <th className="p-3">Model</th>
              <th className="p-3">Runs</th>
              <th className="p-3">Avg Latency</th>
              <th className="p-3">Avg CPU</th>
              <th className="p-3">Avg RAM</th>
            </tr>
          </thead>

          <tbody>
            {leaderboard.map((model, index) => (
              <tr
                key={model.model}
                className="border-b border-slate-700 hover:bg-slate-900"
              >
                <td className="p-3 font-bold">
                  #{index + 1}
                </td>

                <td className="p-3">
                  {model.model}
                </td>

                <td className="p-3">
                  {model.runs}
                </td>

                <td className="p-3">
                  {model.avg_latency} ms
                </td>

                <td className="p-3">
                  {model.avg_cpu}%
                </td>

                <td className="p-3">
                  {model.avg_ram}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;