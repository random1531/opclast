"use client"
import { FetchLogementDetail } from "@/features/logements/api"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Image from "next/image"
import Equipement from "@/conponements/logement/equipement";
import Categorie from "@/conponements/logement/categorie";
import Hote from "@/conponements/logement/hote";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function LogementDetails() {
    const [detailsLogement, setDetailsLogement] = useState<PropertyDetail>()
    const params = useParams()
    const { width } = useWindowSize()
    const slug = (Array.isArray(params?.slug) ? params.slug.join('/') : params?.slug) ?? ""

    useEffect(() => {
        async function fetchLogement() {
            if (!slug) return
            const result = await FetchLogementDetail({ ids: slug })
            if (result) {
                setDetailsLogement(result)
            }
        }
        fetchLogement()
    }, [slug])

    return (
        <div className="text-black w-full flex md:gap-0 gap-2.5 flex-col gap-2 md:px-0 px-4 md:pb-0 pb-20">
            <div className="flex md:h-89.5 md:h-135 h-auto md:flex-row flex-col gap-2.5">
                <div className="flex md:flex-row flex-col gap-[10px] h-full md:w-[63%] w-full">
                    {detailsLogement?.pictures?.[0] && (
                        <Image
                            src={detailsLogement.pictures[0]}
                            width={800}
                            height={800}
                            alt=""
                            className="md:h-full md:h-[80%] h-105.5 md:w-1/2 w-full object-cover rounded-[10px]"
                        />
                    )}
                    <div className="grid md:grid-cols-2 grid-cols-4 gap-[10px] h-full">
                        {detailsLogement?.pictures?.slice(1, 5).map((picture, index) => (
                            picture && (
                                <Image
                                    key={index}
                                    src={picture}
                                    width={800}
                                    height={800}
                                    alt=""
                                    className="md:h-43.5 h-28  md:w-full object-cover rounded-[10px]"
                                />
                            )
                        ))}
                    </div>
                </div>
                {width && width > 768 &&
                    detailsLogement?.host?.picture && (
                        <Hote picture={detailsLogement?.host?.picture} name={detailsLogement?.host.name} rating_avg={detailsLogement?.rating_avg} />
                    )
                }

            </div>
            <div className="md:w-[63%] w-full flex flex-col gap-10 px-6 py-6 bg-white rounded-[10px] border border-[#F5F5F5]">
                <div className="flex flex-col gap-8">
                    <h3 className="text-2xl font-bold">{detailsLogement?.title}</h3>
                    <div className="flex gap-">
                        <IoLocationOutline />
                        {detailsLogement?.location}
                    </div>
                    <p>{detailsLogement?.description}</p>
                </div>
                {detailsLogement?.equipments && (
                    <Equipement equipementlogement={detailsLogement.equipments} />
                )}
                {detailsLogement?.tags && (<Categorie categorie={detailsLogement.tags} />)}

            </div>
            {width && width < 768 &&
                detailsLogement?.host?.picture && (
                    <Hote picture={detailsLogement?.host?.picture} name={detailsLogement?.host.name} rating_avg={detailsLogement?.rating_avg} />
                )
            }

        </div>
    )
}