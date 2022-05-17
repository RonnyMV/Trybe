const express = require('express');
const BooksController = require('./controllers/BooksController');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/books', BooksController.getAll)
app.post('/books', BooksController.create)
app.delete('/books/:id', BooksController.remove)
app.get('/books/:id', BooksController.getById)
app.put('/books/:id', BooksController.update)



app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));