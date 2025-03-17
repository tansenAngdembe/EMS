import { useEffect, useState } from "react";
import { Users, UserPlus,Pencil,Trash2 } from "lucide-react"
import { EmployeeForm } from "./Employform";
import { Provider } from "../context/contextProvider";
import { delete_company_employe } from "../services/api";

const EmployeeManagement = () => {
  const {token, companyData,fetchData } = Provider()  
  const [showForm, setShowForm] = useState({
    id:"",
    status:false,
    text:""
    })
  const {allEmployee} = companyData;

  //to delete the employee
  const handleDeleteEmployee =async (id)=>{
      const confirm = window.confirm(`Are you sure you want to delete employee. With id ${id}`)     
      if(!confirm) return;
      const res =await delete_company_employe(id,token)
     
      if(res || res.data.status === 200) {
        alert("employe delted sucessfully")
        await fetchData()
      }else{
        alert("token not found")
      }
    
    
  }


  return (
    <div className={`p-6 realitive`}>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Employee Management</h1>
        </div>
        <button
          onClick={() => setShowForm((prev)=>({...prev,id:"ADDNEWEMPLOYEE",status:true,text : "Add New Employee"}))}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <UserPlus size={20} />
          <span>Add Employee</span>
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hire Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Salary
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allEmployee?.map((employee) => (
              <tr key={employee?._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {employee?.firstName} {employee?.lastName}
                  </div>
                  <div className="text-sm text-gray-500">{employee?.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{employee?.email}</div>
                  <div className="text-sm text-gray-500">{employee?.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {employee?.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {/* {new Date(employee.date).toLocaleDateString()} */}
                  {employee?.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  NPR {employee?.salary.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => setShowForm((prev)=>({...prev,id:employee?._id,name:employee?.firstName, status:true,text:"Update Employee."})) }
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteEmployee(employee?._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm.status && (
        <EmployeeForm
          openForm = {showForm}
          onClose={setShowForm}

        />
      )}
    </div>
  );
}

export default EmployeeManagement;