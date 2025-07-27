import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Card from './Card';

// Error Boundary for Chart Components
class ChartErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Chart Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-72 md:h-80 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-sm text-muted-foreground">Chart could not load</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Monthly Performance Line Chart Component
interface ChartData { 
  name: string; 
  income: number; 
  expense: number; 
}

export const IncomeExpenseChart: React.FC<{ data: ChartData[] }> = ({ data }) => {
  const formatYAxis = (tick: number) => `₱${tick.toLocaleString()}`;
  
  return (
    <ChartErrorBoundary>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--warning))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--warning))" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12} 
            tickFormatter={formatYAxis}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            cursor={{ stroke: 'hsl(var(--accent))', strokeWidth: 1, strokeDasharray: '5 5' }}
            contentStyle={{
              backgroundColor: 'hsl(var(--popover))',
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.5rem',
              color: 'hsl(var(--popover-foreground))',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            labelStyle={{ fontWeight: 'bold' }}
            formatter={(value: number, name: string) => [
              `₱${value.toLocaleString()}`, 
              name === 'income' ? 'Income' : 'Expense'
            ]}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            iconType="circle"
          />
          <Line 
            type="monotone" 
            dataKey="income" 
            stroke="hsl(var(--success))" 
            strokeWidth={3}
            name="Income"
            dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4, stroke: 'hsl(var(--background))' }}
            activeDot={{ r: 6, stroke: 'hsl(var(--success))', strokeWidth: 2, fill: 'hsl(var(--success))' }}
            connectNulls={true}
          />
          <Line 
            type="monotone" 
            dataKey="expense" 
            stroke="hsl(var(--warning))" 
            strokeWidth={3}
            name="Expense"
            dot={{ fill: 'hsl(var(--warning))', strokeWidth: 2, r: 4, stroke: 'hsl(var(--background))' }}
            activeDot={{ r: 6, stroke: 'hsl(var(--warning))', strokeWidth: 2, fill: 'hsl(var(--warning))' }}
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartErrorBoundary>
  );
};

// Top Products Chart Component
interface TopProductsChartProps {
  data: { name: string; revenue: number }[];
}

export const TopProductsChart: React.FC<TopProductsChartProps> = ({ data }) => {
  const formatCurrency = (value: number) => `₱${value.toLocaleString()}`;
  
  return (
    <ChartErrorBoundary>
      <Card title="Top 5 Products by Revenue">
        <div className="w-full h-72">
          {data.length > 0 ? (
            <ResponsiveContainer>
              <BarChart layout="vertical" data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={formatCurrency} />
                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  width={100}
                  tickFormatter={(value: string) => value.length > 12 ? `${value.substring(0, 12)}...` : value}
                  tick={{ textAnchor: 'end' }}
                />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--accent))' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: '0.5rem',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                  formatter={(value: number) => formatCurrency(value)}
                />
                <Bar dataKey="revenue" name="Revenue" fill="hsl(var(--info))" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground text-center">
              <div>
                <p className="font-semibold">No sales data available.</p>
                <p className="text-sm">Sell some products to see top performers!</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </ChartErrorBoundary>
  );
};

export default {
  IncomeExpenseChart,
  TopProductsChart
};