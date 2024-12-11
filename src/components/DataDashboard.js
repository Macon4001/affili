import React from "react";
import originalData from '../data/fakerevenuedata';
import '../styles/DataDashboard.css';

const transformedData = originalData.map((item, index) => ({
  product: `Product ${index + 1}`, // Placeholder product names
  revenue: `$${item.revenue.toLocaleString()}`, // Format revenue
  clicks: Math.floor(Math.random() * 1000) + 500, // Random clicks
  conversions: Math.floor(Math.random() * 200) + 50, // Random conversions
  image: "https://via.placeholder.com/40", // Placeholder product image
  assignedBy: {
    name: `Assignee ${index + 1}`, // Placeholder names
    image: "https://via.placeholder.com/40", // Placeholder assignee image
  },
}));


const PerformanceTable = () => {
  return (
    <section className="performance-section">
      <h2>Performance Table</h2>
      <table className="performance-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Revenue</th>
            <th>Clicks</th>
            <th>Conversions</th>
            <th>Assigned By</th>
          </tr>
        </thead>
        <tbody>
          {transformedData.map((row, index) => (
            <tr key={index}>
              <td>
                <div className="product-info">
                  <img src={row.image} alt={row.product} className="product-image" />
                  <span>{row.product}</span>
                </div>
              </td>
              <td>{row.revenue}</td>
              <td>{row.clicks}</td>
              <td>{row.conversions}</td>
              <td>
                <div className="assigned-info">
                  <img
                    src={row.assignedBy.image}
                    alt={row.assignedBy.name}
                    className="assigned-image"
                  />
                  <span>{row.assignedBy.name}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PerformanceTable;
