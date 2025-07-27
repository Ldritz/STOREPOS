import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

// Income Expense Chart Component
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
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={formatYAxis} />
          <Tooltip
            cursor={{ fill: 'hsl(var(--accent))' }}
            contentStyle={{
              backgroundColor: 'hsl(var(--popover))',
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.5rem',
              color: 'hsl(var(--popover-foreground))'
            }}
             labelStyle={{ fontWeight: 'bold' }}
          />
          <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }}/>
          <Bar dataKey="income" fill="hsl(var(--success))" name="Income" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" fill="hsl(var(--warning))" name="Expense" radius={[4, 4, 0, 0]} />
        </BarChart>
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