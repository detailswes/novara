import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react";
import { type JSX } from "react";
interface Program {
  image: JSX.Element;
  text: string;
  description: string;
}

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  program: Program | null;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, program }) => {
  if (!isOpen || !program) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90%] sm:max-w-[882px] bg-[#F7F7FB] !rounded-[20px]">
        <div className="pt-10 sm:pt-5 p-5 text-center ">
          <h2 className="text-4xl md:text-5xl font-normal text-[#1F1168] font-Frank">
            {program.text}
          </h2>

          <p className="mt-4 text-[#170F49] leading-[27px] max-w-[707px] w-full mx-auto">
            {program.description}
          </p>
          <img
            src={program.image.props.src}
            alt={program.text}
            className="w-full max-w-[633px] h-auto mt-9 mx-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
