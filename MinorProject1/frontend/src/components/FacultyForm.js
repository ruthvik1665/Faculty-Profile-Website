// FormComponent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const FormComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    department: '',
    research: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await fetch('http://localhost:8001/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        navigate('/login');
      } else {
        console.error('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '40px' }}>
      <form
        style={{
          maxWidth: '400px',
          width: '100%',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
        onSubmit={handleSubmit}
      >
        <label style={{ display: 'block', marginBottom: '8px' }} htmlFor="name">
          Name:
        </label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label style={{ display: 'block', marginBottom: '8px' }} htmlFor="designation">
          Designation:
        </label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />

        <label style={{ display: 'block', marginBottom: '8px' }} htmlFor="department">
          Department:
        </label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <label style={{ display: 'block', marginBottom: '8px' }} htmlFor="research">
          Research:
        </label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
          type="text"
          id="research"
          name="research"
          value={formData.research}
          onChange={handleChange}
        />

        <label style={{ display: 'block', marginBottom: '8px' }} htmlFor="email">
          Email:
        </label>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label style={{ display: 'block', marginBottom: '8px' }} htmlFor="description">
          Description:
        </label>
        <textarea
          style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        {/* Add the rest of your form fields here */}

        <button
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
