const app = require('express')()
const PORT = 8080

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/number', (req, res) => {

    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });

    let min = req.query.min
    let max = req.query.max
    let type = req.query.type

    if(min === undefined){
        min = 0
    }
    else{
        min = parseInt(min)
    }
    if(max === undefined){
        max = 1
    }
    else{
        max = parseInt(max)
    }
    if(type === undefined){
        type = 'float'
    }

    function calculateRandomValue(){
        if(type == 'float'){
            console.log(min)
            console.log(max)
            console.log(max-min)
            return ((Math.random() * (max - min)) + min)
        }
        else{
            return Math.floor(Math.random()*(Math.floor(max)-Math.ceil(min))+Math.ceil(min)).toString()
        }
    }

    if(type == 'int' || type == 'integer' || type == 'float'){
        if(!isNaN(min) && !isNaN(max)){
            res.status(200).send({
                'value': calculateRandomValue(),
                'minimum': min,
                'maximum': max,
                'type': type
            })
        }
        else{
            res.status(422).send({
                'ERROR 422': 'Invalid min or max values, please check the documentation.'
            })
        }
    }
    else{
        res.status(422).send({
            'ERROR 422': 'Invalid type, please check the documentation.'
        })
    }
})

app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`)
})

module.exports = app;