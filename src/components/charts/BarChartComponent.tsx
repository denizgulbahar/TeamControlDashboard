import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { BarData } from "../../types/chart";

const barData: BarData[] = [
  { name: "Team A", members: 10, active: 8 },
  { name: "Team B", members: 15, active: 12 },
  { name: "Team C", members: 8, active: 6 },
  { name: "Team D", members: 12, active: 9 }
];

const BarChartComponent: React.FC = () => (
    <ResponsiveContainer width="50%" height={300}>
        <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="members" fill="#4A90E2" barSize={50} />
            <Bar dataKey="active" fill="#FF7043" barSize={50} />
        </BarChart>
        <p style={{ textAlign: "center", padding: 7 }}>
            Bar Chart: Total number of members and active members in the teams
        </p>
    </ResponsiveContainer>
);

export default BarChartComponent;