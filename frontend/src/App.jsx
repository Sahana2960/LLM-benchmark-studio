import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./pages/dashboard/Dashboard";
import Benchmark from "./pages/benchmark/Benchmark";
import History from "./pages/History/History";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/benchmark" element={<Benchmark />} />
          <Route path="/history" element={<History />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;