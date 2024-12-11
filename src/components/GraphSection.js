import React, { useState, useEffect } from 'react';
import '../styles/GraphSection.css';
import data from '../data/fakerevenuedata';

const GraphSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [maxRevenue, setMaxRevenue] = useState(0);
  const [maxEarnings, setMaxEarnings] = useState(0);

  useEffect(() => {
    const maxRev = Math.max(...data.map((point) => point.revenue));
    const maxEarn = Math.max(...data.map((point) => point.earnings));
    setMaxRevenue(maxRev);
    setMaxEarnings(maxEarn);
  }, []);

  const width = 1000;
  const height = 400;
  const padding = 50;

  const xScale = (index) => ((index / (data.length - 1)) * (width - 2 * padding)) + padding;
  const yScale = (value) => height - padding - ((value / Math.max(maxRevenue, maxEarnings)) * (height - 2 * padding));

  const getPathPoints = (field) => {
    const points = data.map((point, index) => ({
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

  return (
    <div className="graph-section">
      <header className="graph-header">
        <h2>Revenue and Earnings Overview</h2>
      </header>
      <div className="line-chart-container">
      <svg className="line-chart" viewBox={`0 0 ${width} ${height}`}>
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
              points={getPathPoints('revenue', hoveredIndex === null ? data.length - 1 : hoveredIndex)}
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
              points={getPathPoints('earnings', hoveredIndex === null ? data.length - 1 : hoveredIndex)}
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
          
            {/* Dots */}
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



 {/* Hover Tooltip */}
 {hoveredIndex !== null && (
          <div
            className="line-tooltip"
            style={{
              left: `${100 + hoveredIndex * 150}px`,
              top: `${350 - (data[hoveredIndex].revenue / 2000) * 60 - 50}px`,
            }}
          >
            <div className="tooltip-section">
              {/* Date and Cumulative Revenue */}
              <div className="tooltip-left">
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{data[hoveredIndex].date}</p>
                <p style={{ color: '#fff', fontWeight: 'bold', margin: 0 }}>
                  +$
                  {data
                    .slice(0, hoveredIndex + 1)
                    .reduce((total, point) => total + point.revenue, 0)}
                </p>
              </div>
              {/* Revenue and Earnings */}
              <div className="tooltip-right">
                <div
                  style={{
                    borderLeft: `2px solid #1a98ff`,
                    paddingLeft: '8px',
                    marginBottom: '5px',
                  }}
                >
                  <p style={{ color: '#1a98ff', fontWeight: 'bold', margin: 0 }}>
                    +${data[hoveredIndex].revenue}
                  </p>
                </div>
                <div
                  style={{
                    borderLeft: `2px solid #50ccff`,
                    paddingLeft: '8px',
                  }}
                >
                  <p style={{ color: '#50ccff', fontWeight: 'bold', margin: 0 }}>
                    +${data[hoveredIndex].earnings}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


            {/* Summary */}
            <div className="graph-summary">
        <p2 className="date-range">January 1, 2024 - December 31, 2024</p2>
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


  );
};

export default GraphSection;
