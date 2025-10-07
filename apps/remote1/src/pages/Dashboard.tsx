import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h3>Remote 1 - Dashboard</h3>
      <p>This is the dashboard page from Remote 1 application.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <h4>Widget 1</h4>
          <p>Some dashboard content here</p>
        </div>
        <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <h4>Widget 2</h4>
          <p>More dashboard content</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;