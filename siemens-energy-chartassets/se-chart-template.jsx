import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2021', involvement: 4467.38, deals: 12 },
  { year: '2022', involvement: 1268.12, deals: 7 },
  { year: '2023', involvement: 5601.85, deals: 14 },
  { year: '2024', involvement: 3067.31, deals: 11 },
  { year: '2025', involvement: 5249.30, deals: 5 },
];

export default function SEInvolvementChart() {
  return (
    <div className="w-full bg-white p-6" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div className="bg-[#1B1534] text-white px-4 py-3 mb-0 rounded-t-lg">
        <h2 className="text-xl font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>SE Involvement in ECA-backed Project Finance</h2>
      </div>
      
      {/* Chart Container */}
      <div className="border border-gray-200 border-t-0 p-4">
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 60, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
            
            {/* Left Y-Axis for Involvement (USDm) */}
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(value) => value.toLocaleString()}
              domain={[0, 6000]}
              ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 14, fontFamily: 'Arial, sans-serif' }}
            />
            
            {/* Right Y-Axis for Number of Deals */}
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 16]}
              ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 14, fontFamily: 'Arial, sans-serif' }}
            />
            
            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 14, fontFamily: 'Arial, sans-serif' }}
            />
            
            <Tooltip
              formatter={(value, name) => {
                if (name === 'All Banks\' Involvement') return [`$${value.toLocaleString()}m`, name];
                return [value, name];
              }}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '10px',
                fontFamily: 'Arial, sans-serif'
              }}
            />
            
            {/* Bar for Total Involvement */}
            <Bar
              yAxisId="left"
              dataKey="involvement"
              name="All Banks' Involvement"
              fill="#4D217A"
              radius={[0, 0, 0, 0]}
              barSize={60}
            />
            
            {/* Line for Number of Deals */}
            <Line
              yAxisId="right"
              type="linear"
              dataKey="deals"
              name="No of deals"
              stroke="#F6E600"
              strokeWidth={3}
              dot={{ fill: '#F6E600', stroke: '#333', strokeWidth: 1, r: 5 }}
              activeDot={{ r: 7 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
        
        {/* Legend row with axis labels on sides */}
        <div className="flex items-center px-2 mt-2">
          <span className="text-base font-medium text-gray-600 w-14">USDm</span>
          <div className="flex-1 flex justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4" style={{ backgroundColor: '#4D217A' }}></div>
              <span className="text-base text-gray-700">All Banks' Involvement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex items-center">
                <div className="w-6 h-0.5" style={{ backgroundColor: '#F6E600' }}></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#F6E600', border: '1px solid #333' }}></div>
              </div>
              <span className="text-base text-gray-700">No of deals</span>
            </div>
          </div>
          <span className="text-base font-medium text-gray-600 mr-8">Deals</span>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 rounded-b-lg border border-t-0 border-gray-200" style={{ fontFamily: 'Arial, sans-serif' }}>
        Source: Internal SE Data | Note: All banks' involvement includes both ECA-covered and uncovered tranches per deal
      </div>
    </div>
  );
}
```

---

**After pasting:**

1. Click **"Commit changes..."**
2. Click **"Commit changes"** again in the popup

---

**Once done**, your repository should look like this:
```
claude-skills/
├── README.md
└── siemens-energy-charts/
    ├── SKILL.md
    └── assets/
        └── se-chart-template.jsx
