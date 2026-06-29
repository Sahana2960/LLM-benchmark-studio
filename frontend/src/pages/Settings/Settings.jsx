import { useState } from "react";

function Settings() {
  const [defaultModel, setDefaultModel] = useState("gemma3:1b");
  const [serverUrl, setServerUrl] = useState("http://localhost:11434");
  const [timeout, setTimeout] = useState(300);

  const clearHistory = async () => {
    if (!window.confirm("Delete all benchmark history?")) return;

    try {
      await fetch("http://127.0.0.1:8000/api/history/clear", {
        method: "DELETE",
      });

      alert("History cleared successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to clear history.");
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">⚙️ Settings</h1>

      <div className="space-y-6 max-w-2xl">

        <div>
          <label className="block mb-2 text-lg">Default Model</label>

          <select
            value={defaultModel}
            onChange={(e) => setDefaultModel(e.target.value)}
            className="w-full bg-slate-800 rounded-lg p-3"
          >
            <option>gemma3:1b</option>
            <option>llama3.2:3b</option>
            <option>phi3:3.8b</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-lg">Ollama Server URL</label>

          <input
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
            className="w-full bg-slate-800 rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 text-lg">
            Benchmark Timeout (seconds)
          </label>

          <input
            type="number"
            value={timeout}
            onChange={(e) => setTimeout(e.target.value)}
            className="w-full bg-slate-800 rounded-lg p-3"
          />
        </div>

        <button
          onClick={clearHistory}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg"
        >
          🗑 Clear Benchmark History
        </button>

        <div className="bg-slate-900 rounded-xl p-6 mt-8">
          <h2 className="text-2xl font-bold mb-3">About</h2>

          <p>
            LLM Benchmark Studio is a full-stack AI benchmarking platform
            built with React, FastAPI, Ollama, SQLite and Recharts.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Settings;