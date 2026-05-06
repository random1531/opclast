import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
export default function ModalCaroussel({
  close,
  Previous,
  Next,
  Pictures,
}: {
  close: () => void;
  Previous?: () => void;
  Next?: () => void;
  Pictures: string;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        <IoMdClose
          onClick={close}
          className="absolute top-5 right-5 text-5xl cursor-pointer"
        />
        <FaChevronLeft
          onClick={Previous}
          className="absolute left-8 top-1/2 text-8xl cursor-pointer"
        />
        <div className="flex items-center justify-center py-28 px-28">
          <Image className="object-contain max-h-[80vh] w-auto" src={Pictures} width={1000} height={800} alt="" />
        </div>
        <FaChevronRight
          onClick={Next}
          className="absolute right-8 top-1/2 text-8xl cursor-pointer"
        />
      </div>
    </div>
  );
}
