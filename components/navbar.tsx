'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { icons } from "react-icons"
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"



export default function Navbar() {
    const [nav, SetNav] = useState(false)

    const handleNav = () => {
        SetNav(!nav)
    }




    return (
        <div className=" top-0 w-full h-20 shadow-md z-[100] scroll gradient">

            <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
                <Link className="mt-16" href={'/'} >
                    <Image src={'/images/logo.png'} alt="logo" height={'80'} width="80"  />

                </Link>
                <div>
                    {/* large screen  */}
                    <ul className="hidden md:flex items-center">
                        <li className="border-b border-transparent ml-10 text-sm text-cyan-500 uppercase border-gray-700 hover:boder-b hover:border-gray-300 hover:scale-110">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="border-b border-transparent ml-10 text-sm  text-cyan-500 uppercase border-gray-700 hover:boder-b hover:border-gray-300 hover:scale-110">
                            <Link href={'https://portal.piaic.org/signup'}>Apply</Link>
                        </li>
                        <li className="border-b border-transparent ml-10 text-sm  text-cyan-500 uppercase border-gray-700 hover:boder-b hover:border-gray-300 hover:scale-110 group relative:">
                            <Link href={'/'}>
                                Available Programs
                            </Link>
                            <ul className="  hidden group-hover:block absolute top-5 z-[110] gradient w-52" onClick={(e) => e.stopPropagation()}>
                                <li className="py-4 px-2"><Link href={"/"}>Artificial Intelligence</Link></li>
                                <li className="py-4 px-2"><Link href={"/"}>Cloud Native and Mobile Web Computing</Link></li>                               
                                <li className="py-4 px-2"><Link href={"/"}>Internet of Things</Link></li>
                                <li className="py-4 px-2"><Link href={"/"}>Web3 and Metaverse Development</Link></li>
                            </ul>
                        </li>
                        <li className="border-b border-transparent ml-10 text-sm  text-cyan-500 uppercase border-gray-700 hover:boder-b hover:border-gray-300 hover:scale-110">
                            <Link href={'/'}>How it Works</Link>
                        </li>
                        <li className="border-b border-transparent ml-10 text-sm  text-cyan-500 uppercase border-gray-700 hover:boder-b hover:border-gray-300 hover:scale-110">
                            <Link href={'/'}>About Us</Link>
                        </li>

                    </ul>


                    {/* mobile Screen Hamburger */}
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size="20" className="text-white"/>

                    </div>

                </div>





            </div>

                    

            <div className={`${nav ? "z-10 md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":""}`}>
                <div className={` ${ nav ? " left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen gradient2 p-10 ease-in duration-700":" fixed left-[-100%] top-0 ease-in "}`}>
                    <div className="flex w-full items-center justify-between">
                        <Link className="mt-16" href={'/'} >
                            <Image src={'/images/logo.png'} alt="logo" height={'100'} width="100" />
                        </Link>
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose size="20" />

                        </div>


                    </div>


                    <div className="mt-8">
                        <ul className="uppercase">
                            <li className="py-4 border-b border-gray-400  ">
                                <Link href={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="py-4 border-b border-gray-400 ">
                                <Link href={"https://portal.piaic.org/signup"}>
                                    Apply
                                </Link>
                            </li>
                            
                            <li className="py-4 border-b border-gray-400 relative group flex">
                                <Link href={"/"}>
                                    Available Programs
                                </Link>
                             <ul className=" hidden w-52 gradient2 group-hover:block  absolute top-0 mt-2 z-[110] left-44 " onClick={(e) => e.stopPropagation()}>
                                <li className="py-4 px-2 border-b border-gray-400"><Link href={"/"}>Artificial Intelligence</Link></li>
                                <li className="py-4 px-2 border-b border-gray-400 "><Link href={"/"}>Cloud Native and Mobile Web Computing</Link></li>                                
                                <li className="py-4 px-2 border-b border-gray-400 "><Link href={"/"}>Internet of Things</Link></li>
                                <li className="py-4 px-2 border-b border-gray-400 "><Link href={"/"}>Web3 and Metaverse Development</Link></li>
                             </ul>
                            </li>
                            
                            <li className="py-4 border-b border-gray-400 ">
                                <Link href={"/"}>
                                    How it Works
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link href={"/"}>
                                    About Us
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>


        </div>
    )
}