import Image from "next/image";
import Card from "./shared/card";
import Cards from "./shared/contentfulCard";



export default function Programs() {
    return (
        <section className="gradient2 p-4">

            <h3 className="text-cyan-800 font-bold text-4xl text-center ">
                Available Programs
            </h3>


            <div className="p-4">
                {/* @ts-ignore */}
            <Cards/>
            </div>

            {/* <div className="lg:flex space-x-6 lg:flex-wrap lg:justify-center"> */}       
        {/* <Card imageHeading="Web 3.0 and Metaverse" url="/images/metaverse.jpg" heading="Web 3.0 and Metaverse" paragraph="hello i am paragraph"/>
            <Card imageHeading="Artificial Intelligence" url="/images/artificial-intelligence.jpg" heading="Artificial Intelligence" paragraph="hello i am paragraph"/>
            <Card imageHeading="Internet of Things" url="/images/IOT.jpg" heading="Internet of Things" paragraph="hello i am paragraph" />
            <Card imageHeading="Cloud Computing" url="/images/cloud.jpg" heading="Cloud Computing" paragraph="hello i am paragraph" /> */}
            {/* </div> */}
            




        </section>
    )

}