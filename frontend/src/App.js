import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SelectType from './components/IndexSelect';
import CustomerEntry from './components/CustomerPage';
import AddCustomerDetails from './components/AddCustomer';

function App() {
  return (
    <Router>
    <div class = "KhataSystem">
      <div class = "NavBar">
        <h1>Khata Billing</h1>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/IndexPage">IndexPage</Link></li>
          <li><Link to = "/Entry">EntrySection</Link></li>
        </ul>
    </div>

      <Routes>
        <Route path = "/" element = {
          <div class = "About">
            <h2>Welcome to</h2>
            <h3>Khata Management System</h3>
            <p>Here, you can easily track and manage your earnings,
              keep detailed records of your dealings with customers,
              and gain valuable insights into your business performance.</p>
            <img src ="image1.jpeg" alt=''/>
          </div>
        } />

        <Route path = "/IndexPage" element = {
          <SelectType />
        } />
        
        <Route path = "/customerPage/:id" element = {
          <CustomerEntry />
        } />

        <Route path = "/Entry" element = {
          <div class = "EntryForm">
            <div class = "EntryForm-Left">
              <h2>Enter Details</h2>
            </div>
            <div class = "EntryForm-Right">
              <AddCustomerDetails />
            </div>
          </div>
        } />

      </Routes>

      </div>
    </Router>
  );
}

export default App;
