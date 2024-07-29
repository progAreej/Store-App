import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get("/api/products")
      .then(response => {
        console.log('API Response:', response.data);
        setProducts(response.data); 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);
        setError(error.message); 
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {error && <div className="text-red-500 mb-4">Error: {error}</div>}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className='bg-gray-200 border border-black p-4'>
              <img src={product.image} alt={product.title} className='w-full h-48 object-cover mb-2' />
              <h2 className='text-lg font-semibold mb-2 text-yellow-800'>{product.title}</h2>
              <p className='text-sm mb-2'>{product.description}</p>
              <p className='font-bold text-blue-700'>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
}

export default App;
