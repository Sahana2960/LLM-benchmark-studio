import { useEffect, useState } from "react";
import { getHistory } from "../../api/ollamaApi";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function loadHistory() {
      try {
        const data = await getHistory();
        setHistory(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadHistory();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Benchmark History
      </h1>

<button
  onClick={() => {
    window.open(
      "http://127.0.0.1:8000/api/export/csv",
      "_blank"
    );
  }}
  className="mb-6 bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-lg"
>
  ⬇ Export CSV
</button>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-700">
          <thead className="bg-slate-800">
            <tr>
              <th className="p-3">Model</th>
              <th className="p-3">Latency</th>
              <th className="p-3">CPU</th>
              <th className="p-3">RAM</th>
              <th className="p-3">Response Length</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr
                key={item.id}
                className="border-t border-slate-700"
              >
                <td className="p-3">{item.model}</td>
                <td className="p-3">{item.latency} ms</td>
                <td className="p-3">{item.cpu}%</td>
                <td className="p-3">{item.ram}%</td>
                <td className="p-3">{item.response_length}</td>
                <td className="p-3">{item.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;