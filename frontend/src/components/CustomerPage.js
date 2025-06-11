import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CustomerEntry = () => {
  const [Customer, setCustomer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //Send Id to backend and then display data
    axios.get(`http://localhost:5000/api/Customer/${id}`)
      .then(res => setCustomer(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      <table class = "CustomerTable">
        <thead>
          <tr>
            <th>IndexNo</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Reference</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Customer.map((item, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{item.Name}</td>
              <td>{item.Phone}</td>
              <td>{item.Address}</td>
              <td>{item.Reference}</td>
              <td>{item.Type}</td>
              <td>{item.Amount}</td>
              <td>{item.TotalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerEntry;