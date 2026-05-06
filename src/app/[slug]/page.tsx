"use client";
import { FetchLogementDetail } from "@/features/logements/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Equipement from "@/conponements/logement/equipement";
import Categorie from "@/conponements/logement/categorie";
import Hote from "@/conponements/logement/hote";
import { useWindowSize } from "@/hooks/useWindowSize";
import ModalCaroussel from "@/conponements/modal/modalCarrousel";

export default function LogementDetails() {
  const [detailsLogement, setDetailsLogement] = useState<PropertyDetail | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ActualPic,setActualPic]=useState<string|"">("")
  const [index,setIndex]=useState<number>(0)
  const params = useParams();
  const { width } = useWindowSize();
  const slug =
    (Array.isArray(params?.slug) ? params.slug.join("/") : params?.slug) ?? "";

 useEffect(() => {
    async function fetchLogement() {
      if (!slug) return;
      const result = await FetchLogementDetail({ ids: slug });
      if (result) {
        setDetailsLogement(result);

        const pics = result.pictures;
        let firstPic = "";

        if (Array.isArray(pics) && pics.length > 0) {
          const first = pics[0];
          if (typeof first === "string") {
            firstPic = first;
          } else if (first && typeof first === "object") {
            const byIndex = (pics as any[]).find((p: any) => p?.index === 0);
            const chosen = byIndex ?? first;
            firstPic = chosen?.src ?? chosen?.url ?? "";
          }
        }

        setActualPic(firstPic);
        setIndex(0);
      }
    }
    fetchLogement();
  }, [slug]);

  const handleNext = () => {
    const pics = detailsLogement?.pictures;
    if (!pics || pics.length === 0) return;
    setIndex((prev) => {
      const next = (prev + 1) % pics.length;
      setActualPic(pics[next] as string);
      return next;
    });
  };

  const handlePrev = () => {
    const pics = detailsLogement?.pictures;
    if (!pics || pics.length === 0) return;
    setIndex((prev) => {
      const next = (prev - 1 + pics.length) % pics.length;
      setActualPic(pics[next] as string);
      return next;
    });
  };

  return (
    <div className="text-black w-full flex md:gap-0 gap-2.5 flex-col md:px-0 px-4 md:pb-0 pb-20">
      {isOpen && <ModalCaroussel Previous={handlePrev} Next={handleNext} Pictures={ActualPic} close={()=>setIsOpen(false)} />}

      <div className="flex md:h-89.5 ms:h-135 h-auto md:flex-row flex-col gap-2.5">
        <div className="flex md:flex-row flex-col gap-2.5 h-full md:w-[63%] w-full">
          {detailsLogement?.pictures?.[0] && (
            <Image
              src={detailsLogement.pictures[0]}
              onClick={()=>setIsOpen(true)}
              width={800}
              height={800}
              alt=""
              className="md:h-full ms:h-[80%] h-105.5 md:w-1/2 w-full object-cover rounded-[10px]"
            />
          )}
          <div className="grid md:grid-cols-2 grid-cols-4 gap-2.5 h-full">
            {detailsLogement?.pictures
              ?.slice(1, 5)
              .map(
                (picture, index) =>
                  picture && (
                    <Image
                      key={index}
                      src={picture}
                      width={800}
                      height={800}
                      alt=""
                      className="md:h-43.5 h-28  md:w-full object-cover rounded-[10px]"
                    />
                  ),
              )}
          </div>
        </div>
        {width && width > 768 && detailsLogement?.host?.picture && (
          <Hote
            picture={detailsLogement?.host?.picture}
            name={detailsLogement?.host.name}
            rating_avg={detailsLogement?.rating_avg}
          />
        )}
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
        {detailsLogement?.tags && (
          <Categorie categorie={detailsLogement.tags} />
        )}
      </div>
      {width && width < 768 && detailsLogement?.host?.picture && (
        <Hote
          picture={detailsLogement?.host?.picture}
          name={detailsLogement?.host.name}
          rating_avg={detailsLogement?.rating_avg}
        />
      )}
    </div>
  );
}
