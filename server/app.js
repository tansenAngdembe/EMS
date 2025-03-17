require("dotenv").config()
const express = require('express')

const body_parser = require("body-parser")
const cors = require("cors")

const connectionDB = require("./connectionDB")
const central = require("./routers/router")

const app = express();
const PORT = process.env.PORT || 5000;


// using build-in middleware
app.use(body_parser.json())
app.use(cors({
    origin:"*",
    methods: ["GET", "POST","PATCH", "PUT", "DELETE","OPTIONS"], //Allow OPTIONS for preflight // preflight mean making the call before actual call to the server. and it return 
    //some http headers like Methods, Headers than make it actual call 
    allowedHeaders: ["Content-Type", "Authorization"],  //ALLOW ONLY NECESSARY HEADERS
    // credentials:true,

}))


app.use("/api",central)

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Working"})
})


const start = async ()=>{
    try {
        await connectionDB()
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}.`)
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
start();

