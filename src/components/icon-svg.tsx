import { HTMLProps } from "react";
import { IconTypeI } from "@/types/icon-type";

interface Props {
  icon: IconTypeI;
  classname: HTMLProps<HTMLElement>["className"];
  color?: string;
}

export const IconSVG = ({ icon, classname, color }: Props) => {
  return (
    <svg fill="currentColor" style={{ color }} className={classname}>
      <use href={`#${icon.toLowerCase()}`} />
    </svg>
  );
};
