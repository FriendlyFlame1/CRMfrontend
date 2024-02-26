// CreateDeal.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateDeal() {
  const [dealData, setDealData] = useState({
    dealOwner: '',
    dealName: '',
    accountName: '',
    // Other fields...
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDealData({ ...dealData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/deals', dealData);
      alert('Deal created successfully!');
      // Redirect or perform any other action after deal creation
    } catch (error) {
      console.error('Error creating deal:', error);
      alert('Error creating deal. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Deal</h2>
      <form onSubmit={handleSubmit}>
        <label>Deal Owner:</label>
        <input type="text" name="dealOwner" value={dealData.dealOwner} onChange={handleChange} required />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateDeal;
