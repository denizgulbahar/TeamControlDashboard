import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieData } from "../../types/chart";

const pieData: PieData[] = [
  { name: "Team A", value: 10 },
  { name: "Team B", value: 15 },
  { name: "Team C", value: 8 },
  { name: "Team D", value: 12 }
];

const COLORS: string[] = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number }[];
}
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => 
  active && payload?.length && (
    <div style={{ background: "white", padding: 10, border: "1px solid #ccc", borderRadius: 5 }}>
      <p>{payload[0].name} : {payload[0].value}</p>
    </div>
  );

const PieChartComponent: React.FC = () => (
  <ResponsiveContainer width="50%" height={300}>
    <PieChart>
      <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
        {pieData.map((index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
    <p style={{ textAlign: "center", padding: 7 }}>
      Pie Chart: Percentage of people in each team.
    </p>
  </ResponsiveContainer>
);

export default PieChartComponent;
