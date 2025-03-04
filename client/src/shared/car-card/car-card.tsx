import { ReactNode } from "react";
import { Button } from "../button/button";
import { Typography } from "../typography/typography";
import { StarIcon } from "../../icons/star-icon";
import { UserIcon } from "../../icons/user-icon";
import { EngineIcon } from "../../icons/engine-icon";
import { AirIcon } from "../../icons/air-icon";
import { DoorIcon } from "../../icons/door-icon";
import { animateScroll as scroll } from "react-scroll";

type Props = {
  title: string;
  rating: number;
  price: number;
  doors: number;
  icon: ReactNode;
};

export const CarCard = ({ title, rating, price, icon, doors }: Props) => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="shadow-2xl p-6 rounded-2xl w-[256px] flex flex-col justify-between">
      <div>{icon}</div>

      <div className="pt-6">
        <div className="text-left space-y-3">
          <Typography variant="paragraph" weight="medium">
            {title}
          </Typography>

          <div className="mb-4 flex gap-1">
            <StarIcon />
            <Typography variant="caption" className="text-xs" weight="medium">
              {rating}{" "}
              <span className="text-theme-grey-100">(2.436 reviews)</span>
            </Typography>
          </div>
        </div>

        <div className="flex flex-wrap mb-6 gap-y-2 gap-x-2">
          <div className="flex items-center gap-1">
            <UserIcon />
            <Typography variant="caption" className="text-xs" color="grey-100">
              {doors} Passagers
            </Typography>
          </div>

          <div className="flex items-center gap-1">
            <EngineIcon />
            <Typography variant="caption" className="text-xs" color="grey-100">
              Auto
            </Typography>
          </div>

          <div className="flex items-center gap-1">
            <AirIcon />
            <Typography variant="caption" className="text-xs" color="grey-100">
              Air Conditioning
            </Typography>
          </div>

          <div className="flex items-center gap-1">
            <DoorIcon />
            <Typography variant="caption" className="text-xs" color="grey-100">
              {doors} Doors
            </Typography>
          </div>
        </div>

        <div className="border-t pt-6 mb-6 flex justify-between items-center border-theme-grey-150">
          <Typography variant="caption" color="grey-100">
            Price
          </Typography>

          <Typography variant="paragraph" weight="medium">
            ${price}{" "}
          </Typography>
        </div>
      </div>

      <Button className="w-full" onClick={scrollToBottom}>
        Заказать
      </Button>
    </div>
  );
};
