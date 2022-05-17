const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params
  const book = await BookService.getById(id);
  if(!book) return res.status(400).json({message: 'book not found'})
  res.status(200).json(book);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body
  const book = await BookService.create({title, author, pageQuantity })
  res.status(201).json(book)
}

const update = async (req, res) => {
  const { id } = req.params;
  const {title, author, pageQuantity} = req.body;
  const update = await BookService.update(
    id, {title, author, pageQuantity
  });
  if(!update) return res.status(404).json({message: 'Book not found'})
  res.status(201).json({ message: 'Book updated'})
}

const remove = async (req, res ) => {
  const { id } = req.params
  const remove = await BookService.remove(id);
  if(!remove) return res.status(404).json({message: 'Book not found'})
  res.status(200).json({message: `Boook ${id} deletado com sucesso`})
}
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}