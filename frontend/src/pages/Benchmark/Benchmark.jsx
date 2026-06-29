import { useEffect, useState } from "react";
import { getModels, runBenchmark } from "../../api/ollamaApi";

function Benchmark() {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadModels() {
      try {
        const data = await getModels();
        setModels(data);

        if (data.length > 0) {
          setSelectedModel(data[0].name);
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadModels();
  }, []);

 async function handleBenchmark() {
  if (!prompt.trim()) {
    alert("Please enter a prompt.");
    return;
  }

  setLoading(true);

  try {
    const response = await runBenchmark(selectedModel, prompt);

    console.log("API Response:", response);

    setResult(response);

    console.log("Result State:", response);
  } catch (err) {
    console.error(err);
    alert("Benchmark failed.");
  } finally {
    setLoading(false);
  }
}
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Benchmark</h1>

      <label className="block mb-2">Model</label>

      <select
        className="w-full bg-slate-900 p-3 rounded-lg mb-6"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        {models.map((model) => (
          <option key={model.name} value={model.name}>
            {model.name}
          </option>
        ))}
      </select>

      <label className="block mb-2">Prompt</label>

      <textarea
        className="w-full bg-slate-900 rounded-lg p-4 h-40"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask your model something..."
      />

      <button
        onClick={handleBenchmark}
        disabled={loading}
        className="mt-6 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold"
      >
        {loading ? "Running..." : "🚀 Run Benchmark"}
      </button>

      {result && (
        <div className="mt-10 bg-slate-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Result</h2>

          <p>
            <strong>Latency:</strong> {result.latency_ms} ms
            <p><strong>Latency:</strong> {result.latency_ms} ms</p>
            <p><strong>CPU:</strong> {result.cpu_usage}%</p>
            <p><strong>RAM:</strong> {result.ram_usage}%</p>
            <p><strong>Response Length:</strong> {result.response_length}</p>
          </p>

          <div className="mt-4">
            <strong>Response:</strong>

            <p className="mt-2 text-slate-300 whitespace-pre-wrap">
              {result.response}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Benchmark;