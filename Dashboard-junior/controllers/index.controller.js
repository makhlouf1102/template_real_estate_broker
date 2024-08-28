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
        const reviewRequest = await ReviewRequest.findById(id);
        console.log(reviewRequest);
        const user = await User.findById(reviewRequest.userId);
        const client = await Client.findById(reviewRequest.clientId);
        console.log(client);
        console.log(user);
        const clientName = client.name;
        const language = reviewRequest.language;
        const googleReviewLink = reviewRequest.googleReviewLink;
        res.render('review-request-page', { userName: user.name, clientName: clientName, language: language, googleReviewLink: googleReviewLink, reviewRequestId: id });
    } catch (error) {
        console.error('Error in getReviewRequestsView:', error);
        console.log(error);
        res.status(500).send('An error occurred while processing your request');
    }
};
