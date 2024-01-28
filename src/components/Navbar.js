"use client";
import Image from "next/image"
import Link from "next/link"
import { Bounce, Hinge } from "react-awesome-reveal";

const Navbar = () => {
    return (

        <div className="sticky top-0 z-10 w-full backdrop-blur-md">

            <nav className="border-gray-200 bg-black/50 shadow-sm shadow-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-10 md:px-0">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image alt="logo" src={"/logo.png"} className="invert h-8 w-16" height={100} width={200} />
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 ml-2 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                            <li>
                                <Link href="/" className="block font-bold transition-all delay-75 ease-in-out py-2 px-3 rounded md:bg-transparent md:p-0 text-white hover:text-blue-500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="block font-bold transition-all delay-75 ease-in-out  py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block font-bold transition-all delay-75 ease-in-out  py-2 px-3 rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold text-xs">Call us today</h1>
                        <Bounce className="-mt-2">
                            <span onClick={() => window.location.href = "tel:" + 9406366901} className="text-2xl font-extrabold transition-all delay-75 ease-in-out hover:text-blue-700 ">9406366901</span>
                        </Bounce>
                    </div>
                </div>
                <div className="border-t border-white">
                    <ul className="md:hidden font-medium flex justify-around p-2">
                        <li>
                            <Link href="/" className="block font-bold transition-all delay-75 ease-in-out  py-2 px-3 text-white rounded  md:border-0  md:p-0  md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block font-bold transition-all delay-75 ease-in-out  py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block font-bold transition-all delay-75 ease-in-out  py-2 px-3  rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
