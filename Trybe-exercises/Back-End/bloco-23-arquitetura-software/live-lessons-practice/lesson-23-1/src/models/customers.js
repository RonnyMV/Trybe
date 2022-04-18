const connection = require('./mysql-connection')

const getAllCustomers = async () => {
    const [ customers ] = await connection.execute('SELECT * FROM customers');
    return customers;
}

const getCustomerById = async (id) => {
    const [ customer ] = await connection.execute('SELECT * FROM customers WHERE id = ?', [id]);
    return customer
}

const createCustomer = async ({name, cpf, email, password}) => {
    const [{ insertId }] = await connection.execute('INSERT INTO customers (name, cpf, email, password) VALUES (?, ?, ?, ?)', [ name, cpf, email, password]);

    return {
        id: insertId,
        name,
        cpf,
        email,
        password
    } 
}

const updateCustomer = async ({id, name, cpf, email, password}) => {
    await connection.execute('UPDATE customers SET name = ?, cpf = ?, email = ?, password = ? WHERE id = ?', [ name, cpf, email, password, id]);
    return {
        id,
        name,
        email,
        cpf,
        password
    }
}

const deleteById = async (id) => {
    await connection.execute('DELETE FROM customers WHERE id = ?', [id])
}

module.exports = {
getAllCustomers,
getCustomerById,
createCustomer,
updateCustomer,
deleteById
}