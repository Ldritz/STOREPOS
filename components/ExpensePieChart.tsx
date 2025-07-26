import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

declare var Chart: any;

interface PieChartData {
    labels: string[];
    datasets: {
        data: number[];
        backgroundColor: string[];
        borderWidth: number;
    }[];
}

interface ExpensePieChartProps {
    data: PieChartData;
    title: string;
    tooltip?: string;
}

const ExpensePieChart: React.FC<ExpensePieChartProps> = ({ data, title, tooltip }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<any>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (chartRef.current) {
            const isDark = theme === 'dark';
            const textColor = isDark ? '#cbd5e1' : '#475569';
            
            const chartData = {
                ...data,
                datasets: data.datasets.map(ds => ({
                    ...ds,
                    borderColor: isDark ? '#1e293b' : '#ffffff',
                }))
            };

            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: chartData,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    color: textColor,
                                    font: { size: 12 },
                                    padding: 15,
                                    boxWidth: 12,
                                }
                            },
                            title: {
                                display: false,
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context: any) {
                                        let label = context.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed !== null) {
                                            const total = context.chart.getDatasetMeta(0).total;
                                            const percentage = total > 0 ? ((context.parsed / total) * 100).toFixed(1) + '%' : '0%';
                                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(context.parsed) + ` (${percentage})`;
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        cutout: '60%',
                    }
                });
            }
        }
        
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [data, theme]);

    const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);

    return (
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 h-96 flex flex-col" title={tooltip}>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">{title}</h3>
            {total > 0 ? (
                <div className="relative flex-grow">
                    <canvas ref={chartRef}></canvas>
                </div>
            ) : (
                <div className="flex-grow flex items-center justify-center text-slate-400 dark:text-slate-500">
                    No expense data to display.
                </div>
            )}
        </div>
    );
};

export default ExpensePieChart;