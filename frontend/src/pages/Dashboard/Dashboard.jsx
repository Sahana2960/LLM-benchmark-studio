import { useEffect, useState } from "react";
import { getDashboard, getCharts } from "../../api/ollamaApi";
import MetricCard from "../../components/ui/MetricCard";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

function Dashboard(){

    const [stats,setStats]=useState(null);
    const [chart,setChart]=useState([]);

    useEffect(()=>{

        async function load(){

            setStats(await getDashboard());

            setChart(await getCharts());

        }

        load();

    },[]);

    if(!stats) return <h1>Loading...</h1>;

    return(

<div>

<h1 className="text-5xl font-bold mb-8">

Dashboard

</h1>

<div className="grid grid-cols-4 gap-6 mb-10">

<MetricCard title="CPU" value={`${stats.cpu}%`} />

<MetricCard title="RAM" value={`${stats.ram}%`} />

<MetricCard title="Models" value={stats.models} />

<MetricCard title="Latency" value={`${stats.latency} ms`} />

</div>

<div className="bg-slate-900 rounded-xl p-6">

<h2 className="text-2xl mb-4">

Latency Over Time

</h2>

<ResponsiveContainer width="100%" height={350}>

<LineChart data={chart}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="created_at"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="latency"
stroke="#06b6d4"
/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

)

}

export default Dashboard;