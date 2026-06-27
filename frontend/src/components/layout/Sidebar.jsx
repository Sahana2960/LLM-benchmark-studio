import {
  FaTachometerAlt,
  FaRobot,
  FaHistory,
  FaTrophy,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        🤖 LLM Benchmark Studio
      </h1>

      <nav className="space-y-4">
        <div className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
          <FaRobot />
          <span>Benchmark</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
          <FaHistory />
          <span>History</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
          <FaTrophy />
          <span>Leaderboard</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
          <FaCog />
          <span>Settings</span>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;