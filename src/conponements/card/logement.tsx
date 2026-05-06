import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import AddTofavori, { DeleteFav } from "@/features/favoris/api";
import { useEffect, useState } from "react";

export default function CardLogement({
  Pictest,
  slug,
  TitleLogement,
  LocationLogement,
  price,
  idFav,
}: {
  Pictest: string;
  TitleLogement: string;
  LocationLogement: string;
  price: number;
  slug: string;
  idFav: string;
}) {
  const [isFav, setIsfav] = useState<boolean>(true);

 
  const fav= localStorage.getItem("fav")
 useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const raw = localStorage.getItem("fav");
      if (!raw) return;
      const favs = JSON.parse(raw);
      if (Array.isArray(favs) && favs.some((e: any) => e.slug === slug || e._id === idFav || e.id === idFav)) {
        setIsfav(false);
      } else {
        setIsfav(true);
      }
    } catch {
     
    }
  }, [slug, idFav]);
  const handleDeleteFav = ()=>{
    DeleteFav({ idFav })
    setIsfav(true)
  };
   const handleAddFav = () => {
    AddTofavori({ idFav });
    setIsfav(false)
  };
  return (
    <div className=" w-full h-[552] bg-white flex flex-col rounded-[10px] relative">
      <Image
        src={Pictest}
        width={800}
        height={800}
        alt=""
        className="w-full h-94 object-cover rounded-t-[10px]"
      />
      <div className="absolute top-1.5 right-1.5 w-8 h-8 cursor-pointer bg-white flex rounded-sm items-center justify-center">
        {isFav ? (
            <CiHeart className="text-black" onClick={handleAddFav} />
        ) : (
            <FaHeart className="text-black"   onClick={handleDeleteFav}/>
        )}
      </div>
      <Link href={slug}>
        <div className="w-full pt-4 pr-6 pl-6 pb-6 flex flex-col justify-between h-[31%]">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#0D0D0D] text-xl">{TitleLogement}</h3>
            <p className="text-[#565656] text-sm">{LocationLogement}</p>
          </div>
          <p className="text-[#0D0D0D]">{price}€ par nuit</p>
        </div>
      </Link>
    </div>
  );
}
