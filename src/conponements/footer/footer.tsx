import Image from "next/image"
import Logo from "../../../public/LogoLight.png"
export default function Footer(){
    return(
    <footer className="h-[70px] flex justify-between items-center bg-[#F5F5F5] w-[1440px] px-10 py-2 border border-[#F5F5F5]">
        <Image src={Logo} width={50} height={50} alt="" className="object-cover w-12 h-14"/>
        <p className="text-black text-xs"> © 2025 Kasa. All rights reserved</p>
    </footer>
    )
}