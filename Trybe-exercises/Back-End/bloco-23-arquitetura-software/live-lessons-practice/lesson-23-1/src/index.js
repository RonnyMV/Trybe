const express = require('express');
const app = express();
const PORT = 3001;

const { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteById} = require('./models/customers')



app.use(express.json())

  // Retorna todos os customers
  app.get('/customers', async (req, res) => {
    try {
      const customers = await getAllCustomers()
      return res.status(200).json(customers)
   }
    catch (error) {
      console.log(error)
      return res.status(500).end();
   }

  })

  //Retorna os customers por id
  app.get('/customers/:id', async (req, res) => {
    try {
      const {id} = req.params;
      const customer = await getCustomerById(id)
      return res.status(200).json(customer)
   }
    catch (error) {
      console.log(error)
      return res.status(500).end();
   }

  })

  //CRIA UM USUARIO

  app.post('/customers', async (req, res) => {
    try {
      const {name, cpf, email, password} = req.body;
      const createdCustomer = await createCustomer({name, cpf, email, password})
      
      return res.status(201).json(createdCustomer);
    }
    catch(error) {
      console.log(error)
      return res.status(500).end();
    }
  });


   //UPDATE CUSTOMER

   app.put('/customers/:id', async (req, res) => {
    try {
      const {name, cpf, email, password} = req.body;
      const { id } = req.params;

      const updatedCustomer = await updateCustomer({id, name, cpf, email, password})
      return res.status(200).json(updatedCustomer);
    }
    catch(error) {
      console.log(error)
      return res.status(500).end();
    }
  });

  app.delete('/customers/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await deleteById(id)
      res.status(200).end()
    } catch (error) {
      console.log(error)
      return res.status(500).end();
    }
  })

  app.listen(PORT, () => console.log(`listening ${PORT}`))
  /*Guia instalação
  npm install
  npm init -y
  npm i mysql2
  npm nodemon -D
  npm i express
*/