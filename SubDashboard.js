import React from 'react';

const SubDashboard = ({ title }) => {
  return (
    <div className="subdashboard-container">
      <h1>{title}</h1>
      <div className="cards">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>
    </div>
  );
};

export default SubDashboard;
