import React, { useEffect, useState } from 'react';

const CardPage = ({ file }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch(`/src/html/${file}`)
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error('Error loading HTML file:', error));
  }, [file]);

  return (
    <div
      className="card-page-container"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default CardPage;
