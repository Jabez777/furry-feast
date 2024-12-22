import React, { useState } from 'react';

function ManagePetDog() {
  const [dogs, setDogs] = useState([]);

  const handleAddDog = () => {
    const dogName = prompt('Enter dog name:');
    const breed = prompt('Enter dog breed:');
    if (dogName && breed) {
      setDogs([...dogs, { name: dogName, breed }]);
    }
  };

  const handleEditDog = (index) => {
    const currentDog = dogs[index];
    const updatedName = prompt('Edit dog name:', currentDog.name);
    const updatedBreed = prompt('Edit dog breed:', currentDog.breed);
    if (updatedName && updatedBreed) {
      const updatedDogs = [...dogs];
      updatedDogs[index] = { name: updatedName, breed: updatedBreed };
      setDogs(updatedDogs);
    }
  };

  const handleDeleteDog = (index) => {
    const updatedDogs = dogs.filter((_, dogIndex) => dogIndex !== index);
    setDogs(updatedDogs);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Manage Pet Dogs</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          onClick={handleAddDog}
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
          Add Pet Dog
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {dogs.map((dog, index) => (
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
              {dog.name} ({dog.breed})
            </span>
            <div>
              <span
                onClick={() => handleEditDog(index)}
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
                onClick={() => handleDeleteDog(index)}
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

      {dogs.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888', fontSize: '16px' }}>
          No pet dogs added yet. Click "Add Pet Dog" to get started.
        </p>
      )}
    </div>
  );
}

export default ManagePetDog;
