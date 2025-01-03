import React from "react";
import '../../styles/AffiliateMarketplace_styles/ActiveLinks.css';

// Define the type for each link object
interface Link {
    id: number;
    productName: string;
    url: string;
    clicks: number;
    conversions: number;
    revenue: number;
}

// Define the prop types for the component
interface ActiveLinksProps {
    links: Link[];
}


const ActiveLinks: React.FC<ActiveLinksProps> = ({ links }) => {
    return (
        <section className="active-links-section">
            <h2>Active Links</h2>
            <div className="active-links-table-container">
                <table className="active-links-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Affiliate Link</th>
                            <th>Clicks</th>
                            <th>Conversions</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {links.length > 0 ? (
                            links.map((link) => (
                                <tr key={link.id}>
                                    <td>{link.productName}</td>
                                    <td>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.url}
                                        </a>
                                    </td>
                                    <td>{link.clicks}</td>
                                    <td>{link.conversions}</td>
                                    <td>${link.revenue.toFixed(2)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5}>No active links yet. Generate links to start promoting products!</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ActiveLinks;
