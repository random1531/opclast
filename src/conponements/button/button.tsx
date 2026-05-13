export default function Button({
  TextBtn,
  Onclick,
}: {
  TextBtn: string;
  Onclick?: () => void;
}) {
  return (
    <button
      type="submit"
      onClick={Onclick}
      className="w-57.5 h-9 rounded-[10px] py-2 px-8 bg-[#99331A] font-inter font-medium text-[14px] text-white cursor-pointer"
    >
      {TextBtn}
    </button>
  );
}
