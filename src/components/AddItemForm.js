import React, { useState } from 'react';
import './AddItemForm.css'; // Link the CSS file for styling

const AddItemForm = ({ inventory, setInventory }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const addItem = (event) => {
    event.preventDefault();

    const parsedQuantity = Number(quantity);
    const parsedPrice = Number(price);

    if (id && name && parsedQuantity > 0 && parsedPrice > 0 && category) {
      const itemExists = inventory.find(item => item.id === id);

      if (!itemExists) {
        const newItem = { id, name, quantity: parsedQuantity, price: parsedPrice, category };
        setInventory([...inventory, newItem]);

        setId('');
        setName('');
        setQuantity('');
        setPrice('');
        setCategory('');
        alert('Item added successfully!');
      } else {
        alert('Item with this ID already exists!');
      }
    } else {
      alert('Please fill in all fields with valid data!');
    }
  };

  return (
    <form onSubmit={addItem} className="form-container">
      <h3>Add New Item</h3>
      <input 
        type="text" 
        placeholder="ID" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        required 
        className="form-input"
      />
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
        className="form-input"
      />
      <input 
        type="number" 
        placeholder="Quantity" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
        required 
        className="form-input"
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        required 
        className="form-input"
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        required
        className="form-select"
      >
        <option value="">Select Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button type="submit" className="submit-button">Add Item</button>
    </form>
  );
};

export default AddItemForm;
