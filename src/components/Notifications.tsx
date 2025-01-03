import React, { useState } from "react";
import notificationsData from "../data/notificationData";
import "../styles/Notifications.css";

// Define the type for each notification object
interface Notification {
  id: number;
  header: string;
  text: string;
  time: string;
  isNew: boolean;
}

const Notifications: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState<boolean>(
      notificationsData.some((notification: Notification) => notification.isNew)
  );

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    setHasUnreadNotifications(false); // Mark notifications as read
  };

  return (
      <div className="notifications-container">
        <div className="notification-bell" onClick={toggleNotifications}>
          <img
              src={`${process.env.PUBLIC_URL}/Bell.png`}
              alt="Notifications"
              className="icon bell-icon"
          />
          {hasUnreadNotifications && <span className="notification-dot"></span>}
        </div>

        {showNotifications && (
            <div className="notifications-dropdown">
              <h3>Notifications</h3>
              <ul>
                {notificationsData.map((notification: Notification) => (
                    <li key={notification.id} className={notification.isNew ? "new" : ""}>
                      <div className="header">{notification.header}</div>
                      <div className="secondary-text">{notification.text}</div>
                      <div className="time">{notification.time}</div>
                    </li>
                ))}
              </ul>
            </div>
        )}
      </div>
  );
};

export default Notifications;
