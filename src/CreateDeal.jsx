import React, { useState } from 'react';
import axios from 'axios';

const FormPage = () => {
  const [formData, setFormData] = useState({
    dealOwner: '',
    dealName: '',
    accountName: '',
    type: '',
    nextStep: '',
    leadSource: '',
    contactName: '',
    amount: '',
    closingDate: '',
    stage: '',
    probability: '',
    expectedRevenue: '',
    campaignSource: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sore-puce-pronghorn-boot.cyclic.app/api/deals', formData);
      if (response.status === 201) {
        alert('Deal saved successfully!');
        setFormData({
          dealOwner: '',
          dealName: '',
          accountName: '',
          type: '',
          nextStep: '',
          leadSource: '',
          contactName: '',
          amount: '',
          closingDate: '',
          stage: '',
          probability: '',
          expectedRevenue: '',
          campaignSource: '',
        });
      } else {
        alert('Failed to save deal.');
      }
    } catch (error) {
      console.error('Error saving deal:', error);
      alert('Failed to save deal.');
    }
  };

  return (
    <div>
      <h1>Create a New Deal</h1>
      <form onSubmit={handleSubmit}>
      
        <label>
          Deal Owner:
          <input type="text" name="dealOwner" value={formData.dealOwner} onChange={handleChange} />
        </label>
        <label>
          Deal Name:
          <input type="text" name="dealName" value={formData.dealName} onChange={handleChange} />
        </label>
        <label>
          Account Name:
          <input type="text" name="accountName" value={formData.accountName} onChange={handleChange} />
        </label>
        <label>
          Type:
          <input type="text" name="type" value={formData.type} onChange={handleChange} />
        </label>
        <label>
          Next Step:
          <input type="text" name="nextStep" value={formData.nextStep} onChange={handleChange} />
        </label>
        <label>
          Lead Source:
          <input type="text" name="leadSource" value={formData.leadSource} onChange={handleChange} />
        </label>
        <label>
          Contact Name:
          <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} />
        </label>
        <label>
          Amount:
          <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
        </label>
        <label>
          Closing Date:
          <input type="text" name="closingDate" value={formData.closingDate} onChange={handleChange} />
        </label>
        <label>
          Stage:
          <input type="text" name="stage" value={formData.stage} onChange={handleChange} />
        </label>
        <label>
          Probability:
          <input type="text" name="probability" value={formData.probability} onChange={handleChange} />
        </label>
        <label>
          Expected Revenue:
          <input type="text" name="expectedRevenue" value={formData.expectedRevenue} onChange={handleChange} />
        </label>
        <label>
          Campagin Source:
          <input type="text" name="campaginSource" value={formData.campaginSource} onChange={handleChange} />
        </label>
        <button type="submit">Save Deal</button>
      </form>
    </div>
  );
};

export default FormPage;
