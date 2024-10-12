import React, { useState } from 'react';
import './UpdateItemForm.css';

const UpdateItemForm = ({ inventory, setInventory }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(''); // State to handle errors

  const updateItem = (event) => {
    event.preventDefault();

    const itemToUpdate = inventory.find(item => item.id === id);
    if (itemToUpdate) {
      const updatedItem = {
        id: itemToUpdate.id,
        name: name || itemToUpdate.name,
        quantity: quantity ? Number(quantity) : itemToUpdate.quantity,
        price: price ? Number(price) : itemToUpdate.price,
        category: category || itemToUpdate.category,
      };

      setInventory(inventory.map(item => (item.id === id ? updatedItem : item)));
      
      // Clear input fields and error after successful update
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('');
      setError('');  // Clear any previous errors
      alert(`Item ${id} has been updated.`);
    } else {
      // Set error if no item is found
      setError('Item not found! Please try again with a different ID.');
    }
  };

  return (
    <form onSubmit={updateItem} className="form">
      <h3>Update Item</h3>
      <input 
        type="text" 
        placeholder="ID" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="New Name (leave blank if no change)" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="New Quantity (leave blank if no change)" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="New Price (leave blank if no change)" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">New Category (leave blank if no change)</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button type="submit">Update Item</button>

      {/* Error message display */}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default UpdateItemForm;
