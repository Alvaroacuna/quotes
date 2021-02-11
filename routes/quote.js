const { Router } = require('express');
const { QuoteNew } = require('../db');


const router = Router();

const quotes = [
    {
        author: "Diego Maradona",
        text: "Ehhhh........."
    },
    {
        author: "Cristiano Ronaldo",
        text: "Siiiuuuuuuuuuu"
    },
    {
        author: "Lionel Messi",
        text: "Lo siento, pero no se me da"
    },
    {
        author: "Alexis Sánchez",
        text: "Mi intindi"
    }

];

router.get("/", async (req, res) => {
    const quotesnew = await QuoteNew.findAll();
    res.render("principal", {quotes: quotesnew})
});


router.get('/quotes', function(req, res) {
    res.render('quotes', {quotes:quotes});
});


router.post('/quotes', async (req,res) => {
    const new_quotes = await QuoteNew.create({
        author: req.body.author,
        text: req.body.text
    });
    const quotesnew = await QuoteNew.findAll();

    /*let info = req.body;
    quotes.push({author: info.author, text: info.text})
    console.log(quotes); */
    res.render('quotes', {quotes : quotesnew});

});

  

module.exports = router;