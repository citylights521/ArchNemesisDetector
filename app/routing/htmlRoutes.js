


//exports module function for sever calls
module.exports = function (app, path, rootPath) {
    //GET Route to `/survey` which should display the survey page.
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(rootPath, 'app/public/survey.html'));
    });

    //default, catch-all route that leads to `home.html` which displays the home page.
    app.get('/*', function (req, res) {
        res.sendFile(path.join(rootPath, 'app/public/home.html'));
    });
};

