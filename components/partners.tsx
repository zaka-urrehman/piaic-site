
import Image from "next/image"
export default function Partners(){
    return(

        <div className="gradient4 py-16">
            <h3 className="font-bold  text-3xl  lg:text-5xl text-center text-cyan-900 mb-10">
                Strategic Partners
            </h3>

            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 ">
                <Image src={'/images/panacloudLogo.svg'} alt="logo" height={"200"} width={"200"} className=" w-[150px] lg:w-[250px]"/>
                <Image src={'/images/saylaniLogo.png'} alt="logo" height={"200"} width={"200"} className=" w-[150px] lg:w-[250px]"/>

            </div>


        </div>

    )
}