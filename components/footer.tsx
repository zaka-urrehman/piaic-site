import Image from "next/image";
import Link from "next/link";



export default function Footer() {
    return (
        <div className=" bg-cyan-900 flex flex-col md:grid md:grid-cols-3 px-2 py-6">

            <div className="mx-auto my-4">
                <h3 className="text-white font-semibold text-base text-center my-4 ">PIAIC Helpline</h3>

                <p className="text-white my-4 text-xs lg:text-sm "> +92-308-2220203 (WhatsApp as well)</p>

            </div>



            <div className="mx-auto my-4">
                <h3 className="text-white font-semibold text-base   my-4 ">Connect With Us</h3>

                <div className="flex  gap-1 lg:gap-3">

                    <Link href={'https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg'}>
                        <Image src={'/images/youtube.svg'} alt="logo" height={'35'} width={'35'} className="w-[30px] lg:w-[30px]" />
                    </Link>


                    <Link href={'https://twitter.com/piaicofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>
                        <Image src={'/images/twitter.svg'} alt="logo" height={'30'} width={'30'} className="w-[25px] lg:w-[30px]" />
                    </Link>


                    <Link href={'https://www.facebook.com/groups/piaic/'}>
                        <Image src={'/images/facebook.svg'} alt="logo" height={'30'} width={'30'} className="w-[25px] lg:w-[30px]" />
                    </Link>


                    <Link href={'https://www.instagram.com/piaicofficial/?hl=en'}>
                        <Image src={'/images/insta.svg'} alt="logo" height={'30'} width={'30'} className="w-[25px] lg:w-[30px]" />
                    </Link>

                </div>




            </div>




            <div className="mx-auto my-4">
                <h3 className="text-white font-semibold text-base  my-4">Powered By</h3>
                <Image src={'/images/panacloudLogo.svg'} alt="panacloud logo" height={80} width={100} />
            </div>





        </div>
    )
}