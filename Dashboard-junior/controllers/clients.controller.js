const Client = require('../models/client');

exports.findAll = async (req, res) => {
    try {
        const user_id = req.userId;
        const clients = await Client.findAllByUserId(user_id);
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const { name, last_name, phone} = req.body;
        const user_id = req.userId;
        const client = await Client.create(name, last_name, phone, user_id);
        res.status(201).json(client);
    } catch (error) {
        console.error("Error creating client:", error);
        res.status(500).json({ error: error.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const { name, last_name, phone, status } = req.body;
        const client = await Client.update(req.params.id, name, last_name, phone, status);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        await Client.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
