"use client";
import React, { useState, type JSX } from "react";
import AddictionIcon from "@/assets/icons/addiction.svg";
import MentalHealthIcon from "@/assets/icons/mental-health.svg";
import BothIcon from "@/assets/icons/both.svg";
import NotSureIcon from "@/assets/icons/not-sure.svg";

interface Option {
  id: string;
  title: string;
  icon: JSX.Element;
}

interface ObjectivesProps {
  onSelectionChange?: (selectedIds: string[]) => void;
  error?: boolean; // Add a prop to show an error message
}

const Objectives: React.FC<ObjectivesProps> = ({
  onSelectionChange,
  error,
}) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleOption = (id: string): void => {
    const newSelected = new Set(selected);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelected(newSelected);
    onSelectionChange?.(Array.from(newSelected));
  };

  const options: Option[] = [
    {
      id: "addiction",
      title: "Overcome Addiction",
      icon: <img src={AddictionIcon.src} alt="addiction" />,
    },
    {
      id: "mental-health",
      title: "Mental health",
      icon: <img src={MentalHealthIcon.src} alt="mental-health" />,
    },
    {
      id: "both",
      title: "Both",
      icon: <img src={BothIcon.src} alt="both" />,
    },
    {
      id: "not-sure",
      title: "Not Sure",
      icon: <img src={NotSureIcon.src} alt="not-sure" />,
    },
  ];

  return (
    <div>
      <h2 className="mt-11 md:mt-[69px] text-4xl md:text-5xl md:text-[56px] text-text font-Frank font-normal text-center px-4">
        What's your objectives with our program?
      </h2>
      <div className="mt-11 md:mt-16 w-full sm:max-w-[557px] mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:gap-10 sm:grid-cols-2">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              type="button"
              aria-pressed={selected.has(option.id)}
              className={`relative flex flex-col items-center min-h-[196px] justify-center p-4 md:p-6 rounded-[14px] border-2 transition-all duration-200 ${
                selected.has(option.id)
                  ? "border-primary text-primary"
                  : "border-[#EBEBF5] hover:border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="absolute top-2 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-primary rounded-full ${
                    selected.has(option.id)
                      ? "w-[25px] h-[25px]"
                      : "border-[#EBEBF5] border-2 h-5 w-5"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {selected.has(option.id) && (
                    <path
                      className="z-40"
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </div>
              <div className="mb-2">{option.icon}</div>
              <span className="text-base sm:text-lg md:text-xl font-medium text-center text-text">
                {option.title}
              </span>
            </button>
          ))}
        </div>
        {error && (
          <p className="text-red-500 mt-4 text-center">
            Please select at least one objective.
          </p>
        )}
      </div>
    </div>
  );
};

export default Objectives;
