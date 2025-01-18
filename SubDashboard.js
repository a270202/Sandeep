import React from 'react';
import { Link } from 'react-router-dom';

const SubDashboard = ({ title }) => {
  const links = [
    { text: 'Open File 1', file: 'file1.html' },
    { text: 'Open File 2', file: 'file2.html' },
    { text: 'Open File 3', file: 'file3.html' },
  ];

  return (
    <div className="subdashboard-container">
      <h1>{title}</h1>
      <div className="cards">
        {links.map((link, index) => (
          <Link key={index} to={`/dashboard/${title.toLowerCase()}/${link.file}`}>
            <button>{link.text}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubDashboard;
