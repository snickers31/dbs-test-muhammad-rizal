const jwt = require("jsonwebtoken");


// Middleware Config
module.exports = (req, res, next) => {
    try {
        const authHeader = req.header("authorization");
        if (!authHeader) return res.status(403).send("Access denied.");

        token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};