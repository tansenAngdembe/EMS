const mongoose = require("mongoose")
const Company = require("./Company")

const Employee = ({id,companyName}) => {
    const modelName = companyName.trim().split(" ").join("_") + id.toString().slice(-6)
    if(mongoose.models[modelName]){
        return mongoose.models[modelName]
    }

    return mongoose.model(modelName,
        mongoose.Schema({
            firstName: {
                type: String,
                trim: true,
                required: true
            },
            lastName: {
                type: String,
                trim: true,
                required: true
            },
            email: {
                type: String,
                unique: true,
                trim: true,
                required: true
            },
            phone: {
                type: Number,
                trim: true,
                min:[10,"Min 10 number required!"],
                unique:true
            },
            department: {
                type: String,
                trim: true,
                required: true
            },
            position: {
                type: String,
                trim: true,
                required: true
            },
            date: {
                type: String,
                required: true,
                trim: true

            },
            salary: {
                type: Number,
                trim: true,
                required: true
            }
        }),
        modelName// this force mongoose to use exactly this collection form MongoDb
    )
}
module.exports = Employee;


