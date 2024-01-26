import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="p-4 sm:p-6 bg-black">
                <div className="mx-auto max-w-screen-xl">
                    <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-400 sm:text-center">© 2024 <Link href="/" className="hover:underline">Nitin Bhandekar</Link>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-6 text-gray-500 text-xs sm:justify-center uppercase sm:mt-0">
                          <span>web designed and developed by <Link href={"https://www.linkedin.com/in/abhishekkhare77/"} target='_blank' className='hover:underline'>Abhishek khare</Link></span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
