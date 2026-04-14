import Image from "next/image"
import Link from "next/link"

export default function CardLogement({Pictest,slug,TitleLogement,LocationLogement,price}:{Pictest:string,TitleLogement:string,LocationLogement:string,price:number,slug:string}) {
    return (
        <Link href={slug} className=" w-full h-[552] bg-white flex flex-col rounded-[10px]">
            <Image src={Pictest} width={800} height={800} alt="" className="w-full h-94 object-cover rounded-t-[10px]" />
            <div className="w-full pt-4 pr-6 pl-6 pb-6 flex flex-col justify-between h-[31%]">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#0D0D0D] text-xl">{TitleLogement}</h3>
                    <p className="text-[#565656] text-sm">{LocationLogement}</p>
                </div>
                <p className="text-[#0D0D0D]">{price}€ par nuit</p>
            </div>
        </Link>
    )

}