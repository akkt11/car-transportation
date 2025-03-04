import { StarIcon } from "../../icons/star-icon";
import { Typography } from "../typography/typography";

type Props = {
  name: string;
  comment: string;
  city: string;
  image?: string;
};

export const RateCard = ({ city, comment, name, image }: Props) => {
  return (
    <div className="w-[794px] rounded-3xl bg-theme-white flex z-50 shadow-lg">
      {image ? (
        <div className="flex-1 h-[438px]">
          <img src={image} className="object-cover h-full" />
        </div>
      ) : (
        <div></div>
      )}

      <div className="p-10 flex-1 flex flex-col justify-between">
        <div className="mb-[48px]">
          <Typography variant="h2" weight="medium">
            5.0 <span className="text-2xl font-normal">stars</span>
          </Typography>

          <div className="flex">
            {Array.from({ length: 5 }).map(() => (
              <StarIcon />
            ))}
          </div>
        </div>

        <Typography variant="h5" color="grey-100">
          {comment}
        </Typography>

        <div>
          <Typography variant="h4" weight="medium">
            {name}
          </Typography>

          <Typography variant="caption" color="grey-100">
            {city}
          </Typography>
        </div>
      </div>
    </div>
  );
};
