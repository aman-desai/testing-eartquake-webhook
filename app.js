express = require('express')
cors = require('cors')
bodyParser = require('body-parser')

port = process.env.PORT || 3000
app = express()
app.use(cors({optionsSuccessStatus: 200}));
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "webhook.site");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.post('/earthquake', (req, res) => {
    // var str = JSON.stringify(req.body)
    // var st = str.split("/(\r\n|\n|\r)/gm")
    // st.forEach(element => {
    //     console.log(element)
    // });
    console.log(Object.keys(req.body))    
    res.send('OK')
})

app.listen(port, ()=>{
    console.log("Listening to port ", port)
})