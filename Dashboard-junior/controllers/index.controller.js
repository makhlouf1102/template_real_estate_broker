const ReviewRequest = require('../models/review-request');
const User = require('../models/user');
const Client = require('../models/client');

exports.getLoginView = (req, res) => {
    res.render('login', { layout: 'layout' });
};

exports.getLogoutView = (req, res) => {
    res.render('logout', { layout: 'layout' });
};

exports.getReviewRequestsView = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const reviewRequest = await ReviewRequest.findById(id);
        console.log(reviewRequest);
        const user = await User.findById(reviewRequest.userId);
        const client = await Client.findById(reviewRequest.clientId);
        const clientName = client.name;
        const language = reviewRequest.language;
        const googleReviewLink = reviewRequest.requestLink;
        res.render('review-request-page', { userName: user.name, clientName: clientName, language: language, googleReviewLink: googleReviewLink, reviewRequestId: id });
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occurred while processing your request');
    }
};

exports.updateReviewRequest = async (req, res) => {
    try {
        const { comment, rating } = req.body;
        console.log(req.body);
        const reviewRequestId = req.params.id;
        console.log(reviewRequestId);
        const reviewRequest = await ReviewRequest.findById(reviewRequestId);
        console.log(reviewRequest);
        console.log(comment, rating);
        reviewRequest.reviewText = comment;
        reviewRequest.numberOfStars = rating;
        reviewRequest.status = 'completed';
        await reviewRequest.update();
        res.status(200).send('Review request updated successfully');
    } catch (error) {
        console.error('Error in updateReviewRequest:', error);
        res.status(500).send('An error occurred while updating the review request');
    }
};