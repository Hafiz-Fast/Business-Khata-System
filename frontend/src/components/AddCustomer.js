import React, { useState } from 'react';

const AddCustomerDetails = () => {
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Address, setAdress] = useState('');
    const [Reference, setReference] = useState('');
    const [Type, setType] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      await fetch('http://localhost:5000/api/Customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Name, Phone, Address, Reference, Type })
      });
  
      setName('');
      setPhone('');
      setAdress('');
      setReference('');
      setType('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="PhoneNo" value={Phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="text" placeholder="Address" value={Address} onChange={(e) => setAdress(e.target.value)} required />
        <input type="text" placeholder="Reference Name" value={Reference} onChange={(e) => setReference(e.target.value)} required />
        <input list="Type" placeholder="Type" value={Type} onChange={(e) => setType(e.target.value)} required />
        <datalist id = "Type">
          <option value="Customer" />
          <option value="Firm" />
        </datalist>
        <button type="submit">Add Entry</button>
      </form>
    );
  };

export default AddCustomerDetails;