import React from 'react';

const Analytics: React.FC = () => {
  const metrics = [
    { name: 'Page Views', value: '12,458', change: '+5.4%' },
    { name: 'Unique Visitors', value: '3,249', change: '+2.1%' },
    { name: 'Bounce Rate', value: '34.2%', change: '-1.8%' },
    { name: 'Session Duration', value: '4m 32s', change: '+8.3%' },
  ];

  return (
    <div>
      <h3>Remote 3 - Analytics</h3>
      <p>This is the analytics page from Remote 3 application.</p>

      <div style={{ marginTop: '1rem' }}>
        <h4>Key Metrics</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {metrics.map((metric, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              textAlign: 'center',
              backgroundColor: '#fafafa'
            }}>
              <h5 style={{ margin: '0 0 0.5rem 0', color: '#666' }}>{metric.name}</h5>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
                {metric.value}
              </div>
              <div style={{
                color: metric.change.startsWith('+') ? '#4caf50' : '#f44336',
                fontSize: '0.9rem'
              }}>
                {metric.change}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <h5>Chart Placeholder</h5>
          <div style={{
            height: '200px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}>
            [Analytics Chart Would Go Here]
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;