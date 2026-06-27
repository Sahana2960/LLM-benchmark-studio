function MetricCard({ title, value, unit }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow">
      <h3 className="text-sm text-slate-400">{title}</h3>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
        <span className="ml-1 text-lg text-cyan-400">
          {unit}
        </span>
      </h2>
    </div>
  );
}

export default MetricCard;