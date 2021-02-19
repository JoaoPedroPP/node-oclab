const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())

app.get('/', (req, res) => {
    res.send("<h3>Hello from John Peter :)</h3>");
})

app.listen(app.get('port'), '0.0.0.0', () => {
    console.log(`Server up and running`);
});