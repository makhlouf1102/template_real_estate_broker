const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.authLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await User.findByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
};

exports.validateToken = (req, res) => {
    const authHeader = req.headers['authorization'];
    console.log('Auth header:', authHeader);  // Debug log

    const token = authHeader && authHeader.split(' ')[1];
    console.log('Extracted token:', token);  // Debug log

    if (token == null) {
        console.log('No token provided');  // Debug log
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.sendStatus(403);
        }
        console.log('Token verified successfully');  // Debug log
        // generate new token
        const newToken = jwt.sign(
            { userId: user.userId, username: user.username },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '1h' }
        );
        return res.status(200).json({ message: 'Token verified successfully', token: newToken });
    });
};