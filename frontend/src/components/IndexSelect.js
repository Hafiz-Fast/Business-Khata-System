import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SelectType = () => {
  const [selectedType, setSelectedType] = useState('');
  const [Index, setIndex] = useState([]);
  const navigate = useNavigate();

  function handleSelect(event) {
    setSelectedType(event.target.value);
  }

  function handleIdClick(item) {
    navigate(`/customerPage/${item.CustomerNo}`);
  }

  let filteredData;
  if (selectedType === '' || selectedType === 'Default') {
    filteredData = Index;
  } else {
    filteredData = Index.filter(item => item.Type === selectedType);
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/IndexPage')
      .then(res => setIndex(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="SelectType">
      <div className="IndexSelect">
        <h2>Select Type</h2>
        <select onChange={handleSelect} defaultValue="">
          <option value="Default">Default</option>
          <option value="Customer">Customer</option>
          <option value="Firm">Firm</option>
        </select>
      </div>

      <div>
        <table className="IndexTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>IndexNo</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td class="IndexNum" onClick={() => handleIdClick(item)}>{item.CustomerNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default SelectType;