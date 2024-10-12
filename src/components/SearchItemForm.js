import React, { useState } from 'react';


const SearchItemForm = ({ inventory, setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');  // Error state

  const searchItem = (event) => {
    event.preventDefault();

    // Perform the search by ID (assuming IDs are numeric)
    const result = inventory.filter(item => item.id.toString().includes(searchTerm));

    if (result.length > 0) {
      setSearchResult(result);
      setError('');  // Clear the error if results are found
    } else {
      setSearchResult([]);
      setError('No items found. Please try again with a different ID.'); // Display error
    }
  };

  return (
    <form onSubmit={searchItem}>
      <h3>Search Item by ID</h3>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        required 
        placeholder="Enter item ID" 
      />
      <button type="submit">Search</button>

      {/* Display error message if no items are found */}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </form>
  );
};

export default SearchItemForm;
