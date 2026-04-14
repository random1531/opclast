import type { ChangeEvent } from "react";

export default function BlocForm({
  onchange,
  idLabel,
  TextLabel,
}: {
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
  idLabel: string;
  TextLabel: string;
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={idLabel}>{TextLabel}</label>
      <input type="text" id={idLabel} onChange={onchange} />
    </div>
  );
}
