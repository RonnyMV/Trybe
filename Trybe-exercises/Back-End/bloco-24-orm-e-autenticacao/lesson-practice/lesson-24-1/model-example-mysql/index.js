const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const Author = require('./models/author')
const Books = require('./models/books')

// app.use(express.json())
app.use(bodyParser.json())

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAllAuthors();
  res.status(200).json(authors)
})

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
  ? await Books.getAuthorById (author_id)
  : await Books.getAllbooks()
  res.status(200).json(books) 
})

app.get('/books/:id', async (req, res) => {
  const {id} = req.params
  const result = await Books.findID(id);
  if(!result) return res.status(400).json({message: 'User not found'});
  res.status(200).json(result);
})

app.post('/books', async (req, res) => {
  const {title, author_id} = req.body
  if (await Books.isValid(title, author_id)) {
    return res.status(400).json({message: 'Dados náo encontrados'})
  }
  await Books.create(title, author_id) 
    res.status(200).json({message: 'cadastrado com sucesso'})
})
app.listen(port, () => console.log(`listening to ${port}!`))