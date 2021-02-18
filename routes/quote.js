const { Router } = require('express');
const { QuoteNew } = require('../db');


const router = Router();

/*const quotes = [
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

]; */

router.get("/", async (req, res) => {
    const quotesnew = await QuoteNew.findAll();

    let mensaje = req.flash('mensaje');
        console.log(mensaje);

    res.render("principal", {quotes: quotesnew, mensaje : mensaje})
});


router.get('/quotes', function(req, res) {
    res.render('quotes', {quotes:quotes});
});

router.get('/borrar/:id', async (req,res) => {

    const quote = await QuoteNew.findByPk(req.params.id);
    console.log(quote);
    console.log("Llegó el dato" + req.params.id);
    await quote.destroy();

    req.flash('mensaje', `El quote ${quote.text} fue eliminado de la base de datos.`);

    res.json({Estado: true, Mensaje: `El quote ${quote.id} fue eliminado de la base de datos.` });
});

router.post('/actualizar/:id', async (req,res) => {

    console.log("Llegó el ID" + req.params.id);
    console.log("Del formulario Editado llegó este author: " + req.body.author);
    console.log("Del formulario Editado llegó este text: " + req.body.text);

    const quote = await QuoteNew.findByPk(req.params.id);
    quote.text = req.body.text;
    quote.author = req.body.author;
    await quote.save();

    req.flash('mensaje', `El quote de ${quote.author} fue actualizado.`);

    res.redirect('/');


});


router.post('/quotes', async (req,res) => {
    const new_quotes = await QuoteNew.create({
        author: req.body.author,
        text: req.body.text
    });
    
    req.flash('mensaje', `El quote ${new_quotes.text} fue creado en la base de datos.`);


    const quotesnew = await QuoteNew.findAll();

    /*let info = req.body;
    quotes.push({author: info.author, text: info.text})
    console.log(quotes); */
    res.render('quotes', {quotes : quotesnew});

});

router.get("/editar/:id", async (req, res) => {

    console.log("Llegó el ID" + req.params.id);
    const quote = await QuoteNew.findByPk(req.params.id);
    let mensaje = req.flash('mensaje');
        console.log(mensaje);

    
    res.render("editar", {quote: quote, mensaje : mensaje})
});

  

module.exports = router;