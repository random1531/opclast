"use client"
import Link from "next/link"
import Logo from "../../../public/Logo.png"
import LogoLight from "../../../public/LogoLight.png"
import Image from "next/image"
import { CiHeart } from "react-icons/ci";
import { BiComment } from "react-icons/bi";
import { useWindowSize } from "@/hooks/useWindowSize";
import { IoCloseOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react"

export default function Header() {
    const { width } = useWindowSize()
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    return (
        <>

            {width && width < 768 ? (

                <header className={`flex gap-10 flex-col items-start py-4 px-4 w-full bg-white ${isOpenMenu ? ('h-screen') : ('h-21.5 ')} shadow-[0px_4px_4px_0px_#B6B6B60D]`}>

                    <div className="flex w-full justify-between items-center">
                        <Image src={LogoLight} width={46} height={53} alt="kaza" className="w-auto" />
                        {isOpenMenu ?
                            (<IoCloseOutline onClick={() => setIsOpenMenu(false)} className="text-black text-[46px] cursor-pointer" />)
                            :
                            (<CgMenuRight onClick={() => setIsOpenMenu(true)} className="text-black text-[46px] cursor-pointer" />)
                        }
                    </div>
                    {isOpenMenu &&
                        <>
                            <nav className="flex flex-col w-full text-black gap-7 text-2xl">
                                <Link href={"/"}>Accueil</Link>
                                <Link href={"/apropos"}>À propos</Link>
                                <Link href={"#"}>Messagerie</Link>
                                <Link href={"/favoris"}>Favoris</Link>
                            </nav>
                            <button className="py-2 rounded-[10px] px-8 bg-[#99331A] text-white">Ajouter un logement</button>
                        </>
                    }
                </header>

            ) : (
                <header className="flex justify-between md:max-w-195.5 bg-white md:h-14 h-21.5 border md:w-195.5 w-full py-2 px-24 rounded-[10px] shadow-[0px_4px_4px_0px_#B6B6B60D]">
                    <nav className="flex gap-7 text-[#0D0D0D] text-sm h-full items-center">
                        <Link href={"/"}>Accueil</Link>
                        <Link href={"/apropos"}>À propos</Link>
                    </nav>
                    <Image src={Logo} width={113} height={40} alt="kaza" className="w-auto"/>
                    <div className="flex items-center gap-7 text-[#99331A] text-sm">
                        <Link href={"#"}>+Ajouter un logement</Link>
                        <div className="flex gap-2 items-center">
                            <Link href="/favoris" aria-label="favoris">
                            <CiHeart />
                            </Link>
                            <p>|</p>
                            <Link href="/messagerie" aria-label="messagerie">
                            <BiComment />
                            </Link>
                        </div>
                    </div>
                </header>
            )}


        </>

    )
}