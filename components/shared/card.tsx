
import Image from "next/image"

interface myCard {
    "heading": string,
    "description"?: string,
    "paragraph": string,
    "button"?:string,
    "url":string,
    "imageHeading":string
    }



    

export default function Card(props:myCard){
  const {heading, description, paragraph, button, url, imageHeading }=props

    return(
         <section>
            <div className="flex mt-10 items-center justify-center  ">
                 <div className="group  h-96 w-80  [perspective:1000px]">
                    <div className="relative h-full w-full rouded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0 ">
                            <h2 className="font-bold text-2xl absolute  gradient text-white p-2 rounded-xl">{imageHeading}</h2>
                            <Image src={url}  alt="image" height={"400"} width="400" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" />
                        </div>

                        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold">{heading}</h1>
                                <p className="text-lg mt-2">{description}</p>
                                <p className="text-base mt-2">{paragraph}</p>
                                <button className="mt-4 rounded-md link text-sm">Learn More</button>
                                
                            </div>

                        </div>

                    </div>

                 </div>

            </div>



         </section>
    )
}