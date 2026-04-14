import HeroHeader from "@/conponements/heroheader/heroHeader";
import ImageAproposHead from "../../../public/AproposHero.png"
import PicApropos from "../../../public/Apropos.png"
import Image from "next/image";
export default function Apropos() {
  return (
    <>
      <HeroHeader
        TitleHero="À propos"
        descriptionHero="Chez Kasa, nous croyons que chaque voyage mérite un lieu unique où se sentir bien.


Depuis notre création, nous mettons en relation des voyageurs en quête d’authenticité avec des hôtes passionnés qui aiment partager leur région et leurs bonnes adresses."
        PicTest={ImageAproposHead.src}
      />
      <div className="flex w-full gap-4 h-[458px] items-center">
        <div className="w-[56%] h-114.5 flex flex-col justify-center gap-4">
          <p className="text-[#99331A] text-[18px] font-bold">
            Notre mission est simple :
          </p>
          <div className="text-sm text-black">
            <p> 1. Offrir une plateforme fiable et simple d’utilisation</p>
            <br></br>
            <p>2. Proposer des hébergements variés et de qualité</p>
            <br></br>
            <p>3. Favoriser des échanges humains et chaleureux entre hôtes et voyageurs</p>
          </div>
          <p className="text-[#99331A] text-[18px] ">Que vous cherchiez un appartement cosy en centre-ville, une maison en bord de mer ou un chalet à la montagne, Kasa vous accompagne pour que chaque séjour devienne un souvenir inoubliable.</p>
        </div>
        <Image src={PicApropos} width={800} height={800} alt="" className="w-[44%] rounded-[10px] object-cover h-full" />
      </div>
    </>
  )
}