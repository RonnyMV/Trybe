const connection = require('./connection')
const serialize = (bookData) => ({
	id: bookData.id,
	title: bookData.title,
	authorId: bookData.author_id
})

const getAllbooks = async () => {
  const [result] = await connection.execute('SELECT * FROM model_example.books')
  return result.map(({id, title, author_id}) => (
      {
          id,
          title, 
          author_id,
      }))
  }

const getAuthorById = async (authorId) => {
	const [result] = await connection.execute('SELECT * FROM model_example.books WHERE author_id=?', [authorId])

	return result.map(({id, title, author_id}) => ({
		id,
		title,
		authorId: author_id
	}))
}

const findID = async (id) => {
	const query = ('SELECT * FROM model_example.books WHERE id=?')
	const [result] = await connection.execute(query, [id])

	if (result.length === 0) return null

	return result.map(({id, title, author_id}) =>({
		id,
		title,
		authorId: author_id
	}))

}

const getByAuthorId = async (authorId) => {
	const query = ('SELECT * model_example.authors WHERE id=?')
	const [result] = await connection.execute(query, [authorId])
	if (result !== authorId);
	return false
}

const isValid = (title, authorId) => {
	if (!title || typeof title !== 'string' || title.length === 0 || title.length < 3) return false
	if (!author|| typeof authorId !== 'string' || authorId === null || (await getByAuthorId(authorId))) return false
	return true;
}

const create = async (title, author_id ) => connection.execute('INSERT INTO model.example.books (title, author_id) VALUES(?,?)', [title, author_id])

  module.exports = {
      getAllbooks,
			getAuthorById,
			findID,
			isValid,
			create,
  }