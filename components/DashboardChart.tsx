import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

// Let TypeScript know Chart is globally available from the CDN script
declare var Chart: any;

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: (number | null)[];
        borderColor: string;
        backgroundColor: string;
        tension?: number;
        borderWidth: number;
    }[];
}

interface DashboardChartProps {
    data: ChartData;
    yMax: number;
    tooltip?: string;
}

const DashboardChart: React.FC<DashboardChartProps> = ({ data, yMax, tooltip }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<any>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (chartRef.current) {
            const isDark = theme === 'dark';
            const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : '#e5e7eb'; // slate-200 for light
            const textColor = isDark ? '#cbd5e1' : '#475569'; // slate-300 for dark, slate-600 for light

            // Destroy the previous chart instance if it exists
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: {
                            intersect: false,
                            mode: 'index',
                        },
                        plugins: {
                            legend: {
                                position: 'bottom',
                                align: 'center',
                                labels: {
                                  usePointStyle: true,
                                  boxWidth: 8,
                                  padding: 20,
                                  color: textColor,
                                  font: {
                                      size: 14
                                  }
                                },
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context: any) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.y !== null) {
                                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(context.parsed.y);
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: false,
                                },
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    font: { size: 14 },
                                    color: textColor
                                }
                            },
                            y: {
                                beginAtZero: true,
                                max: yMax,
                                ticks: {
                                    font: { size: 14 },
                                    color: textColor,
                                    callback: function (value: number) {
                                        return '₱' + value.toLocaleString('en-US');
                                    }
                                },
                                grid: {
                                  color: gridColor,
                                  drawBorder: false,
                                }
                            }
                        }
                    }
                });
            }
        }
        
        // Cleanup function to destroy chart instance
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [data, yMax, theme]);

    return (
        <div className="relative h-96 w-full bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg" title={tooltip}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default DashboardChart;