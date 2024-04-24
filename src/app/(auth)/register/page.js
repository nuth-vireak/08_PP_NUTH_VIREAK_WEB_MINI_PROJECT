"use client";

import Image from "next/image";
import signupAction from "@/actions/signupAction";
import {useForm} from "react-hook-form";

function RegisterPage() {

    const {
        handleSubmit,
        formState: {errors},
        register,
    } = useForm();

    const handleUserRegister = async (data) => {
        console.log(data);
        await signupAction(data);
    };

    return (
        <div className=" flex justify-center">
            <div className=" sm:rounded-lg flex justify-center flex-1 mt-11 py-11">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="flex justify-between">
                        <Image src={"/assets/icons/logo.svg"} width={250} height={150} alt="logo"/>
                    </div>
                    <form
                        onSubmit={handleSubmit(handleUserRegister)}
                    >
                        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-11 ">
                            <div>
                                <label
                                    form="firstname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                                >
                                    First name
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                                    placeholder="first name"
                                    {...register("firstname", {
                                        required: "First name cannot be empty.",
                                    })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    form="lastname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                                    placeholder="last name"
                                    {...register("lastname", {
                                        required: "Last name cannot be empty.",
                                    })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    form="company"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="company"
                                    className="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                                    placeholder="example@example.com"
                                    {...register("email", {
                                        required: "Email cannot be empty.",
                                    })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    form="phone"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Gender
                                </label>
                                <select id="gender"
                                        {...register("gender", {
                                            required: "Please select your gender.",
                                        })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>male</option>
                                    <option>female</option>
                                </select>
                            </div>
                            <div>
                                <label form="website"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="website"
                                    className="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                                    placeholder="××××××××××××××" required
                                    {...register("password", {
                                        required: "Password cannot be empty.",
                                    })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    form="visitors"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    id="visitors"
                                    className="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                                    placeholder="××××××××××××××"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex-text-center hidden lg:flex">
                    <Image src={"/assets/icons/sign-up.svg"} width={500} height={50} alt='photo'/>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;