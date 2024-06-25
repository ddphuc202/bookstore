// authentication.js
const jwt = require('jsonwebtoken');

function authenticate() {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Authentication failed: No token provided." });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(403).json({ message: 'Authentication failed', err });
            }
            req.user = decoded;
            next();
        });
    };
}

module.exports = authenticate;