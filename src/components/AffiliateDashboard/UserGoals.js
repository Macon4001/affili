import React from "react";
import '../../styles/AffiliateDashboard_styles/UserGoals.css'

const UserGoals = () => {
  const goals = [
    "Increase sales by 20% next quarter",
    "Enhance website performance",
    "Engage more users with personalized campaigns",
  ];

  return (
    <section className="user-goals">
      <h3>Your Goals</h3>
      {goals.map((goal, index) => (
        <p key={index}>
          <span>•</span> {goal}
        </p>
      ))}
    </section>
  );
};

export default UserGoals;
