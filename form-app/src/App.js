import React, { useState } from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(formData).every(val => val.trim() !== '');
    if (!allFilled) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Form submitted successfully!");
    console.log("Submitted:", formData);
    setFormData({ name: '', email: '', phone: '', city: '', country: '' });
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: 'center' }}>Form App</h2>


        {Object.keys(formData).map((field) => (
          <div key={field} style={{ marginBottom: '10px' }}>
            <input
              type="text"
              name={field}
              value={formData[field]}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
        ))}

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: 'grey'
};

const formStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  width: '300px',
  fontFamily: 'Arial'
};

const inputStyle = {
  width: '92%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid '
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'blue',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default SimpleForm;
