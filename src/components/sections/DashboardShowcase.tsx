import { useState } from "react";
import { BarChart3, TrendingUp, Database, Table2 } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const tabs = [
  { id: "powerbi", label: "Hospital ER Dashboard (Power BI)", icon: BarChart3, color: "#F2C811" },
  { id: "excel", label: "Retail Sales Dashboard (Excel)", icon: Table2, color: "#217346" },
  { id: "sql", label: "Airline Revenue (SQL)", icon: Database, color: "#3B82F6" },
  { id: "wns", label: "Revenue Accounting KPIs", icon: TrendingUp, color: "#E8762D" },
];

const erPatientVolumeData = [
  { shift: "00:00", volume: 14, waitTime: 45 },
  { shift: "04:00", volume: 8, waitTime: 20 },
  { shift: "08:00", volume: 32, waitTime: 65 },
  { shift: "12:00", volume: 48, waitTime: 95 },
  { shift: "16:00", volume: 56, waitTime: 110 },
  { shift: "20:00", volume: 38, waitTime: 75 },
];

const retailSalesData = [
  { category: "Electronics", sales: 124000, margin: 28 },
  { category: "Apparel", sales: 98000, margin: 42 },
  { category: "Home Goods", sales: 76000, margin: 35 },
  { category: "Footwear", sales: 62000, margin: 38 },
  { category: "Beauty", sales: 85000, margin: 50 },
];

const routeProfitabilityData = [
  { route: "BOM - DEL", revenue: 4.8, loadFactor: 88 },
  { route: "BOM - DXB", revenue: 6.2, loadFactor: 94 },
  { route: "BOM - LHR", revenue: 7.5, loadFactor: 91 },
  { route: "BOM - SIN", revenue: 5.1, loadFactor: 86 },
  { route: "BOM - MAA", revenue: 3.4, loadFactor: 79 },
];

