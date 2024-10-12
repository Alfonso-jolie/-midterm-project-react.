import React, { useState } from 'react';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';
import UpdateItem from './UpdateItem';
import InventoryTable from './InventoryTable';
import './Dashboard.css'; // Assuming there's a CSS file for styling

const Dashboard = () => {
  const [inventory, setInventory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const addItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  const removeItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const updateItem = (updatedItem) => {
    setInventory(inventory.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal open/close state
  };

  return (
    <div className="dashboard">
      <h1>Inventory Management Dashboard</h1>

      <div className="actions">
        <AddItem addItem={addItem} />
        <RemoveItem removeItem={removeItem} inventory={inventory} />
        <UpdateItem updateItem={updateItem} inventory={inventory} />
      </div>

      <InventoryTable inventory={inventory} />

      {/* Contact Me Button and Creator Info */}
      <div className="wrapper">
        <div className="both-message">
          <button className="contact-me-btn" onClick={toggleModal}>
            Contact Me
          </button>
          <p className="creator-message">Created by Brian Ronnie Hernandez</p>
          <p className="creator-message2">From BSCS C3A</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Me</h2>
            <div className="contact-info-wrapper">
              <p>Email: <a href="mailto:brianjavier1919@gmail.com">brianjavier1919@gmail.com</a></p>
              <p>Phone: <a href="tel:09564768712">0956 476 8712</a></p>
              <p>Facebook: <a href="https://www.facebook.com/briiiiii19/" target="_blank" rel="noopener noreferrer">Brian Ronnie Hernandez</a></p>
              <p>Instagram: <a href="https://www.instagram.com/bri.hrnndz/" target="_blank" rel="noopener noreferrer">bri.hrnndz</a></p>
              <p>Twitter: <a href="https://x.com/Briiiiiiiiii19" target="_blank" rel="noopener noreferrer">Briiiiiiiiii19</a></p>
            </div>
            <button className="close-modal-btn" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
