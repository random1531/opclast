export default function Lbinput({
  labelText,
  idForm,
  type,
  valueInput,
  onChange,
}: {
  labelText: string;
  idForm: string;
  type: string;
  valueInput?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col w-full">
      <label
        className="font-inter font-medium text-[14px] text-black"
        htmlFor={idForm}
      >
        {labelText}
      </label>
      <input
        id={idForm}
        className="border border-[#F5F5F5] rounded-sm py-4 px-2.5 text-black"
        type={type}
        value={valueInput}
        onChange={onChange}
      />
    </div>
  );
}
