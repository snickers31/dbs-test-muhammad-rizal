const authRepo = require('../models/auth');
const bcrypt = require("bcrypt");
const util = require('../utils/util');





exports.Login = async (req, res) => {

    var user = await authRepo.Login(req.body.username, (err, data) => {
        if (err) {
            return res.status(400).send("Invalid username or password");
        }
        return data

    })

    const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if (!isValidPassword) return res.status(400).send("Invalid email or password");

    const token = util.TokenGenerator(user.id)
    res.send(token)


}
exports.Register = async (req, res) => {
    try {

        req.body.password = await util.HashPassword(req.body.password)

        var user = await authRepo.Register(req.body, (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send("Successfully registered")
        
    } catch (error) {
        res.status(400).send(error)
    }
    

   

}