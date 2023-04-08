'use client'
import Image from "next/image"
import Link from "next/link";
import Typewriter from 'typewriter-effect';





export default function HeroSection() {
    return (
        <>


            <div className="h-screen bg-[url('/images/image.jpg')] bg-cover bg-scroll bg-center  overflow-hidden lg:flex">
                <div className=" w-56 lg:w-2/5 lg:flex items-end ">
                    <Image
                        src="/images/president.png"
                        alt="My Image"
                        width={"400"}
                        height="400"
                        className=" mx-4 lg:mx-auto   "
                    />

                </div>


                <div className="lg:w-3/5 lg:flex md:justify-center  flex-col m-4 mb-2">
                    <h1 className="font-bold text-2xl lg:text-5xl text-white">Presidential Initiative</h1>
                    <h3 className="font-semibold text-xl lg:text-3xl text-cyan-400">for Artificial Intelligence and Computing</h3>
                    <p className="mt-2 md:mt-10 text-sm lg:text-lg text-white  max-w-4xl">The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, blockchain and IoT.</p>



                 <div className="flex justify-between lg:block">
                      <div>
                          <h3 className="font-semibold text-xl lg:text-3xl text-cyan-400 mt-2 lg:mt-20">Our Courses</h3>
                          <h5 className="font-semibold text-lg lg:text-2xl text-white">
                             <Typewriter 
                                options={{
                                strings:[`Artificial Intelligence`,`Cloud Computing`,`Internet of Things`,`Blockchain Development`,`Web3.0 and Metaverse Development`],
                                autoStart:true,
                                loop:true
                               }}/>
                          </h5>

                     </div>
                    


                   <Link href={'https://portal.piaic.org/signup'}>  <button className="lg:mt-20 mt-2 bg-cyan-400 rounded-2xl h-8 w-24  text-center lg:w-32 lg:h-12 link text-[12px] lg:text-[16px]"> Apply</button></Link>
                  </div>  

                </div>



            </div>

        </>
    )
}