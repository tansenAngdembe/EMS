const express = require("express")

const {createRegister,employeeRegister,employee_company, login,
    delete_employe_company,
    update_employee_comapny,
    company
} = require("../controller/routesController")
const authVerifyMiddleware = require("../middleware/authVerify")

const router = express.Router()

router.get("/company",company)

router.get("/company_details",authVerifyMiddleware,employee_company)
router.post("/register",createRegister)
router.post("/register/employee",authVerifyMiddleware,employeeRegister)
router.post("/login",login)
router.delete("/delete/:id",authVerifyMiddleware,delete_employe_company)
router.patch("/update/:id",authVerifyMiddleware,update_employee_comapny)



module.exports = router;
