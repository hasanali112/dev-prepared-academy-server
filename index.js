const express = require ('express')
const app = express()
const cors = require ('cors')
const port = process.env.PORT || 5000;

//Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Dev Prepared academy is runnnig')
})


app.listen(port, ()=>{
    console.log(`Dev prepared server is running ${port}`)
})