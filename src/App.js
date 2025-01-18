import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import SubDashboard from './SubDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/text1" element={<SubDashboard title="Text1 Dashboard" />} />
        <Route path="/dashboard/text2" element={<SubDashboard title="Text2 Dashboard" />} />
        <Route path="/dashboard/text3" element={<SubDashboard title="Text3 Dashboard" />} />
        <Route path="/dashboard/:dashboardName/:file" element={<CardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
