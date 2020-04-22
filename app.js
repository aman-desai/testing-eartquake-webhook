express = require('express')
cors = require('cors')

port = process.env.PORT || 3000
app = express()
app.use(cors({optionsSuccessStatus: 200}));

app.post('/earthquake', (req, res) => {
    console.log(req.body)
    res.send('OK')
})

app.listen(port, ()=>{
    console.log("Listening to port ", port)
})