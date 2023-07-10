

import React, { useState } from 'react';

const ModalComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Other form fields
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    // Close the modal or perform any other actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      {/* Other form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModalComponent