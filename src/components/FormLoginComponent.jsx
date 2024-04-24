import React from "react";
import Image from "next/image";

export default function FormLoginComponent() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="flex justify-center flex-1 mt-11 py-11">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex justify-between">
                            <Image src={"/assets/icons/logo.svg"} width={200} height={150} alt="logo"/>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl justify-start">Login</h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <span className="ml-3 text-white">Login</span>
                                    </button>
                                    <div className="mt-2">
                                        <div className="flex gap-2 pt-5">
                                            <p className="text-gray-600 text-sm">Don't have an account?</p>
                                            <a className="text-blue-700  text-sm underline" href="/register">Register
                                                here</a>
                                        </div>
                                    </div>
                                    <div className="my-4 border-b text-center">
                                        <div
                                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                            Continue with
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <button
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                                            <span>Google</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className=" mt-11 ">
                            &copy; 2024 My office. All rights reserved.
                        </p>
                    </div>
                    <div className="flex-text-center hidden lg:flex">
                        <Image src={"/assets/icons/login.svg"} width={500} height={50}  alt="photo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
