---
name: siemens-energy-charts
description: Create charts and graphs following Siemens Energy PowerPoint/presentation style guidelines. Use this skill whenever the user asks for a Siemens Energy chart, SE chart, SE-style graph, Siemens Energy presentation graph, or any chart using SE brand colors. Also trigger when the user mentions "SE purple", "Siemens Energy colors", or wants a chart matching their corporate style.
---

# Siemens Energy Chart Style Guide

Use this skill to create charts that conform to Siemens Energy's visual identity for presentations and reports.

## Brand Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| SE Purple | `#4D217A` | Primary color for bars, main data series |
| SE Yellow | `#F6E600` | Secondary color for lines, secondary data series |
| SE Dark Purple | `#1B1534` | Headers, titles, dark backgrounds |
| Gray | `#666666` | Axis labels, tick marks |
| Light Gray | `#e0e0e0` | Grid lines |

## Typography

- **Font Family**: Arial, sans-serif (use throughout)
- **Header**: text-xl (1.25rem), font-semibold, white on dark purple background
- **Axis Ticks**: fontSize 14
- **Legend/Labels**: text-base (1rem)
- **Footer/Source**: text-sm (0.875rem)

## Chart Structure
```
┌─────────────────────────────────────────┐
│  Header (dark purple #1B1534 bg)        │  ← rounded-t-lg
├─────────────────────────────────────────┤
│                                         │
│           Chart Area                    │  ← border, no top border
│                                         │
│  USDm    [Legend items]         Deals   │  ← axis labels inline with legend
├─────────────────────────────────────────┤
│  Source: ... | Note: ...                │  ← gray bg, rounded-b-lg
└─────────────────────────────────────────┘
```

## React/Recharts Implementation

### Imports
```jsx
import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
```

### Container Styling
```jsx
<div className="w-full bg-white p-6" style={{ fontFamily: 'Arial, sans-serif' }}>
```

### Header
```jsx
<div className="bg-[#1B1534] text-white px-4 py-3 mb-0 rounded-t-lg">
  <h2 className="text-xl font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>
    Chart Title Here
  </h2>
</div>
```

### Chart Container
```jsx
<div className="border border-gray-200 border-t-0 p-4">
  <ResponsiveContainer width="100%" height={350}>
    <ComposedChart data={data} margin={{ top: 20, right: 60, left: 20, bottom: 20 }}>
      ...
    </ComposedChart>
  </ResponsiveContainer>
</div>
```

### Grid Lines
```jsx
<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
```

### Axis Styling
```jsx
<YAxis
  yAxisId="left"
  orientation="left"
  tickFormatter={(value) => value.toLocaleString()}
  axisLine={false}
  tickLine={false}
  tick={{ fill: '#666', fontSize: 14, fontFamily: 'Arial, sans-serif' }}
/>
```

### Bar (Primary Data - Purple)
```jsx
<Bar
  yAxisId="left"
  dataKey="value"
  name="Label"
  fill="#4D217A"
  radius={[0, 0, 0, 0]}
  barSize={60}
/>
```

### Line (Secondary Data - Yellow)
```jsx
<Line
  yAxisId="right"
  type="linear"
  dataKey="count"
  name="No of deals"
  stroke="#F6E600"
  strokeWidth={3}
  dot={{ fill: '#F6E600', stroke: '#333', strokeWidth: 1, r: 5 }}
  activeDot={{ r: 7 }}
/>
```

### Custom Legend Row (with axis labels)
Place axis labels (e.g., "USDm", "Deals") on the sides, legend items centered:
```jsx
<div className="flex items-center px-2 mt-2">
  <span className="text-base font-medium text-gray-600 w-14">USDm</span>
  <div className="flex-1 flex justify-center items-center gap-6">
    {/* Bar legend */}
    <div className="flex items-center gap-2">
      <div className="w-4 h-4" style={{ backgroundColor: '#4D217A' }}></div>
      <span className="text-base text-gray-700">Bar Label</span>
    </div>
    {/* Line legend with dot */}
    <div className="flex items-center gap-2">
      <div className="relative flex items-center">
        <div className="w-6 h-0.5" style={{ backgroundColor: '#F6E600' }}></div>
        <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" 
             style={{ backgroundColor: '#F6E600', border: '1px solid #333' }}></div>
      </div>
      <span className="text-base text-gray-700">Line Label</span>
    </div>
  </div>
  <span className="text-base font-medium text-gray-600 mr-8">Deals</span>
</div>
```

### Footer
```jsx
<div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 rounded-b-lg border border-t-0 border-gray-200" 
     style={{ fontFamily: 'Arial, sans-serif' }}>
  Source: Internal SE Data | Note: Additional context here
</div>
```

## Complete Example Template

See `assets/se-chart-template.jsx` for a complete working example.

## Key Design Principles

1. **No axis lines or tick lines** - cleaner look
2. **Horizontal grid lines only** - `vertical={false}`
3. **Rounded corners** on header and footer only
4. **Consistent border** around chart area
5. **Legend inline with axis labels** - not using Recharts' built-in Legend
6. **Line markers** should have dark stroke for visibility against light backgrounds
```

4. Click the green **"Commit changes..."** button

5. In the popup, click **"Commit changes"** again

---

## Step 2: Upload the template file

1. Back on your repository page, click into the **`siemens-energy-charts`** folder

2. Click **"Add file"** → **"Create new file"**

3. In the **"Name your file..."** box, type:
```
   assets/se-chart-template.jsx
