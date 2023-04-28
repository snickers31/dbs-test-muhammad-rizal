const sql = require('./db')

exports.Login = async (username, result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "SELECT * FROM users WHERE username = ? LIMIT 1", username,
                (err, data) => {
                    if (err) {
                        reject(err);
                    }

                    if (data.length > 0) {
                        resolve(data);
                    } else {
                        reject({ message: "not found any items data." });
                    }
                }
            );
        });

        return result(null, data[0]);

    } catch (error) {
        return result(error, null);

    }
}
exports.Register = async (newUser, result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "SELECT * FROM users WHERE username = ?", newUser.username,
                (err, data) => {
                    if (err) {
                        reject(err);
                    }

                    if (data.length > 0) {
                        reject({ message: "username already exists." })
                    }
                }
            );

            sql.query(
                "INSERT INTO users (email, username, password) VALUES (?,?, ?)", [newUser.email,newUser.username, newUser.password],
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                   
                }
            );
        });

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}