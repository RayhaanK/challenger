// Authors
const db = require("../config");
class BookAuthor{
    register(req, res) {
        const data = req.body
        // Query
        const query = `
                INSERT INTO BookAuthor
                SET ?;
                `;
        db.query(query, [data], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "Book Author has been added.",
          });
        });
      }

      fetchAuthors(req, res) {
        const query = `
            SELECT id, authorName, authorSurname, bookID        
            FROM BookAuthor;
            `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      }

      fetchAuthor(req, res) {
        const id = req.params.id
        const query = `
        SELECT id, authorName, authorSurname, bookID        
        FROM BookAuthor;
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

      updateAuthor(req, res) {
        const id = req.params.id
        const data = req.body
        const query = `
            UPDATE BookAuthor
            SET ?
            WHERE id = ?;   
            `;
        db.query(query, [data, id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The Author record has been updated.",
          });
        });
      }
}

module.exports = BookAuthor