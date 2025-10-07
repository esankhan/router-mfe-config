import React from 'react';

const Products: React.FC = () => {
  const products = [
    { id: 1, name: 'Product A', price: '$29.99' },
    { id: 2, name: 'Product B', price: '$39.99' },
    { id: 3, name: 'Product C', price: '$49.99' },
  ];

  return (
    <div>
      <h3>Remote 2 - Products</h3>
      <p>This is the products page from Remote 2 application.</p>
      <div style={{ marginTop: '1rem' }}>
        <h4>Available Products</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {products.map(product => (
            <div key={product.id} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}>
              <h5>{product.name}</h5>
              <p>{product.price}</p>
              <button style={{ padding: '0.5rem 1rem', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px' }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;