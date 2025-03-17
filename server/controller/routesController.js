const e = require("express");
const Company = require("../models/Company")
const employee = require("../models/Employee")
const jwt = require("jsonwebtoken");


const secrect_key = process.env.KEY
const genToken = (payload) => {
    return jwt.sign(payload, secrect_key)
}

const company  = async (req,res)=>{
    try {
        const data = await Company.find().select("+password");
        if(!data){return res.status(401).json({success:false,msg:"Data not found"})}
        res.status(200).json({success:true,data})
        
    } catch (error) {
        res.status(500).json({success:false,error})
    }

}

const employee_company = async (req, res) => {
    const { id } = req.companyDetails
    console.log(id.toString())
    try {
        const company = await Company.findById(id.toString());
        if (!company) return res.status(401).json("Company not found")

        const Employees = employee(req.companyDetails);
        const allEmployee = await Employees.find();
        res.status(200).json({ success: true, company, allEmployee })
    } catch (error) {
        res.status(500).json({ success: false, msg: error })

    }

}


const createRegister = async (req, res) => {
    const { companyName, email, password, industry, companySize, phone, website, adddres } = await req.body;
    // console.log(data)
    try {
        const company = new Company({ companyName, email, password, industry, companySize, phone, website, adddres });
        const isCompanyExist = await Company.findOne({ email })
        if (isCompanyExist) return res.status(400).json({ msg: "Email already exit." })
        const token = genToken({ id: company?._id, companyName: company?.companyName, reg_date: company?.registerDate })
        await company.save();
        res.status(200).json({ success: true, value: company, token: token })

    } catch (error) {
        // console.error(error)
        res.status(500).json({ success: false, msg: error })
    }

}

const employeeRegister = async (req, res) => {
    const data = await req.body;
    // console.log(data)   
    try {
        const Employee = employee(req.companyDetails);
        const employees = new Employee(data)
        await employees.save()
        res.status(200).json({ success: true, employees })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: error })

    }

}

const login = async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body)
    try {
        const isExist = await Company.findOne({ email }).select("+password");
        // console.log(isExist)
        if (!isExist || !(await isExist.comparePassword(password))) { return res.status(500).json({ success: false, msg: "Invalid password!" }) }
        const token = genToken({ id: isExist?._id, companyName: isExist?.companyName, reg_date: isExist?.registerDate })
        console.log(isExist)
        res.status(200).json({ success: true, isExist, token })
    } catch (error) {
        res.status(501).json({ success: false, error })

    }

}


const delete_employe_company = async (req, res) => {
    const { id } = req.params
    // console.log(id) 
    try {
        const DeleteEmployee = employee(req.companyDetails)
        const deleteById = await DeleteEmployee.findByIdAndDelete(id);
        if (!deleteById) { return res.status(401).json({ success: false, msg: "Employee not found" }) };
        res.status(200).json({ success: true, msg: "Employee removed" })


    } catch (error) {

    }

}

const update_employee_comapny = async (req, res) => {

    try {
        const UpdateEmployee = employee(req.companyDetails);
        const update = await UpdateEmployee.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },//update only change fields
            { new: true, runValidators: true }
        )
        if (!update) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({success:true,msg:"Updated"})

    } catch (error) {
        res.status(501).json({success:false,msg:"Update failed"})

    }
}

module.exports = {
    company,
    employee_company,
    createRegister,
    employeeRegister,
    login,
    delete_employe_company,
    update_employee_comapny
}



