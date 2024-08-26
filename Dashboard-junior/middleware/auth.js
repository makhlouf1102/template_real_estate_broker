const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.userId = decoded.userId;

        // Generate new token
        const newToken = jwt.sign(
            { userId: decoded.userId, username: decoded.username },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '1h' }
        );

        next();
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
