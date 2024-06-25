const jwt = require('jsonwebtoken');

function authorize(allowedRoles = []) {
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

            if (allowedRoles.length > 0 && !allowedRoles.includes(decoded.userRole)) {
                return res.status(403).json({ message: "Access denied: Your role does not have permission to perform this action." });
            }

            next();
        });
    };
}

module.exports = authorize;