const erKpis = [
  { name: "Daily Peak Volume", value: "340 Patients", change: "Capacity Target Met", positive: true },
  { name: "Avg ER Wait Time", value: "42 Mins", change: "-18% after staffing adjust", positive: true },
  { name: "DAX Measures Built", value: "24 Custom", change: "Dynamic Tooltips", positive: true },
  { name: "Staffing Efficiency", value: "96.4%", change: "+14.2% optimized", positive: true },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{color: string; name: string; value: number}>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E293B] border border-white/[0.1] rounded-xl px-3 py-2 text-xs">
        <p className="text-[#64748B] mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }} className="font-mono">
            {p.name}: {p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function PowerBITab() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {erKpis.map((kpi) => (
          <div key={kpi.name} className="bg-[#0F1623] rounded-xl p-4 border border-white/[0.06]">
            <p className="text-xs text-[#64748B] mb-2">{kpi.name}</p>
            <p className="text-2xl font-bold text-white font-mono">{kpi.value}</p>
            <p className={`text-xs mt-1 font-mono ${kpi.positive ? "text-emerald-400" : "text-red-400"}`}>
              {kpi.change}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-[#0F1623] rounded-xl p-4 border border-white/[0.06]">
        <p className="text-xs text-[#64748B] mb-4">Patient Volume vs Wait Time (24h Shift Cycle)</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={erPatientVolumeData}>
            <defs>
              <linearGradient id="erGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F2C811" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#F2C811" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="shift" tick={{ fill: "#64748B", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#64748B", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="volume" name="Patient Volume" stroke="#F2C811" fill="url(#erGrad)" strokeWidth={2} />
            <Line type="monotone" dataKey="waitTime" name="Wait Time (m)" stroke="#3B82F6" strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ExcelTab() {
  return (
    <div className="space-y-4">
      <div className="bg-[#0F1623] rounded-xl p-4 border border-white/[0.06]">
        <p className="text-xs text-[#64748B] mb-3">Retail Category Performance (Power Query & Pivot Summary)</p>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="text-left text-[#64748B] py-2 font-medium">Product Category</th>
              <th className="text-right text-[#64748B] py-2 font-medium">Total Sales ($)</th>
              <th className="text-right text-[#64748B] py-2 font-medium">Gross Margin (%)</th>
              <th className="text-right text-[#64748B] py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {retailSalesData.map((row) => (
              <tr key={row.category} className="hover:bg-white/[0.02]">
                <td className="text-[#94A3B8] py-2.5 font-medium">{row.category}</td>
                <td className="text-right font-mono text-white py-2.5">${row.sales.toLocaleString()}</td>
                <td className="text-right font-mono text-emerald-400 py-2.5">{row.margin}%</td>
                <td className="text-right font-mono text-xs py-2.5 text-blue-400">Automated</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#0F1623] rounded-xl p-4 border border-white/[0.06]">
        <p className="text-xs text-[#64748B] mb-1">Key Impact</p>
        <p className="text-white text-sm">
          Dynamic Power Query pipeline updated automatically from multi-file sources with <span className="text-emerald-400 font-mono">zero manual upkeep</span>.
        </p>
      </div>
    </div>
  );
}

function SQLTab() {
  return (
    <div className="space-y-4">
      <div className="bg-[#0F1623] rounded-xl p-4 border border-white/[0.06]">
        <p className="text-xs text-[#64748B] mb-4">Route Revenue ($M) vs Load Factor (%)</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={routeProfitabilityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="route" tick={{ fill: "#64748B", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#64748B", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="revenue" name="Revenue ($M)" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-[#0B0F19] rounded-xl p-4 border border-white/[0.06] font-mono text-xs">
        <p className="text-[#64748B] mb-3">— Normalized Schema SQL Query</p>
        <p className="text-[#06B6D4]">{"SELECT"}</p>
        <p className="text-[#94A3B8] pl-4">{"r.route_code, SUM(p.ticket_price) AS total_revenue,"}</p>
        <p className="text-[#94A3B8] pl-4">{"AVG(r.passenger_load_factor) AS avg_load_factor,"}</p>
        <p className="text-[#94A3B8] pl-4">{"DENSE_RANK() OVER (ORDER BY SUM(p.ticket_price) DESC) AS rank"}</p>
        <p className="text-[#06B6D4]">{"FROM reservation_data p"}</p>
        <p className="text-[#06B6D4]">{"JOIN route_master r ON p.route_id = r.id"}</p>
        <p className="text-[#06B6D4]">{"GROUP BY r.route_code;"}</p>
      </div>
    </div>
  );
}

function WNSTab() {
  return (
    <div className="space-y-4">
      <div className="bg-[#0F1623] rounded-xl p-4 border border-white/[0.06]">
        <p className="text-xs text-[#64748B] mb-4">Passenger Revenue Accounting Metrics (WNS Global)</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#0B0F19] p-4 rounded-xl border border-white/[0.06]">
            <p className="text-xs text-[#64748B]">Process Time Reduced</p>
            <p className="text-3xl font-bold text-emerald-400 font-mono mt-1">-30%</p>
            <p className="text-xs text-[#94A3B8] mt-1">Excel Macros & SQL Scripting</p>
          </div>
          <div className="bg-[#0B0F19] p-4 rounded-xl border border-white/[0.06]">
            <p className="text-xs text-[#64748B]">Reporting Turnaround</p>
            <p className="text-3xl font-bold text-blue-400 font-mono mt-1">+20%</p>
            <p className="text-xs text-[#94A3B8] mt-1">Real-time KPI Dashboards</p>
          </div>
          <div className="bg-[#0B0F19] p-4 rounded-xl border border-white/[0.06]">
            <p className="text-xs text-[#64748B]">Data Accuracy</p>
            <p className="text-3xl font-bold text-violet-400 font-mono mt-1">&gt;99%</p>
            <p className="text-xs text-[#94A3B8] mt-1">Integrated System Validation</p>
          </div>
          <div className="bg-[#0B0F19] p-4 rounded-xl border border-white/[0.06]">
            <p className="text-xs text-[#64748B]">Audit Readiness</p>
            <p className="text-3xl font-bold text-amber-400 font-mono mt-1">100%</p>
            <p className="text-xs text-[#94A3B8] mt-1">Accounting Compliance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState("powerbi");

  const renderTab = () => {
    switch (activeTab) {
      case "powerbi": return <PowerBITab />;
      case "excel": return <ExcelTab />;
      case "sql": return <SQLTab />;
      case "wns": return <WNSTab />;
      default: return null;
    }
  };

  return (
    <section id="dashboards" className="py-28 bg-[#0D1120]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">04 — Dashboards</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-3">
            Portfolio{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-[#64748B] mb-10 max-w-lg">
            Interactive previews of projects from resume: Power BI, Advanced Excel, SQL Schemas, and Revenue Automation.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="bg-[#111827] border border-white/[0.08] rounded-3xl overflow-hidden">
            {/* Tab bar */}
            <div className="flex overflow-x-auto border-b border-white/[0.08] px-2 pt-2 gap-1 no-scrollbar">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-t-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-[#0B0F19] text-white border border-b-0 border-white/[0.1]"
                        : "text-[#64748B] hover:text-white"
                    }`}
                  >
                    <Icon size={14} style={{ color: activeTab === tab.id ? tab.color : undefined }} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="p-6">
              {renderTab()}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
