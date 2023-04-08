'use client'
{/* <div className="bg-gradient-to-tr from-gray-200 to-cyan-800 h-full w-screen"></div> */ }



import Image from 'next/image';
import { useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination, Autoplay]);


interface Props {
    images: string[];
    
   
}

const ImageSlider: React.FC<Props> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className="relative w-full  h-fit p-10 gradient">
            <Swiper
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                onSlideChange={handleSlideChange}
                
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className='grid lg:grid-cols-[1fr,28rem] gap-4 '>
                            {/* <div
                                className="w-full h-[600px] bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                            ></div> */}
                            <div>
                                <Image src={`${image}`} alt='PIAIC image' height={'1000'} width={'1000'} className=' h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] w-full' />
                            </div>
                            <p className='text-white my-auto mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti debitis commodi! Fuga corporis officia explicabo consequuntur facilis rerum at! Architecto ipsam deleniti voluptatem nulla quas aut quos similique enim!</p>
                          
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-o left-0 right-0 text-center">
                {images.map((image, index) => (
                    <span
                        key={index}
                        className={`inline-block w-3 h-3 rounded-full mx-1 ${activeIndex === index ? 'bg-gray-300' : 'bg-gray-700'
                            }`}
                    ></span>
                ))}
            </div>

        </div>
    );
};

export default ImageSlider;




