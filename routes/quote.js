const { Router } = require('express');
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
        author: "Profe Mati",
        text: "No cambies el puerto, NO NUNCA EL FOR. Yo soy el demonio"
    },

];

router.get("/", (req, res) => {
    res.render("principal")
});


router.get('/quotes', function(req, res) {
    res.render('quotes', {quotes:quotes});
});


router.post('/quotes', function (req,res) {
    let info = req.body;
    quotes.push({author: info.author, text: info.text})
    console.log(quotes);
    res.render('quotes', {quotes : quotes});

});

  

module.exports = router;