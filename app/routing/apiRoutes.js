
//requires archnemesis.js
var archNemesis = require("../data/archNemesis.js");
console.log("api routes loaded");

module.exports = function (app, path, rootPath) {
    // Displays all nemesis'
    app.get("/api/nemesis", function (req, res) {
        return res.json(archNemesis.surveyResults);

    });

    //this section of code compares the difference between the current user's scores against those from other users, question by question. The differences are added to calculate the total difference. The absolute value of the differences is used.
    app.post("/api/nemesis", function (req, res) {
        var newNemesis = req.body;
        newNemesis.routeName = newNemesis.name.replace(/\s+/g, "").toLowerCase();

        var newNemesisScores = newNemesis.scores;

        var nemIndex = -1;
        var prevTotalDifference = 0;
        for (let i = 0; i < archNemesis.surveyResults.length; i++) {
            const currentNem = archNemesis.surveyResults[i];
            var currentNemScores = currentNem.scores;
            if (currentNemScores.length != newNemesisScores.length)
            {
                throw "Nemesis data is not comprable";
            }

            //finds the user with the biggest different in survey score (closest match is the user with the biggest amount of difference)
            var totalDifference = 0;
            for (let j = 0; j < currentNemScores.length; j++) {
                const currentNemScore = currentNemScores[j];
                var currentNewNemScore = newNemesisScores[j];
                totalDifference += Math.abs(currentNemScore - currentNewNemScore);
            }
            if (totalDifference > prevTotalDifference)
            {
                nemIndex = i;
            }
            prevTotalDifference = totalDifference;
        }

        //pushes users survey results into the survey results array as can be viewed at /api/nemesis
        archNemesis.surveyResults.push(newNemesis);
        res.json(archNemesis.surveyResults[nemIndex]);
    });
};

