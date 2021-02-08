const express = require("express");
const session = require('express-session');
const app = express();
const port = 8001;

app.use('/static', express.static("static"));

// Esto establece la ubicación donde express buscará la vista ejs
app.set('views', __dirname + '/vistas'); 
// Ahora configuremos el motor de visualización para que express sepa que estamos usando ejs en lugar de otro motor de jade
app.set('view engine', 'ejs');

app.use(session({secret: 'holaquetal'})); 

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );








app.use(require('./routes/quote'));

app.listen( port, () => console.log(`Listening on port: ${port}`) );