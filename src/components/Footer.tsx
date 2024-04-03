import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
   <footer className="bg-gray-800 text-white p-6 w-full">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
            <Image src="/music-logo.png" alt="Company Logo" width={80} height={80} className='mix-blend-screen'/>
            <p className="text-lg font-semibold ">Musika</p>
        </div>
        <ul className="flex mt-4 md:mt-0">
            <li className="mr-6"><a href="#" className="hover:text-gray-400">Home</a></li>
            <li className="mr-6"><a href="#" className="hover:text-gray-400">About</a></li>
            <li className="mr-6"><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
    </div>
</footer>

  )
}

export default Footer

