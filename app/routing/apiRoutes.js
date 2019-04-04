
var archNemesis = require("../data/archNemesis.js");
console.log("api routes loaded");

module.exports = function (app, path, rootPath) {
    //GET GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    // Displays all characters
    app.get("/api/nemesis", function (req, res) {
        return res.json(archNemesis.surveyResults);

    });

    //POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/nemesis", function (req, res) {

    });
};

