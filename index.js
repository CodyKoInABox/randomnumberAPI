const app = require('express')()
const PORT = 8080

app.get('/ping', (req, res) =>{
    res.status(200).send({
        'text': 'Pong!'
    })
})


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))