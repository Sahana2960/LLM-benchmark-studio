import {
  FaTachometerAlt,
  FaRobot,
  FaHistory,
  FaTrophy,
  FaCog,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
        ? "bg-cyan-600 text-white"
        : "hover:bg-slate-800 hover:text-cyan-400"
    }`;

  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 text-white p-6">
      <h1 className="text-3xl font-bold mb-10">
        🤖 LLM Benchmark Studio
      </h1>

      <nav className="space-y-2">

        <NavLink to="/" className={linkClass}>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/benchmark" className={linkClass}>
          <FaRobot />
          <span>Benchmark</span>
        </NavLink>

        <NavLink to="/history" className={linkClass}>
          <FaHistory />
          <span>History</span>
        </NavLink>

        <NavLink to="/leaderboard" className={linkClass}>
          <FaTrophy />
          <span>Leaderboard</span>
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;