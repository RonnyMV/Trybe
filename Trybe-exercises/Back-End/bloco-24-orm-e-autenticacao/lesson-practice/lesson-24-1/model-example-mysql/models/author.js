const connection = require('./connection')
const authorFullName = ({id, firstName, middleName, lastName}) =>{
  // utilizamos o filter pois pode ter autores que náo possuam o middleName. Dpois utilizamos o join para separar por espaços entre si.

  const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ")
  return{
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const serialize = (data) => {
  return {
    id: data.id,
    firstName: data.first_name,
    middleName: data.middle_name,
    lastName: data.last_name,
  }
}

const getAllAuthors = async () => {
    const [result] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors')
    return result.map(serialize).map(authorFullName)
}

module.exports = {
    getAllAuthors,
}