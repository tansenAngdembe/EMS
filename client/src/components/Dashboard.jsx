import React from 'react';
import { Users, UserPlus, Building2, DollarSign } from 'lucide-react';
import { Provider } from '../context/contextProvider';
import { all } from 'axios';
export function Dashboard() {
  const {companyData} = Provider();
  console.log(companyData?.company?.email)
  // console.log(companyData?.allEmployee?.find((val)=> val._id === "67d66dccf47c9747c0d03492"))
  const {company,allEmployee} = companyData;
  const total_employee = allEmployee?.length




  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome {company?.companyName} </h1>
        <p className="mt-2 text-gray-600">Your complete employee management solution</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Total Employees</h2>
              <p className="text-2xl font-bold text-blue-600">{total_employee}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <UserPlus className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">New Hires</h2>
              <p className="text-2xl font-bold text-green-600">{total_employee}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-full">
              <Building2 className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Departments</h2>
              <p className="text-2xl font-bold text-purple-600">0</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { action: 'New employee added', name: 'John Doe', department: 'Engineering' },
              { action: 'Salary updated', name: 'Jane Smith', department: 'Marketing' },
              { action: 'Position changed', name: 'Mike Johnson', department: 'Sales' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center py-2 border-b last:border-0">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.name} - {activity.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Department Distribution</h2>
          <div className="space-y-4">
            {[
              { department: 'Engineering', count: 45, percentage: 30 },
              { department: 'Marketing', count: 30, percentage: 20 },
              { department: 'Sales', count: 25, percentage: 17 },
              { department: 'HR', count: 15, percentage: 10 },
            ].map((dept, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{dept.department}</span>
                  <span className="font-medium text-gray-900">{dept.count} employees</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${dept.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}