import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <button><Link to="/dashboard/text1">Text1</Link></button>
      <button><Link to="/dashboard/text2">Text2</Link></button>
      <button><Link to="/dashboard/text3">Text3</Link></button>
    </div>
  );
};

export default Dashboard;
