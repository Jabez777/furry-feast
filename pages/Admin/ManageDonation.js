import React, { useState } from 'react';

function ManageDonation() {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState('');

  // Add a new donation
  const handleAddDonation = () => {
    const donorName = prompt('Enter donor name:');
    const amount = prompt('Enter donation amount (₹):');
    if (donorName && amount && !isNaN(amount)) {
      setDonations([...donations, { name: donorName, amount: parseFloat(amount).toFixed(2) }]);
      setError('');
    } else {
      setError('Invalid input. Please enter a valid donor name and amount.');
    }
  };

  // Edit an existing donation
  const handleEditDonation = (index) => {
    const currentDonation = donations[index];
    const updatedName = prompt('Edit donor name:', currentDonation.name);
    const updatedAmount = prompt('Edit donation amount (₹):', currentDonation.amount);

    if (updatedName && updatedAmount && !isNaN(updatedAmount)) {
      const updatedDonations = [...donations];
      updatedDonations[index] = {
        ...currentDonation,
        name: updatedName,
        amount: parseFloat(updatedAmount).toFixed(2),
      };
      setDonations(updatedDonations);
      setError('');
    } else {
      setError('Invalid input. Please enter a valid donor name and amount.');
    }
  };

  // Delete a donation
  const handleDeleteDonation = (index) => {
    const updatedDonations = donations.filter((_, donationIndex) => donationIndex !== index);
    setDonations(updatedDonations);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Manage Donation</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          onClick={handleAddDonation}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Add Donation
        </button>
      </div>

      {error && (
        <div
          style={{
            color: 'red',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: 'bold',
          }}
        >
          {error}
        </div>
      )}

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {donations.map((donation, index) => (
          <li
            key={index}
            style={{
              backgroundColor: '#f9f9f9',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              {donation.name} donated ₹{donation.amount}
            </span>
            <div>
              <span
                onClick={() => handleEditDonation(index)}
                style={{
                  cursor: 'pointer',
                  marginRight: '10px',
                  color: '#007bff',
                  fontSize: '18px',
                }}
                title="Edit"
              >
                ✏️
              </span>
              <span
                onClick={() => handleDeleteDonation(index)}
                style={{
                  cursor: 'pointer',
                  color: '#ff4d4f',
                  fontSize: '18px',
                }}
                title="Delete"
              >
                🗑️
              </span>
            </div>
          </li>
        ))}
      </ul>

      {donations.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888', fontSize: '16px' }}>
          No donations yet. Click "Add Donation" to get started.
        </p>
      )}
    </div>
  );
}

export default ManageDonation;
