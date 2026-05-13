import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import AddTofavori, { DeleteFav } from "@/features/favoris/api";
import ModalNotConnected from "../modal/modalNotConnected";
import Cookies from "js-cookie";
export default function favori({
  idFav,
  slug,
}: {
  idFav: string;
  slug: string;
}) {
  const [isFav, setIsfav] = useState<boolean>(true);
  const [isConnected, setIsconnected] = useState<boolean>();
  const fav = localStorage.getItem("fav");
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const raw = localStorage.getItem("fav");
      if (!raw) return;
      const favs = JSON.parse(raw);
      if (
        Array.isArray(favs) &&
        favs.some(
          (e: any) => e.slug === slug || e._id === idFav || e.id === idFav,
        )
      ) {
        setIsfav(false);
      } else {
        setIsfav(true);
      }
    } catch {}
  }, [slug, idFav]);
  const handleDeleteFav = () => {
    const tok = Cookies.get("token");
    if (tok !== null) {
      setIsconnected(true);
    }else{

        DeleteFav({ idFav });
        setIsfav(true);
    }
  };
  const handleAddFav = () => {
    const tok = Cookies.get("token");
    if (tok !== null) {
      setIsconnected(true);
    } else {
      AddTofavori({ idFav });
      setIsfav(false);
    }
  };

  return (
    <>
      {isConnected ? <ModalNotConnected  close={()=>setIsconnected(false)}/> : ""}
      {isFav ? (
        <CiHeart className="text-black" onClick={handleAddFav} />
      ) : (
        <FaHeart className="text-black" onClick={handleDeleteFav} />
      )}
    </>
  );
}
