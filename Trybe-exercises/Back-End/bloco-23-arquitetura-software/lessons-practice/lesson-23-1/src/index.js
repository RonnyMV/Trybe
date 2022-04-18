const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json())

//Conexão com o mysql2 funcionando de forma automatica


  // Retorna todos os customers
  app.get('/customers', async (req, res) => {
    try {
      
      return res.status(200).json(customers)
   }
    catch (error) {
      console.log(error)
      return res.status(500).end();
   }

  })

  //Retorna por id
  app.get('/customers/:id', async (req, res) => {
    try {
      const {id} = req.params
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
      const [{ insertId }] = await connection.execute('INSERT INTO customers (name, cpf, email, password) VALUES (?, ?, ?, ?)', [ name, cpf, email, password]);
      return res.status(201).json({
        id: insertId,
        name,
        cpf,
        email,
        password
      });
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

      await connection.execute('UPDATE customers SET name = ?, cpf = ?, email = ?, password = ? WHERE id = ?', [ name, cpf, email, password, id]);
      return res.status(200).json({
        id,
        name,
        cpf,
        email,
        password
      });
    }
    catch(error) {
      console.log(error)
      return res.status(500).end();
    }
  });

  app.delete('/customers/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await connection.execute('DELETE FROM customers WHERE id = ?', [id])
      res.status(200).end()
    } catch (error) {
      console.log(error)
      return res.status(500).end();
    }
  })
  /*Guia instalação
  npm install
  npm init -y
  npm i mysql2
  npm nodemon -D
  npm i express
*/