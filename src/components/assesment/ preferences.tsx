import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PreferencesProps {
  onSelectionChange?: (selections: {
    programType: string;
    startDate: string;
  }) => void;
  error?: boolean;
}

export default function preferences({
  onSelectionChange,
  error,
}: PreferencesProps) {
  const [programType, setProgramType] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleProgramTypeChange = (value: string) => {
    setProgramType(value);
    updateSelections(value, startDate);
  };

  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    updateSelections(programType, value);
  };

  const updateSelections = (program: string, date: string) => {
    if (onSelectionChange) {
      onSelectionChange({ programType: program, startDate: date });
    }
  };

  return (
    <div>
      <h2 className="mt-11 md:mt-[69px] text-4xl md:text-5xl md:text-[56px] text-text font-Frank font-normal text-center px-4">
        Choose your preferences
      </h2>

      <div className="sm:max-w-[585px] w-full px-4 mx-auto mt-10 md:mt-[65px]">
        <Select onValueChange={handleProgramTypeChange} value={programType}>
          <SelectTrigger
            className={error && !programType ? "border-red-500" : ""}
          >
            <SelectValue placeholder="Preferred Program Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="program1">Item One</SelectItem>
            <SelectItem value="program2">Item Two</SelectItem>
            <SelectItem value="program3">Item Three</SelectItem>
          </SelectContent>
        </Select>
        {error && !programType && (
          <p className="text-red-500 mt-1">Please select a program type</p>
        )}

        <Select onValueChange={handleStartDateChange} value={startDate}>
          <SelectTrigger
            className={`mt-5 ${error && !startDate ? "border-red-500" : ""}`}
          >
            <SelectValue placeholder="Preferred Start Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date1">Item One</SelectItem>
            <SelectItem value="date2">Item Two</SelectItem>
            <SelectItem value="date3">Item Three</SelectItem>
          </SelectContent>
        </Select>
        {error && !startDate && (
          <p className="text-red-500 mt-1">Please select a start date</p>
        )}
      </div>
    </div>
  );
}
