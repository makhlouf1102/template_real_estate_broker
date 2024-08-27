exports.create = async (req, res) => {
    try {
        const { clientId, language, googleReviewLink } = req.body;
        console.log(clientId, language, googleReviewLink);
        // const reviewRequest = await ReviewRequest.create({ clientId, language, message });
        res.status(201).json({ message: 'Review request created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}