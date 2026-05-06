import Image from "next/image";

export default function Messagerie() {
  return (
    <div className="flex w-full h-screen text-black">
      <div className="flex flex-col w-[35%] h-full bg-white">
        <div className="flex w-full justify-between pr-2.5 pl-2.5 pt-2 pb-2">
          <div className="flex gap-2.5 items-center">
            <Image
              src="/Logo.png"
              width={200}
              height={200}
              alt=""
              className="w-11 h-11"
            />
            <div className="flex flex-col">
              <h3>UserName</h3>
              <p>Last message .....</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Time</p>
            <p>.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[65%] h-full bg-amber-500"></div>
    </div>
  );
}
