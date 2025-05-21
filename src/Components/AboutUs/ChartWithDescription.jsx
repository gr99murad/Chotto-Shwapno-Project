import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { year: '2015', value: 5000 },
  { year: '2016', value: 8000 },
  { year: '2017', value: 15000 },
  { year: '2018', value: 30000 },
  { year: '2019', value: 45000 },
  { year: '2020', value: 20000 },
  { year: '2021', value: 15000 },
  { year: '2022', value: 25000 },
  { year: '2023', value: 40000 },
  { year: '2024', value: 55000 },
];

const ChartWithDescription = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-[#fff9f7] to-[#fef3f2] p-8">
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C24C2E" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#C24C2E" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(val) => `${val / 1000}k`} />
            <CartesianGrid stroke="#e0a394" strokeDasharray="5 5" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#C24C2E"
              fillOpacity={1}
              fill="url(#colorValue)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 text-sm text-gray-700 leading-relaxed max-w-5xl mx-auto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="mt-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="mt-2">
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.
        </p>
        <p className="mt-2">
          Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.
        </p>
        <p className="mt-2">
          Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed.
        </p>
      </div>
    </div>
  );
};

export default ChartWithDescription;
