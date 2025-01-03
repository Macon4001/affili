import React from 'react';
import '../../styles/AffiliateDashboard_styles/PaymentHistory.css'

interface PaymentProps{
    date:string;
    amount:string;
}

const PaymentHistory: React.FC = () => {
  const payments: PaymentProps[] = [
    { date: "01/12/2024", amount: "$200" },
    { date: "15/12/2024", amount: "$300" },
    { date: "28/12/2024", amount: "$150" },
  ];

  return (
    <section className="payment-history">
      <h3>Payment History</h3>
      <ul>
        {payments.map((payment, index) => (
          <li key={index}>
            <span>{payment.date}</span>
            <span>{payment.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PaymentHistory;
