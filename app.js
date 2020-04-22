express = require('express')
cors = require('cors')
bodyParser = require('body-parser')

port = process.env.PORT || 3000
app = express()
app.use(cors({optionsSuccessStatus: 200}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "webhook.site");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.post('/earthquake', (req, res) => {
    console.log(req.body)
    res.send('OK')
})

app.listen(port, ()=>{
    console.log("Listening to port ", port)
})