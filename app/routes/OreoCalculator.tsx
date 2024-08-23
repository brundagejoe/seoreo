import { useState } from "react";

const DOLLARS_PER_OREO = 0.1175555556;

export default function OreoCalculator() {
  const [input, setInput] = useState("0");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!e.key.match(/[0-9.]|Backspace/)) {
      e.preventDefault();
    }

    if (deformatInput(input).length > 4 && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(formatInput(e.target.value));
  };

  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="flex items-start p-2 border-2 border-black rounded-md overflow-hidden">
        <p className="text-3xl ml-0.5 mt-1 mr-0.5 z-10 text-gray-800 font-black">
          $
        </p>
        <input
          inputMode="numeric"
          size={Math.max(1, input.length)}
          value={input}
          onKeyDown={handleKeyDown}
          onChange={onChange}
          className="outline-none border-none p-0 text-left text-5xl text-gray-800 font-black"
        />
      </div>
      <p className="text-5xl text-center text-gray-800 font-black">
        = {convertPriceToOreos(deformatInput(input))} oreos
      </p>
    </div>
  );
}

const formatInput = (input: string) => {
  const deformattedInput = deformatInput(input);
  const parsedInput = parseFloat(deformattedInput);
  if (isNaN(parsedInput)) {
    return "0";
  }

  const fixedResult = String(Math.round(parsedInput * 100) / 100);
  return fixedResult.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const deformatInput = (formattedInput: string) => {
  return formattedInput.replace(/,/g, "");
};

const convertPriceToOreos = (price: string) => {
  const oreos = Math.round(parseFloat(price) / DOLLARS_PER_OREO);

  return oreos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
