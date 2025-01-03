// data/mockuserdata.js

interface UserData{
    name: string;
    email: string;
    password?: string;
    profilePicture: string;
    totalEarnings: string;
    totalConversions: number;
    totalClicks: number;
    pendingPayouts: string;
}

const mockUserData: UserData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    profilePicture: "/profile.jpg.png",
    totalEarnings: "$12,340",
    totalConversions: 150,
    totalClicks: 3450,
    pendingPayouts: "$450",
  };
  
  export default mockUserData;
  