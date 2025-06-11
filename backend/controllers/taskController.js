const Task = require('../models/taskModel');
const { param } = require('../routes/taskRoutes');

//MovieMate
exports.AddCustomers = async (req,res) => {
  try {
    const {Name, Phone, Address, Reference, Type} = req.body;
    await Task.AddCustomer(Name, Phone, Address, Reference, Type);
    res.status(201).json({ message: 'Task created using stored procedure' });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.ViewCustomers = async (req,res) => {
  try{
    const Customers = await Task.ViewCustomer();
    res.json(Customers);
  }
  catch(error){
    console.error("Error creating task:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.ViewCustomersbyID = async (req,res) => {
  try{
    const CustomerID = parseInt(req.params.id);
    const Customers = await Task.ViewCustomerbyID(CustomerID);
    res.json(Customers);
  }
  catch(error){
    console.error("Error creating task:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};