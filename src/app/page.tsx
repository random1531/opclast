"use client"
import CardLogement from "@/conponements/card/logement";
import HeroHeader from "@/conponements/heroheader/heroHeader";
import Image from "next/image";
import { FetchLogements } from "@/features/logements/api";
import { useEffect, useState } from "react";
import ImageHero from "../../public/PicHomePage.jpg"
import { useWindowSize } from "@/hooks/useWindowSize";



export default function Home() {
const [logements, setLogements] = useState<PropertyBase[]>([])


useEffect(() => {
  async function fetchData() {
   try {
    const result = await FetchLogements()
    if (result) {
      const logements = Array.isArray(result) ? result : [result]
      setLogements(logements)
    }
   } catch (error) {
    console.error('Erreur lors du fetch des logements:', error)
   }
  }
  fetchData()
}, [])

  return (
    <>
      <HeroHeader 
      TitleHero="Chez vous, partout et ailleurs"
      descriptionHero="Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec soin par nos hôtes."
      PicTest={ImageHero.src}
      />
      <div className=" w-full gap-4 grid md:grid-cols-2 lg:grid-cols-3 md:pr-0 pr-4 md:pl-0 pl-4">
      {logements.map((item)=>(
        <CardLogement 
        idFav={item.id}
        slug={item.id} 
        Pictest={item.cover} 
        key={item.id} 
        TitleLogement={item.title} 
        LocationLogement={item.location} 
        price={item.price_per_night}/>
      ))}
      </div>
    </>
  );
}
