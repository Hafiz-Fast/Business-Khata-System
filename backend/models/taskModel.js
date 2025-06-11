const { sql, poolPromise } = require('../config/db');
const { ViewCustomersbyID, AddCustomers } = require('../controllers/taskController');

const Task = {
  
  async AddCustomer(Name, Phone, Address, Reference, Type) {
    try{
    const pool = await poolPromise;
    await pool.request()
      .input('Name', sql.VarChar, Name)
      .input('Phone', sql.VarChar, Phone)
      .input('Address', sql.VarChar, Address)
      .input('Reference', sql.VarChar, Reference)
      .input('Type', sql.VarChar, Type)
      .execute('AddCustomer');
    }
    catch{
      console.error("Error executing stored procedure:", error);
      throw error; 
    }
  },

  async ViewCustomer(){
    try{
      const pool = await poolPromise;
      const result = await pool.request()
          .execute('DisplayCustomer');
      return result.recordset;
    }
    catch(error){
      console.error("Error executing stored procedure:", error);
      throw error; 
    }
  },

  async ViewCustomerbyID(id){
    try{
      const pool = await poolPromise;
      const result = await pool.request()
          .input('id',sql.Int,id)
          .execute('DisplayCustomerbyID');
      return result.recordset;
    }
    catch(error){
      console.error("Error executing stored procedure:", error);
      throw error; 
    }
  },

};

module.exports = Task;