import React, { useState, useEffect } from 'react';
import './InventoryList.css'; // Import the CSS file for styling

const InventoryList = ({ inventory, searchResult, selectedCategory, setSelectedCategory, sortType, setSortType }) => {
  const [filteredInventory, setFilteredInventory] = useState([]);

  useEffect(() => {
    const getFilteredInventory = () => {
      let items = searchResult.length > 0 ? searchResult : inventory;

      // Filter by selected category
      if (selectedCategory) {
        items = items.filter(item => item.category === selectedCategory);
      }

      // Create a copy of the items array to avoid mutating the original
      const sortedItems = [...items];

      // Sort items based on sortType
      switch (sortType) {
        case 'quantity-asc':
          sortedItems.sort((a, b) => a.quantity - b.quantity);
          break;
        case 'quantity-desc':
          sortedItems.sort((a, b) => b.quantity - a.quantity);
          break;
        case 'price-asc':
          sortedItems.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          sortedItems.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }

      return sortedItems;
    };

    setFilteredInventory(getFilteredInventory());
  }, [inventory, searchResult, selectedCategory, sortType]);

  return (
    <div className="inventory-list">
      <h1 className="inventory-title">All Inventory Items</h1>

      {/* Filter and Sort Options */}
      <div className="filter-sort">
        <div>
          <label htmlFor="category-select">Filter by Category:</label>
          <select 
            id="category-select"
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <div>
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select"
            value={sortType} 
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">None</option>
            <option value="quantity-asc">Quantity (Low to High)</option>
            <option value="quantity-desc">Quantity (High to Low)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Render Inventory List */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.length > 0 ? (
            filteredInventory.map(item => (
              <tr 
                key={item.id} 
                className={item.quantity <= 5 ? 'low-stock' : ''} // Apply class if stock is 5 or below
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  {item.quantity} {item.quantity <= 5 && <span className="low-stock-text">(Low Stock)</span>}
                </td>
                <td>₱{item.price.toFixed(2)}</td>
                <td>{item.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No items found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
