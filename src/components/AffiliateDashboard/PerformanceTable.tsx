import React, { useState } from "react";
import originalData from "../../data/fakerevenuedata";
import "../../styles/AffiliateDashboard_styles/PerformanceTable.css";

interface AssignedBy {
  name: string;
  image: string;
}

interface TransformedData {
  product: string;
  revenue: string;
  clicks: number;
  conversions: number;
  image: string;
  assignedBy: AssignedBy;
}
// Transform data
const transformedData: TransformedData[] = originalData.map((item, index) => ({
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

const PerformanceTable: React.FC = () => {
  // State to toggle between 4 rows and full table
  const [showAll, setShowAll] = useState(false);

  // Determine which data to display
  const visibleData = showAll ? transformedData : transformedData.slice(0, 4);

  return (
    <section className="performance-section">
      <h2>Performance Table</h2>
      <div className="performance-table-container">
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
            {visibleData.map((row, index) => (
              <tr key={index}>
                <td>
                  <div className="product-info">
                    <img
                      src={row.image}
                      alt={row.product}
                      className="product-image"
                    />
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
      </div>

      {/* Toggle Button */}
      <button
        className="toggle-button"
        onClick={() => setShowAll((prevShowAll) => !prevShowAll)}
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default PerformanceTable;
