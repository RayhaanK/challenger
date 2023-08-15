// Books
const db = require("../config");
class Books{
     register(req, res) {
        const data = req.body
        // Query
        const query = `
                INSERT INTO Books
                SET ?;
                `;
        db.query(query, [data], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "Book has been added.",
          });
        });
      }

      fetchBooks(req, res) {
        const query = `
            SELECT bookID, bookTitle, category, bookUrl        
            FROM Books;
            `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      }

      fetchBook(req, res) {
        const id = req.params.id
        const query = `
            SELECT bookID, bookTitle, category, bookUrl   
            FROM Books
            WHERE bookID = ?;
            `;
        // OR WHERE userID = ${req.params.id};
        db.query(query, [id], (err, result) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            result,
          });
        });
      }

      updateBook(req, res) {
        const id = req.params.id
        const data = req.body
        const query = `
            UPDATE Books
            SET ?
            WHERE bookID = ?;   
            `;
        db.query(query, [data, id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The book record has been updated.",
          });
        });
      }

      deleteBook(req, res) {
        const query = `
            DELETE FROM Books
            WHERE bookID = ${req.params.id};   
            `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The user record has been deleted.",
          });
        });
      }
}

module.exports = Books