import React, { useState, useEffect } from 'react';
import '../styles/GraphSection.css';
import data from '../data/fakerevenuedata';

interface DataPoint {
    date: string;
    revenue: number;
    earnings: number;
}

const GraphSection: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [maxRevenue, setMaxRevenue] = useState<number>(0);
    const [maxEarnings, setMaxEarnings] = useState<number>(0);

    // State for tracking closest data point
    const [closestIndex, setClosestIndex] = useState<number | null>(null);

    useEffect(() => {
        const maxRev = Math.max(...data.map((point: DataPoint) => point.revenue));
        const maxEarn = Math.max(...data.map((point: DataPoint) => point.earnings));
        setMaxRevenue(maxRev);
        setMaxEarnings(maxEarn);
    }, []);

    const width = 1000;
    const height = 400;
    const padding = 50;

    const xScale = (index: number): number => ((index / (data.length - 1)) * (width - 2 * padding)) + padding;
    const yScale = (value: number): number => height - padding - ((value / Math.max(maxRevenue, maxEarnings)) * (height - 2 * padding));

    const getPathPoints = (field: 'revenue' | 'earnings', hoveredIndex: number | null): string => {
        const points = data.map((point: DataPoint, index: number) => ({
            x: xScale(index),
            y: yScale(point[field]),
        }));

        if (hoveredIndex !== null) {
            const hoveredPoints = points.slice(0, hoveredIndex + 1);
            return [
                { x: points[0].x, y: height - padding }, // Start at baseline
                ...hoveredPoints,
                { x: hoveredPoints[hoveredPoints.length - 1].x, y: height - padding }, // Close at baseline
            ]
                .map((p) => `${p.x},${p.y}`)
                .join(' ');
        }

        return '';
    };

    // Handler for mouse movement over the chart
    const handleMouseMove = (event: React.MouseEvent) => {
        // Get the bounding rectangle of the chart container
        const bounds = event.currentTarget.getBoundingClientRect();
        // Calculate mouse X position relative to the chart (not the page)
        const mouseXPosition = event.clientX - bounds.left;

        // Initialize variables for finding closest point
        let minDist = Infinity;
        let closest = null;

        // Loop through each data point to find the closest one to mouse position
        data.forEach((_, index) => {
            // Get the x-coordinate of current data point
            const pointX = xScale(index);
            // Calculate distance between mouse and this point
            const dist = Math.abs(mouseXPosition - pointX);

            // If this point is closer than previous closest, update it
            if (dist < minDist) {
                minDist = dist;
                closest = index;
            }
        });

        // Update state with the index of closest point
        setClosestIndex(closest);
    };

    return (
        <div className="graph-section">
            <header className="graph-header">
                <h2>Revenue and Earnings Overview</h2>
            </header>
            <div className="line-chart-container">
                <svg
                    className="line-chart"
                    viewBox={`0 0 ${width} ${height}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setClosestIndex(null)} // Reset closest point when mouse leaves
                >
                    {/* Axes */}
                    <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#ccc" />
                    <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#ccc" />

                    {/* Define Gradients */}
                    <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(26, 152, 255, 0.7)" />
                            <stop offset="100%" stopColor="rgba(26, 152, 255, 0)" />
                        </linearGradient>
                        <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(80, 204, 255, 0.7)" />
                            <stop offset="100%" stopColor="rgba(80, 204, 255, 0)" />
                        </linearGradient>
                    </defs>

                    {/* Filled Area for Revenue */}
                    <polygon
                        points={getPathPoints('revenue', hoveredIndex)}
                        fill="url(#revenueGradient)"
                    />

                    {/* Revenue Line */}
                    <polyline
                        points={data.map((point, index) => `${xScale(index)},${yScale(point.revenue)}`).join(' ')}
                        stroke="#1a98ff"
                        fill="none"
                        strokeWidth="2"
                    />

                    {/* Filled Area for Earnings */}
                    <polygon
                        points={getPathPoints('earnings', hoveredIndex)}
                        fill="url(#earningsGradient)"
                    />

                    {/* Earnings Line */}
                    <polyline
                        points={data.map((point, index) => `${xScale(index)},${yScale(point.earnings)}`).join(' ')}
                        stroke="#50ccff"
                        fill="none"
                        strokeWidth="2"
                    />

                    {/* X-axis Labels */}
                    <text
                        key="start-date"
                        x={xScale(0)} // First date
                        y={height - padding + 20}
                        textAnchor="middle"
                        fontSize="12"
                        fill="#333"
                    >
                        {data[0].date}
                    </text>
                    <text
                        key="end-date"
                        x={xScale(data.length - 1)} // Last date
                        y={height - padding + 20}
                        textAnchor="middle"
                        fontSize="12"
                        fill="#333"
                    >
                        {data[data.length - 1].date}
                    </text>

                    {/* X-axis Ticks */}
                    {Array.from({ length: data.length }).map((_, index) => (
                        <line
                            key={`tick-${index}`}
                            x1={xScale(index)}
                            y1={height - padding}
                            x2={xScale(index)}
                            y2={height - padding - 5} // Short line above axis
                            stroke="#ccc"
                        />
                    ))}

                    {/* Hovered Date Label */}
                    {hoveredIndex !== null && (
                        <text
                            key="hovered-date"
                            x={xScale(hoveredIndex)} // Position for the hovered index
                            y={height - padding + 20}
                            textAnchor="middle"
                            fontSize="12"
                            fill="#1a98ff" // Highlight color for the hovered date
                        >
                            {data[hoveredIndex].date}
                        </text>
                    )}

                    {/* Y-axis Labels */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <text
                            key={i}
                            x={padding - 10}
                            y={yScale((i / 4) * Math.max(maxRevenue, maxEarnings))}
                            textAnchor="end"
                            fontSize="12"
                            fill="#333"
                        >
                            ${Math.round((i / 4) * Math.max(maxRevenue, maxEarnings))}
                        </text>
                    ))}

                    {/* Dots for Revenue */}
                    {data.map((point, index) => (
                        <circle
                            key={`dot-revenue-${index}`}
                            cx={xScale(index)}
                            cy={yScale(point.revenue)}
                            r="5"
                            fill="#1a98ff"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    ))}

                    {/* Dots for Earnings */}
                    {data.map((point, index) => (
                        <circle
                            key={`dot-earnings-${index}`}
                            cx={xScale(index)}
                            cy={yScale(point.earnings)}
                            r="5"
                            fill="#50ccff"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    ))}
                </svg>

                {/* Tooltip that follows mouse position */}
                {closestIndex !== null && (
                    <div
                        className="line-tooltip"
                        style={{
                            left: `${xScale(closestIndex)}px`, // Position tooltip at closest point's x coordinate
                            top: `${yScale(data[closestIndex].revenue)}px`, // Position at revenue value height
                            transform: "translate(-50%, -120%)", // Center tooltip and offset upwards
                        }}
                    >
                        <div className="tooltip-section">
                            {/* Left side of tooltip showing date and revenue */}
                            <div className="tooltip-left">
                                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                                    {data[closestIndex].date}
                                </p>
                                <p style={{ color: "#fff", fontWeight: "bold", margin: 0 }}>
                                    +${data[closestIndex].revenue}
                                </p>
                            </div>
                            {/* Right side of tooltip showing earnings */}
                            <div className="tooltip-right">
                                <p style={{ color: "#50ccff", fontWeight: "bold", margin: 0 }}>
                                    +${data[closestIndex].earnings}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Summary */}
                <div className="graph-summary">
                    <p className="date-range">January 1, 2024 - December 31, 2024</p>
                    <div className="widgets">
                        <div className="widget">
                            <p className="widget-title">Total Sales</p>
                            <p className="widget-value">2,340</p>
                        </div>
                        <div className="widget">
                            <p className="widget-title">Total Revenue</p>
                            <p className="widget-value">$85,000</p>
                        </div>
                        <div className="widget">
                            <p className="widget-title">Total Earnings</p>
                            <p className="widget-value">$25,500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphSection;
