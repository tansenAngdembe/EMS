const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const schema = mongoose.Schema({
    companyName: {
        type: String,
        unique: true,
        trim: true,
        required: true,

    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: [8, "Minimun 8 characters required. Got only {VALUE} sharacters"],
        max: 50,
        select: false

    },
    industry: {
        type: String,
        trim: true,
        required: true

    },
    companySize: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: Number,
        trim: true,
        min: [10, "Min 10 number required!"],
        unique: true
    },
    website: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    registerDate: {
        type: Date,
        default: Date.now()

    }

})
//middleware to hash the password before saving to collection
schema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})
// schema.methods.create_company_collection = async function(param){
//     const {companyName,id} = param
//     const collection_name = `${companyName}_${id.toString().slice(-6)}`

//     console.log(id.toString().slice(-6))

//     let newModel;//check if the model already exit to avoid (re-registering)
//     if(newModel){
//         newModel = mongoose.model(collection_name)
//     }else{
//         newModel = mongoose.model(collection_name,Employee)
//     }

//     return newModel;
// }
schema.methods.comparePassword = async function (password) {
    if (!this.password || !password) { throw new Error("Password is required") };
    return await bcrypt.compare(password, this.password);
}
const Company = mongoose.model("companie", schema);

module.exports = Company;



