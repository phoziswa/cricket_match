const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const CricketScoreKeeper = require('./cricket_match');

const app = express();
const cricket_match = CricketScoreKeeper();

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('index', {
        currentScore: cricket_match. totalScore(),

    });

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, function () {
        console.log('App running on port', PORT);
    });

});
