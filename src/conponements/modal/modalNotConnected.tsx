"use client";
import { IoMdClose } from "react-icons/io";
import Button from "../button/button";
import { useRouter } from "next/navigation";

export default function ModalNotConnected({close}:{close:()=>void}) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="relative w-4xs h-40 flex flex-col bg-white rounded-2xl items-center justify-between text-black gap-4 pl-3.5 pr-3.5 pb-8 pt-8" >
        <IoMdClose className="absolute top-2 right-2 text-2xl cursor-pointer" onClick={close} />
        <p>Pour ajouter un logement a vos favoris veuillez vous connecter</p>
        <Button TextBtn="Se connecter" Onclick={() => router.push("/login")} />
      </div>
    </div>
  );
}
