import Image from "next/image"
import { FaStar } from "react-icons/fa";
export default function Hote({picture,name,rating_avg}:{picture:string,name:string,rating_avg:number}) {
    return (
        <div className="md:w-[37%] px-6 py-6 bg-white border h-auto border-[#F5F5F5] rounded-[10px] flex flex-col gap-2">
            <h2 className="text-[16px] font-medium --font-inter">Votre hote</h2>
            <div className="flex gap-4.5 items-center justify-between">
                {picture ? (
                    <Image src={picture} width={100} height={100} alt="" className="rounded-[10px] h-20.5 w-20.5 object-cover" />
                ) : null}
                <p>{name}</p>
                <div className="flex gap-1 items-center px-2 py-2 bg-[#F5F5F5] rounded-[10px]">
                    <FaStar className="text-[#99331A]" />
                    <p>{rating_avg}</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <button className="px-8 py-2 bg-[#99331A] rounded-[10px] w-full text-white h-9">Contacter l’hôte</button>
                <button className="px-8 py-2 bg-[#99331A] rounded-[10px] w-full text-white h-9">Envoyer un message</button>
            </div>
        </div>
    )
}