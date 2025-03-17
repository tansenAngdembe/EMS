const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI

const connectionDB = async()=>{
    try {
         await mongoose.connect(uri)
         console.log("Database connected succesfully")
        
    } catch (error) {
        console.error(error)
        process.exit(1)
        
    }
}

module.exports = connectionDB
