const app = require('express')()
const PORT = 8080

app.get('/number', (req, res) => {

    let min = req.query.min
    let max = req.query.max
    let type = req.query.type

    if(min === undefined){
        min = 0
    }
    if(max === undefined){
        max = 1
    }
    if(type === undefined){
        type = 'float'
    }


    function calculateRandomValue(){
        if(type != 'int' && type != 'integer'){
            return Math.random()*(max-min)+min.toString()
        }
        else{
            return Math.floor(Math.random()*(Math.floor(max)-Math.ceil(min))+Math.ceil(min)).toString()
        }
    }

    if(type == 'int' || type == 'integer' || type == 'float'){
        if(!isNaN(min) && !isNaN(max)){
            res.status(200).send({
                'value': calculateRandomValue(),
                'minimumPossibleValue': min,
                'maximunPossibleValue': max,
                'type': type
            })
        }
        else{
            res.status(422).send({
                'ERROR 422': 'Invalid min or max, please check the documentation.'
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