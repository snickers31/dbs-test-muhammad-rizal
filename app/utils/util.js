
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.TokenGenerator = (userId) => {
    const token = jwt.sign({ user_id: userId }, process.env.JWTPRIVATEKEY);
    return token;
}
exports.HashPassword = async (newPassword) => {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    hashedPassword = await bcrypt.hash(newPassword, salt);
    return hashedPassword;
}