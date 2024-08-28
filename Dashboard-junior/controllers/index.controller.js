exports.getLoginView = (req, res) => {
    res.render('login', { layout: 'layout' });
};

exports.getLogoutView = (req, res) => {
    res.render('logout', { layout: 'layout' });
};

exports.getReviewRequestsView = (req, res) => {
    // example of url http://localhost:3000/review-request?userId=&client=Makhlouf%20Hennine&language=english&googleReviewLink=https%3A%2F%2Fx.com%2Fhome
    const userName = req.query.userName;
    const clientName = req.query.client;
    const language = req.query.language;
    const googleReviewLink = req.query.googleReviewLink;
    res.render('review-request-page', {userName: userName, clientName: clientName, language: language, googleReviewLink: googleReviewLink} );
};
