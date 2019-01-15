const express = require('express')
var bodyParser = require('body-parser')
const getArea = require('./area')

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('App listening on port '+ PORT))

app.get('/getArea', (req, res) => {
    var array = []
    array.push(parseInt(req.query.side1))
    array.push(parseInt(req.query.side2))
    res.status(200)
    var area = getArea(array)
    res.json({"area":area})
})

