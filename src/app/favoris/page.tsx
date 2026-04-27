"use client"
import { useEffect, useState } from "react"
import { MyFav } from "@/features/favoris/api"
import CardLogement from "@/conponements/card/logement"

export default function Favoris() {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const fav = await MyFav()
        setData(fav)
      } catch (e: any) {
        setError(e?.message || "Erreur de chargement")
      }
    }
    load()
  }, [])
console.log(data)
  if (error) return <p>Erreur: {error}</p>
  if (!data) return <p>Chargement...</p>

  return (
    <div className=" w-full gap-4 grid md:grid-cols-2 lg:grid-cols-3 md:pr-0 pr-4 md:pl-0 pl-4">
    {data &&  data.map((e:any)=>(
      <CardLogement 
            idFav={e.id}
            slug={e.id} 
            Pictest={e.cover} 
            key={e.id} 
            TitleLogement={e.title} 
            LocationLogement={e.location} 
            price={e.price_per_night}/>
    ))}
    </div>
  )
}