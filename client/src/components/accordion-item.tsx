import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const AccordionItem = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-8 transition"
      >
        <span className="text-2xl font-semibold text-left">{title}</span>
        <ChevronDown
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out px-4 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};
