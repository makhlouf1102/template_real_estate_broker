const ReviewRequest = require('../models/review-request');

exports.create = async (req, res) => {
    try {
        const userId = req.userId;
        const { clientId, language, googleReviewLink } = req.body;
        const reviewRequest = await ReviewRequest.create(googleReviewLink, "pending", null, null, userId, clientId, language);
        console.log(reviewRequest);
        res.status(201).json({ message: 'Review request created successfully', reviewRequest });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}