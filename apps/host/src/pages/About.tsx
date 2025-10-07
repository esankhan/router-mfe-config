import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h2>Host App - About Page</h2>
      <p>This host application demonstrates module federation with React 18 and React Router 7.9.1.</p>
      <p>It integrates with three remote applications:</p>
      <ul>
        <li>Remote 1 - Running on port 3001</li>
        <li>Remote 2 - Running on port 3002</li>
        <li>Remote 3 - Running on port 3003</li>
      </ul>
    </div>
  );
};

export default About;