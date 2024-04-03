import React from "react";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userName = params.get("name");
  return (
    <>
      <h1>Succesfully Logged In</h1>
      <h3>Hello {userName}</h3>
    </>
  );
};

export default Dashboard;
