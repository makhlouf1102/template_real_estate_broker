exports.getLoginView = (req, res) => {
    res.render('login', { layout: 'layout' });
};

exports.getLogoutView = (req, res) => {
    res.render('logout', { layout: 'layout' });
};
