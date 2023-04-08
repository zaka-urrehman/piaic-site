import ImageSlider from "@/components/Images";
import HeroSection from "@/components/hero";
import Partners from "@/components/partners";
import Programs from "@/components/programs";




const images = [
'/images/piaic1.jpg',
'/images/piaic2.jpg',
'/images/piaic3.jpg'

]

 
export default function Home(){
  return(
    <>
    <HeroSection/>
    <Programs/>
   
    
    <ImageSlider images={images}   /> 

    <Partners/>
    
    </>
  )
}













