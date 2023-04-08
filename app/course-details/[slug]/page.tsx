import Card from "@/components/shared/card"
import SmallCard from "@/components/shared/smallcard"
import Timeline from "@/components/shared/verticalTimeline";


async function getDetails() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=courseDetails`, { cache: 'no-store' });

    // &fields.slug=${slug}

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}













export default async function GiveName({ params }: { params: { slug: string } }) {

    const details = await getDetails()

    return (
        <section>

            {details.items.map((detail: any) => (
                <div key={detail.sys.id}>
                    {params.slug == detail.fields.slug ?
                        (<div>
                            <div className="top-0 w-full gradient4 h-[450px] pt-24 px-4">
                                <h1 className=" text-center text-3xl lg:text-5xl text-cyan-200 font-bold ">{detail.fields.title}</h1>
                                <p className="text-center mt-20 text-lg lg:text-xl mx-auto max-w-4xl text-white font-semibold ">{detail.fields.descriptionForTitle}</p>
                            </div>



                            <div className="py-10 p-6">
                                <h3 className=" mt-10 font-bold text-2xl lg:text-4xl text-center text-cyan-600"> Program Structure</h3>
                                <p className=" mt-8 font-semibold text-xl lg:text-2xl text-center max-w-3xl mx-auto  ">{detail.fields.descriptionForProgramStructure}</p>


                            </div>

                            <div className="p-4 lg:flex lg:justify-around flex-wrap">


                                <SmallCard quarterNum={1} description={detail.fields.q2description} />
                                <SmallCard quarterNum={2} description={detail.fields.q2description} />
                                <SmallCard quarterNum={3} description={detail.fields.q3description} />
                                <SmallCard quarterNum={4} description={detail.fields.q4description} />

                            </div>


                            <div className="mb-10">
                                <Timeline />
                            </div>





                        </div>)


                        :


                        (<div  className="h-screen w-screen flex justify-center items-center -z-20 absolute top-0">
                            <div className="-z-10 font-bold text-4xl absolute">
                                Error:Page not Found
                            </div>
                        </div>)}
















                </div>


            ))}




            {/* <div className="top-0 w-full gradient4 h-[450px] pt-24 px-4">
                <h1 className=" text-center text-3xl lg:text-5xl text-cyan-200 font-bold ">Artificial Intelligence</h1>
                <p className="text-center mt-20 text-lg lg:text-xl mx-auto max-w-4xl text-white font-semibold ">A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
                    GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI. study program from basic to advance</p>
            </div>



            <div className="py-10 p-6">
                <h3 className=" mt-10 font-bold text-2xl lg:text-4xl text-center text-cyan-600"> Program Structure</h3>
                <p className=" mt-8 font-semibold text-xl lg:text-2xl text-center max-w-3xl mx-auto  ">A four-quarter AI program in Data Science, Machine Learning, and Deep Learning.</p>


            </div>

            <div className="p-4 lg:flex lg:justify-between">
                
                
              <SmallCard quarterNum={1} description="AI foundations" />
              <SmallCard quarterNum={2} description="AI foundations" />
              <SmallCard quarterNum={3} description="AI foundations" />
              <SmallCard quarterNum={4} description="AI foundations" />
               
            </div> */}


            <div>
                {/* My name is {params.courses} */}
            </div>
        </section>
    )
}