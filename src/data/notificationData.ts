interface NotificationData {
    id: number;
    header: string;
    text: string;
    time:string;
    isNew: boolean;

}

const notificationsData: NotificationData [] = [
    {
      id: 1,
      header: "Payout Processed",
      text: "Your latest payout of $300 has been successfully processed.",
      time: "2h ago",
      isNew: true,
    },
    {
      id: 2,
      header: "Conversion Goal Achieved",
      text: "You’ve reached 80% of your conversion goal for this month.",
      time: "1d ago",
      isNew: false,
    },
    {
      id: 3,
      header: "New Offer Available",
      text: "A new promotional offer is now available in your dashboard.",
      time: "5h ago",
      isNew: true,
    },
  ];
  
  export default notificationsData;
  