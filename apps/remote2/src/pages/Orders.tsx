import React from 'react';

const Orders: React.FC = () => {
  const orders = [
    { id: 1, product: 'Product A', status: 'Delivered', date: '2023-12-01' },
    { id: 2, product: 'Product B', status: 'Shipped', date: '2023-12-03' },
    { id: 3, product: 'Product C', status: 'Processing', date: '2023-12-05' },
  ];

  return (
    <div>
      <h3>Remote 2 - Orders</h3>
      <p>This is the orders page from Remote 2 application.</p>
      <div style={{ marginTop: '1rem' }}>
        <h4>Order History</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '0.5rem', border: '1px solid #ddd', textAlign: 'left' }}>Order ID</th>
              <th style={{ padding: '0.5rem', border: '1px solid #ddd', textAlign: 'left' }}>Product</th>
              <th style={{ padding: '0.5rem', border: '1px solid #ddd', textAlign: 'left' }}>Status</th>
              <th style={{ padding: '0.5rem', border: '1px solid #ddd', textAlign: 'left' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>#{order.id}</td>
                <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{order.product}</td>
                <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{order.status}</td>
                <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;