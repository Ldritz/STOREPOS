import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

declare var Chart: any;

interface BarChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
        borderRadius: number;
    }[];
}

interface TopProductsBarChartProps {
    data: BarChartData;
    title: string;
    tooltip?: string;
}

const TopProductsBarChart: React.FC<TopProductsBarChartProps> = ({ data, title, tooltip }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<any>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (chartRef.current) {
            const isDark = theme === 'dark';
            const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
            const textColor = isDark ? '#cbd5e1' : '#475569';

            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'bar',
                    data: data,
                    options: {
                        indexAxis: 'y',
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false,
                            },
                            title: {
                                display: false,
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context: any) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.x !== null) {
                                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(context.parsed.x);
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                beginAtZero: true,
                                grid: {
                                    color: gridColor,
                                    drawBorder: false,
                                },
                                ticks: {
                                    color: textColor,
                                    font: { size: 12 },
                                    callback: function (value: number | string) {
                                        if (typeof value === 'number' && value >= 1000) {
                                            return '₱' + (value / 1000) + 'k';
                                        }
                                        return '₱' + value;
                                    }
                                }
                            },
                            y: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    color: textColor,
                                    font: { size: 12 },
                                    callback: function (value: number | string) {
                                        const label = this.getLabelForValue(Number(value));
                                        if (label.length > 20) {
                                            return label.substring(0, 20) + '...';
                                        }
                                        return label;
                                    }
                                }
                            }
                        }
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

    return (
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 h-96 flex flex-col" title={tooltip}>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">{title}</h3>
            {data.labels.length > 0 ? (
                <div className="relative flex-grow">
                    <canvas ref={chartRef}></canvas>
                </div>
            ) : (
                <div className="flex-grow flex items-center justify-center text-slate-400 dark:text-slate-500 text-center px-4">
                    Not enough sales data to display top products.
                </div>
            )}
        </div>
    );
};

export default TopProductsBarChart;