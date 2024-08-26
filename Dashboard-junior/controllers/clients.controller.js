const Client = require('../models/client');


exports.findAll = async (req, res) => {
    const userId = req.userId;
    try {
        const clients = await Client.findAll(userId);
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.create = async (req, res) => {
    const userId = req.userId;
    const { name, email, phone, address, city, state } = req.body;
    try {
        const client = await Client.create(userId, name, email, phone, address, city, state);
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.update = async (req, res) => {
    const userId = req.userId;
    const { id, name, email, phone, address, city, state } = req.body;
    try {
        const client = await Client.update(userId, id, name, email, phone, address, city, state);
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.delete = async (req, res) => {
    const userId = req.userId;
    const { id } = req.params;
    try {
        await Client.delete(userId, id);
        res.json({ message: 'Client deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};