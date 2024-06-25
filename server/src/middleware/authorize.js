// authorization.js
function authorize(allowedRoles = []) {
    return (req, res, next) => {
        if (allowedRoles.length > 0 && !allowedRoles.includes(req.user.userRole)) {
            return res.status(403).json({ message: "Access denied: Your role does not have permission to perform this action." });
        }
        next();
    };
}

module.exports = authorize;