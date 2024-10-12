import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddItemForm from './components/AddItemForm';
import RemoveItemForm from './components/RemoveItemForm';
import UpdateItemForm from './components/UpdateItemForm';
import SearchItemForm from './components/SearchItemForm';
import InventoryList from './components/InventoryList';

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [sortType, setSortType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Router>
      <div className="App">
        <h1>Inventory Management System</h1>

        {/* Navigation Links */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Item</Link></li>
            <li><Link to="/remove">Remove Item</Link></li>
            <li><Link to="/update">Update Item</Link></li>
            <li><Link to="/inventory">Inventory List</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<h2>Welcome to the Inventory Management System</h2>} />
          <Route 
            path="/add" 
            element={<AddItemForm inventory={inventory} setInventory={setInventory} />} 
          />
          <Route 
            path="/remove" 
            element={<RemoveItemForm inventory={inventory} setInventory={setInventory} />} 
          />
          <Route 
            path="/update" 
            element={<UpdateItemForm inventory={inventory} setInventory={setInventory} />} 
          />
          <Route 
            path="/inventory" 
            element={
              <>
                <SearchItemForm inventory={inventory} setSearchResult={setSearchResult} />
                <InventoryList 
                  inventory={inventory} 
                  searchResult={searchResult} 
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory} 
                  sortType={sortType} 
                  setSortType={setSortType} 
                />
              </>
            } 
          />
        </Routes>

        {/* Contact Me Button and Creator Info */}
        <div className="contact-me-section">
          <button className="contact-me-btn" onClick={toggleModal}>
            Contact Me
          </button>
          <p className="creator-message">Created by Alfonso Jolie M. Castillo</p>
          <p className="creator-message2">From BSCS C3A</p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Contact Me</h2>
              <div className="contact-info-wrapper">
                <p>Email: <a href="alfonso_jolie_castillo@dlsl.edu.com">alfonso_jolie_castillo@dlsl.edu.com</a></p>
                <p>Phone: <a href="tel:09980921223">0998 092 1223</a></p>
                <p>Facebook: <a href="https://www.facebook.com/aljo.castillo/" target="_blank" rel="noopener noreferrer">Aljo Castillo</a></p>
                <p>Instagram: <a href="https://www.instagram.com/aljo_castillo/" target="_blank" rel="noopener noreferrer">Aljo_Castillo</a></p>
                <p>Twitter: <a href="https://x.com/Aljocastillo27" target="_blank" rel="noopener noreferrer">Aljocastillo27</a></p>
              </div>
              <button className="close-modal-btn" onClick={toggleModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
