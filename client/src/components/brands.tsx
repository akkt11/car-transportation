import { BmwIcon } from "../icons/bmw-icon";
import { AudiIcon } from "../icons/audi-icon";
import { JaguarIcon } from "../icons/jaguar-icon";
import { NissanIcon } from "../icons/nissan-icon";
import { VolvoIcon } from "../icons/volvo-icon";

export const Brands = () => {
  return (
    <div className="flex gap-12 px-4 sm:gap-[96px] sm:justify-between sm:px-16 items-start">
      <JaguarIcon />
      <NissanIcon />
      <VolvoIcon />
      <AudiIcon />
      <BmwIcon />
    </div>
  );
};
