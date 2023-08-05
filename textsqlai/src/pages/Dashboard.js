import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    
    return (
        <>
            <body class="h-screen bg-gray-50 dark:bg-slate-900">

                <div class="top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center py-4">

                        <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle Navigation</span>
                            <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>

                        <ol class="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
                            <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
                                TextToSQL
                                <svg class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </li>
                            <li class="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
                                Dashboard
                            </li>
                        </ol>

                    </div>
                </div>

                <div id="application-sidebar" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-20 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
                    <div class="px-6">
                        <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Dashboard</a>
                    </div>

                    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                        <ul class="space-y-1.5">
                            <li><Link to="/dashboard" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"></path>
                                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"></path>
                                </svg>
                                SQL Generator
                            </Link></li>

                            <li><Link to="/account" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                Account
                            </Link></li>
                        </ul>
                    </nav>
                </div>

                <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
                    <p class="mb-2 text-sm font-semibold text-blue-600">Starter Page</p>
                    <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">Convert text to SQL in Seconds</h1>
                    <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">This is a simple generator. Please write your text below.</p>

                    <div>
                        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10">
                            <div>
                                <h2 class="text-gray-800 text-3xl font-semibold">Your Text</h2>
                                <textarea class="w-full h-40 mt-4 text-gray-600 focus:outline-none" placeholder="Write your text here" type="text"></textarea>
                            </div>
                        </div>

                        <div class="ml-36 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                            <a class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                                </svg>
                                Get Result
                            </a>
                        </div>
                        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-8">
                            <div>
                                <h2 class="text-gray-800 text-3xl font-semibold">Result</h2>
                                <textarea class="w-full h-40 mt-4 text-gray-600 focus:outline-none" placeholder="Result Placeholder" type="text"></textarea>
                            </div>
                        </div>
                    </div>

                </div>

            </body>
        </>
    );
}

export default Dashboard;