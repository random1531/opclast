import Image from "next/image"
import PicTest from "../../../public/PictureTest.jpg"
export default function HeroHeader({PicTest,TitleHero,descriptionHero}:{PicTest:string,TitleHero:string,descriptionHero:string}){
    return(
    <div className="w-full flex flex-col gap-10 items-center md:px-0 px-4">
        <div className=" flex flex-col gap-2 items-center text-center max-w-185.5">
        <h1 className="text-[#99331A] text-3xl font-bold ">{TitleHero}</h1>
        <p className="text-sm text-black">{descriptionHero}</p>
        </div>
        <Image src={PicTest} width={1115} height={458} alt="" className="object-cover w-full h-114.5 rounded-[20px]"  />
    </div>
    )
}