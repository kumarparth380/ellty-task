import React from "react";

type Props = {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (id: string, checked: boolean) => void;
};

export default function SelectionItems({
  id,
  label,
  checked = false,
  onChange,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(id, e.target.checked);
    }
  };

  return (
    <div className="group">
      <label
        htmlFor={id}
        className="font-sans font-normal text-sm leading-[130%] tracking-[0px] align-middle flex items-center justify-between gap-2 py-[8px] pr-[15px] pl-[22px] cursor-pointer text-[#1F2128]"
      >
        {label}
        <div className="relative">
          <input
            id={id}
            checked={checked}
            onChange={handleChange}
            className={`appearance-none h-[23px] w-[23px] rounded-[6px] border border-checkbox opacity-[60%] group-hover:opacity-100 checked:bg-secondary checked:opacity-100 checked:group-hover:opacity-[60%] peer cursor-pointer focus:ring-2 focus:ring-secondary-focus focus:ring-offset-1`}
            type="checkbox"
          />
          <svg
            className="absolute inset-0 w-[23px] h-[23px] p-[3px] pointer-events-none opacity-0 group-hover:opacity-60 peer-checked:opacity-100 peer-checked:group-hover:opacity-100"
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.520004"
              stroke={checked ? "white" : "currentColor"}
              strokeLinecap="round"
              className="text-checkbox peer-checked:text-white"
            />
          </svg>
        </div>
      </label>
    </div>
  );
}
