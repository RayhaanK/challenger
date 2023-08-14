// Users
const db = require("../config");
const { hash, compare, hasSync } = require("brypt");
// Hash function allows us to encrypt the password.
// Compare function is similar to a IF statement.
// salt is for password. Minimum letters is 10 but can be changed
// To crypt the password we going to need a ket to encrypt it. It will change the letters to someone else example, password = ab, it will then be cxd
const { createToken } = require("../middleware/AuthenticateUser");

class Users {
  fetchUsers(req, res) {
    const query = `
        SELECT userID, firstName, lastNmae, gender, userDOB, emailAdd, profileUrl
        FROM Users;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, lastNmae, gender, userDOB, emailAdd, profileUrl
        FROM Users
        WHERE userID = ?;
        `;
    // OR WHERE userID = ${req.params.id};
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  login(req, res) {
    const query = `
        `;
    // come back to this
  }


//   async allows us to run multiple lines at the same time
//   it doesnt wait for tasks to be completed. Eg, if task one isnt complete, task 2 will already be rendering.
  async register(req, res) {
    const data = req.body;
    // Encrypt password
    data.userPass = await hash(data.userPass, 15);
    // Payload
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    // Query
    const query = `
        INSERT INTO Users
        SET ?;
        `;
        // or SET can be changed to 'VALUES(?, ?, ?, ?, ?, ?, ?)
    db.query(query, [data], (err) => {
      if (err) throw err;
    //   Create token
    let token = createToken(user)
    res.cookie('LegitUser', token, {
        maxAge: 3600000,
        httpOnly: true
    })
    res.json({
        status: res.statusCode,
        msg: "You are now registered."
    })
    });
  }

  updateUser(req, res) {
    const query = `
        UPDATE FROM Users
        SET ?
        WHERE userID = ?;   
        `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user record has been updated.",
      });
    });
  }
  deleteUser(req, res) {
    const query = `
        DELETE FROM Users
        SET ?
        WHERE userID = ${req.params.id};   
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

module.exports = Users;
