import React, { useState, useEffect } from 'react';

const DataTableComponent = ({ userEmail }) => {
  const [formDataList, setFormDataList] = useState([]);
  const [selectedFormData, setSelectedFormData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/getFormData');
      if (response.ok) {
        const data = await response.json();
        console.log('User Email:', userEmail);
        console.log('Fetched Data:', data);
        const userFormData = data.filter(formData => formData.email === userEmail);
        setFormDataList(userFormData);
      } else {
        console.error('Failed to fetch form data.');
      }
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [userEmail]);

  const handleUpdateClick = (formData) => {
    console.log('Selected FormData:', formData);
    setSelectedFormData(formData);
  };


  const handleUpdateForm = async () => {
    if (selectedFormData && selectedFormData.name) {
      try {
        console.log('Updating form data:', selectedFormData);
  
        const response = await fetch(`http://localhost:8001/api/updateFormData/${selectedFormData.name}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedFormData),
        });
  
        console.log('Update Response Status:', response.status);
  
        if (response.ok) {
          console.log('Form data updated successfully!');
          fetchData();
          setSelectedFormData(null);
        } else {
          console.error('Failed to update form data.');
        }
      } catch (error) {
        console.error('Error updating form data:', error);
      }
    } else {
      console.warn('Selected form data or name not available for update.');
    }
  };
  

  return (
    <div>
      <h2>Form Data Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Research</th>
            <th>Email</th>
            <th>Description</th>
            {/* Add the rest of your form fields here */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <tr key={index}>
              <td>{formData.name}</td>
              <td>{formData.designation}</td>
              <td>{formData.department}</td>
              <td>{formData.research}</td>
              <td>{formData.email}</td>
              <td>{formData.description}</td>
              {/* Add the rest of your form fields here */}
              <td>
                <button onClick={() => handleUpdateClick(formData)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedFormData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Update Form</h2>
          {/* Add input fields for all form fields */}
          <label>Name:</label>
          <input
            type="text"
            value={selectedFormData.name}
            onChange={(e) => setSelectedFormData({ ...selectedFormData, name: e.target.value })}
          />

          <label>Designation:</label>
          <input
            type="text"
            value={selectedFormData.designation}
            onChange={(e) => setSelectedFormData({ ...selectedFormData, designation: e.target.value })}
          />

          <label>Department:</label>
          <input
            type="text"
            value={selectedFormData.department}
            onChange={(e) => setSelectedFormData({ ...selectedFormData, department: e.target.value })}
          />

          <label>Research:</label>
          <input
            type="text"
            value={selectedFormData.research}
            onChange={(e) => setSelectedFormData({ ...selectedFormData, research: e.target.value })}
          />

          <label>Email:</label>
          <input
            type="email"
            value={selectedFormData.email}
            onChange={(e) => setSelectedFormData({ ...selectedFormData, email: e.target.value })}
          />

          <label>Description:</label>
          <textarea
            value={selectedFormData.description}
            onChange={(e) => setSelectedFormData({ ...selectedFormData, description: e.target.value })}
          ></textarea>

          <button onClick={handleUpdateForm}>Update</button>
        </div>
      )}
    </div>
  );
};

export default DataTableComponent;





