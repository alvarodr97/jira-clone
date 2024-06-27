import { HTMLProps } from "react";
import { IconType } from "@/types/icon-type";

interface Props {
  icon: IconType;
  classname: HTMLProps<HTMLElement>["className"];
}

export const IconSVG = ({ icon, classname }: Props) => {
  return (
    <svg className={classname}>
      <use href={`#${icon.toLowerCase()}`} />
    </svg>
  );
};
