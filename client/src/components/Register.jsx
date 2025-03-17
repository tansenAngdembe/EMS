import React, { useState } from 'react';
// import axios from "axios"
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useForm } from "react-hook-form"
import { company_register } from '../services/api';
import { Provider } from '../context/contextProvider';

function Register() {
    const { company } = Provider()

    // const uri = import.meta.env.VITE_API_URL;
    const [showPassword, setShowPassword] = useState("password")
    const [showPassword2, setShowPassword2] = useState("password")

    const { register, handleSubmit, watch, reset,
        formState: { errors }
    } = useForm()

    const onSubmitVal = async (data) => {
        // console.log(data)
        const res = await company_register(data)
        if (res?.data?.success) {
            sessionStorage.setItem("token", res.data.token)
            localStorage.setItem("val", res.data.token)
            window.location.href = "/dashboard"
        }

        reset()
    }
    const passowrd = watch("password") // get the current value of password

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link to="/" className="flex items-center">
                            <Building2 className="h-8 w-8 text-blue-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">WorkSphere</span>
                        </Link>
                        <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white shadow-lg rounded-lg px-8 py-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Register Your Company</h2>

                        <form onSubmit={handleSubmit(onSubmitVal)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        {...register("companyName", {
                                            required: "Company name is required",
                                            pattern: {
                                                value: /^[A-Za-z0-9\s]{3,50}$/,
                                                message: "Too short compay name atleast is should be 3."
                                            },
                                            validate: (value) => {
                                                const compare = company.find(val => val.companyName === value.trim())
                                                return !compare || "Company already exist!"
                                            }
                                        })}
                                        id="companyName"
                                        required
                                        className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"

                                    />
                                    {errors.companyName && <p className='text-red-500'>{errors.companyName.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Business Email *
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Invalid email format"
                                            },
                                            validate: (value) => {
                                                const comp = company.find(val => val.email === value.trim())
                                                return !comp || "Email already exist."

                                            }
                                        })}
                                        id="email"
                                        required
                                        className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    // value={formData.email}
                                    // onChange={handleChange}
                                    />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password *
                                    </label>
                                    <input
                                        type={showPassword}
                                        {...register("password", {
                                            required: "Password is required",
                                            pattern: {
                                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
                                                message: "Passowrd should contain atleast one Uppercase,lowercase, symbols, number and aleast 8 characters!,"
                                            }
                                        })}
                                        id="password"
                                        required
                                        className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    // value={formData.password}
                                    // onChange={handleChange}
                                    />
                                    {
                                        showPassword === "password" ? <EyeOff onClick={() => setShowPassword("text")} /> : <Eye onClick={() => setShowPassword("password")} />
                                    }
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                        Confirm Password *
                                    </label>
                                    <input
                                        type={showPassword2}
                                        name="confirmPassword"
                                        {...register("confirmPassword", {
                                            required: "Confirm Password is required",
                                            validate: (value) => value === passowrd || "Password do not match"
                                        })}
                                        id="confirmPassword"
                                        required
                                        className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    // value={formData.confirmPassword}
                                    // onChange={handleChange}
                                    />
                                    {
                                        showPassword2 === "password" ? <EyeOff onClick={() => setShowPassword2("text")} /> : <Eye onClick={() => setShowPassword2("password")} />
                                    }
                                    {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                                        Industry *
                                    </label>
                                    <select
                                        {...register("industry")}
                                        id="industry"
                                        required
                                        className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    // value={formData.industry}
                                    // onChange={handleChange}
                                    >
                                        <option value="None">Select Industry</option>
                                        <option value="technology">Technology</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="finance">Finance</option>
                                        <option value="retail">Retail</option>
                                        <option value="manufacturing">Manufacturing</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
                                        Company Size *
                                    </label>
                                    <select
                                        name="companySize"
                                        {...register("companySize")}
                                        id="companySize"
                                        required
                                        className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    // value={formData.companySize}
                                    // onChange={handleChange}
                                    >
                                        <option value="0">Select Size</option>
                                        <option value="1-10">1-10 employees</option>
                                        <option value="11-50">11-50 employees</option>
                                        <option value="51-200">51-200 employees</option>
                                        <option value="201-500">201-500 employees</option>
                                        <option value="501+">501+ employees</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        {...register("phone", {
                                            pattern: {
                                                value: /^\+?[1-9]\d{3,9}$/,
                                                message: "Invalid phone number"
                                            },
                                            validate: (value) => {                                                
                                                    const isphoneExist = company.find((val) => String(val.phone) === String(value))
                                                    return !isphoneExist || "This phone number already exist!"
                                                
                                            }

                                        })}
                                        id="phone"
                                        className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"                                    
                                    />
                                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                        Company Website
                                    </label>
                                    <input
                                        type="url"
                                        {...register("website", {
                                            pattern: {
                                                value: /^(https?:\/\/)?(www\.)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                                                message: "Invalid url!"
                                            }
                                        })}
                                        id="website"
                                        className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"

                                    />
                                    {errors.website && <p className='text-red-500'>{errors.website.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                    Business Address
                                </label>
                                <input
                                    type="text"

                                    {...register("address", {
                                        pattern: {
                                            value: /^[A-Za-z\d\s]{4,20}$/,
                                            message: "Address should only contain letters and numbers.Aleast 3 characters."

                                        }
                                    })}
                                    id="address"
                                    className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"

                                />
                                {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <p className="text-sm text-gray-600">* Required fields</p>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Create Account
                                </button>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-600">
                                    Already have an account?{' '}
                                    <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;