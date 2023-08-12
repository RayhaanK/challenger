// Users
const db = require("../config")

class Users{
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastNmae, gender, userDOB, emailAdd, profileUrl
        FROM Users
        `
        db.query(query, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastNmae, gender, userDOB, emailAdd, profileUrl
        FROM Users
        WHERE userID = ? 
        `
        // OR WHERE userID = ${req.params.id};
        db.query(query, (err, result)=> {
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    login(req, res) {
        const query = `
        `
        // come back to this
    }
    updateUser(req, res) {
        const query = `
        UPDATE FROM Users
        SET ?
        WHERE userID = ?     
        `
        db.query(query, [req.body, req.params.id], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been updated."
            })
        })
    }
    deleteUser(req, res) {
        const query = `
        DELETE FROM Users
        SET ?
        WHERE userID = ${req.params.id}     
        `
        db.query(query, (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been deleted."
            })
        })
    }
}

module.exports = Users