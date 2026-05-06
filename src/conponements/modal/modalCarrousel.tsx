import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
export default function ModalCaroussel({close,Previous,Next,Pictures}:{close:()=>void,Previous?:()=>void,Next?:()=>void,Pictures:string}) {
  return (
    <div className="w-screen h-screen absolute bg-gray-50 top-0 left-0">
      <div className="relative w-full h-full flex items-center justify-center">
        <IoMdClose onClick={close} className="absolute top-5 right-5 text-5xl cursor-pointer"/>
        <FaChevronLeft onClick={Previous} className="absolute left-8 top-1/2 text-8xl cursor-pointer" />
        <Image className="absolute" src={Pictures} width={500} height={500} alt="" />
        <FaChevronRight onClick={Next} className="absolute right-8 top-1/2 text-8xl cursor-pointer" />
      </div>
    </div>
  );
}
