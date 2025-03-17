import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { employee_register, update_company_employee } from '../services/api';

import { Provider } from '../context/contextProvider';
import { details } from '../services/api';
import { useCallback, useEffect } from 'react';


export function EmployeeForm({ openForm, onClose }) {
  const { token, fetchData, companyData } = Provider()
  const employeeData = companyData.allEmployee.find((val) => val._id === openForm.id)
  const {
    register, handleSubmit, reset,
    formState: { errors }
  } = useForm();
  // to validate email
 
  useEffect(() => {
   if(openForm.text !== "ADDNEWEMPLOYEE" && employeeData){
    const value = {
      firstName: employeeData.firstName || "",
      lastName: employeeData.lastName || "",
      email: employeeData.email || "",
      phone: employeeData.phone || "",
      department: employeeData.department || "",
      position: employeeData.position || "",
      date: employeeData.date || "",
      salary: employeeData.salary || ""
    }
  
      reset(value)
   }
  }, [openForm.text, employeeData, reset])
  const submitForm = async (data) => {
    if (openForm.id === "ADDNEWEMPLOYEE") {
      const res = await employee_register(data, token);
      await fetchData()

      if (res.data.success) {
        onClose(false)
        alert("New employee added.")
        reset()
      }

    } else {
      const id = openForm.id
      const res_data = await update_company_employee(id, data, token); 
      await fetchData();
      if (res_data) {
        onClose(false)
        alert("Updated")
        // reset()

      }
    }


  }

  const time = new Date().toISOString().split("T")[0]

  return (
    <div className="absolute top-0 bg-gray-300 bg-opecity-100 z-5 flex items-center justify-center p-4 w-355 h-full">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {openForm.text} <span className='text-green-400 text-sm'>{openForm.name}</span>
          </h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={() => onClose(false)}>
            <X size={24} />

          </button>
        </div>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name*</label>
              <input
                type="text"
                required
                {...register("firstName", {
                  required: "First name is required.",
                  pattern: {
                    value: /^[A-Za-z\s]{3,50}$/,
                    message: "Shouldn't contain number and required min 3 letters required."
                  }
                })}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                required
                {...register("lastName", {
                  required: "Last name is required.",
                  pattern: {
                    value: /^[A-Za-z\s]{3,50}$/,
                    message: "Shouldn't contain number and min 3 letters required."
                  }

                })}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format"
                },
                validate:(value)=> {
                  if(openForm.id === "ADDNEWEMPLOYEE"){

                    const isExist = companyData.allEmployee.find((val)=> val.email === value)
                    return !isExist || "This email already exit!"
                  }
                  return;
                }
              })}

              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              {...register("phone", {
                pattern: {
                  value: /^\+?[1-9]\d{3,9}$/,
                  message: "Invalid phone number"
                },
                validate:(value)=>{
                  if(openForm.id === "ADDNEWEMPLOYEE"){
                    const  isphoneExist = companyData.allEmployee.find((val)=> String(val.phone) === String(value))
                    return !isphoneExist || "This phone number already exist!"

                  }
                  return ;

                }

              })}
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                required
                {...register("department", {
                  required: "Department is required",
                  pattern: {
                    value: /^[A-Za-z\s\&()]{2,20}$/,
                    message: "Shouldn't contain number. Min 2 letters"
                  }
                })}

                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.department && <p className='text-red-500'>{errors.department.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                required
                {...register("position", {
                  required: "Position is required",
                  pattern: {
                    value: /^[A-Za-z\s\&()]{2,20}$/,
                    message: "Shouldn't contain number. Min 2 letters"
                  }
                })}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.position && <p className='text-red-500'>{errors.position.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Hire Date</label>
              <input
                type="date"
                {...register("date", {
                  required: "Hired date is required",
                  validate: (value) => value <= time || "Future date is not allowed."
                })}
                required
                // value={formData.hire_date}
                // onChange={(e) => setFormData({ ...formData, hire_date: e.target.value })}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="number"
                required
                {...register("salary", {
                  required: "Salary is required",
                  pattern: {
                    value: /^\d{3,}$/,
                    message: "Only number is valid."
                  }
                })}

                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.salary && <p className='text-red-500'>{errors.salary.message}</p>}
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {openForm.text}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}