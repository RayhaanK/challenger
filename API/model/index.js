// Index

const Users = require('./Users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthor = require('./BookAuthors')
// Export all objects
module.exports = {
    users: new Users(),
    books: new Books(),
    bookAuthor: new BookAuthor(),
    orders: new Orders()
}
