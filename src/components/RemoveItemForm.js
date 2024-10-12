import React, { useState } from 'react';
import './RemoveItemForm.css'; // Link to the new CSS file

const RemoveItemForm = ({ inventory, setInventory }) => {
  const [id, setId] = useState('');
  const [error, setError] = useState('');  // State to handle errors

  const removeItem = (event) => {
    event.preventDefault();

    // Check if item exists in the inventory
    const itemExists = inventory.find(item => item.id === id);

    if (itemExists) {
      // Filter out the item to remove it from inventory
      const updatedInventory = inventory.filter(item => item.id !== id);
      setInventory(updatedInventory);
      setId(''); // Reset the input field
      setError('');  // Clear any previous errors
      alert('Item removed successfully!');
    } else {
      // Set error if no item is found
      setError('Item with this ID does not exist. Please try again with a different ID.');
    }
  };

  return (
    <form onSubmit={removeItem} className="form-container">
      <h3>Remove Item</h3>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
        className="form-input"
      />
      <button type="submit" className="submit-button">Remove Item</button>

      {/* Error message display */}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default RemoveItemForm;
