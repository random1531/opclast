"use client";
import { useEffect, useState } from "react";
import { MyFav } from "@/features/favoris/api";
import CardLogement from "@/conponements/card/logement";
import Button from "@/conponements/button/button";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Favoris() {
  const [isConnected, setIsconnected] = useState<boolean>();
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const t = Cookies.get("token");
      if (t === null) {
        setIsconnected(false);
      } else {
        setIsconnected(true);
        try {
          const fav = await MyFav();

          setData(fav);
        } catch (e: any) {
          setError(e?.message || "Erreur de chargement");
        }
      }
    }
    load();
  }, []);
  console.log(isConnected);
  if (error) return <p>Erreur: {error}</p>;
  if(isConnected=== false)return(
    
      <div className="relative w-4xs h-40 flex flex-col bg-white rounded-2xl items-center justify-between text-black gap-4 pl-3.5 pr-3.5 pb-8 pt-8">
        <p>Pour voir vos favoris veuillez vous connecter</p>
        <Button TextBtn="Se connecter" Onclick={() => router.push("/login")} />
      </div>
  )
  if (!data)return(
    <div>Loading</div>
    );

  return (
    <div className=" w-full gap-4 grid md:grid-cols-2 lg:grid-cols-3 md:pr-0 pr-4 md:pl-0 pl-4">
      {data &&
        data.map((e: any) => (
          <CardLogement
            idFav={e.id}
            slug={e.id}
            Pictest={e.cover}
            key={e.id}
            TitleLogement={e.title}
            LocationLogement={e.location}
            price={e.price_per_night}
          />
        ))}
    </div>
  );
}
