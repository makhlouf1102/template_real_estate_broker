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
    const userId = req.userId; // Ensure this is set by your authentication middleware
    const { name, email, phone, address, city, status } = req.body;
    
    if (!userId) {
        return res.status(401).json({ message: 'User not authenticated' });
    }

    try {
        const client = await Client.create(name, email, phone, address, city, status, userId);
        res.json(client);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.update = async (req, res) => {
    const { id, name, email, phone, address, status } = req.body;
    console.log(req.body);
    try {
        const client = await Client.update(id, name, email, phone, address, status);
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await Client.delete(id);
        res.json({ message: 'Client deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.findById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const client = await Client.findById(id);
        res.json(client);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};