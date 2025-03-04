import { LineEmailIcon } from "../icons/line-email-icon";
import { LineLocationIcon } from "../icons/line-location-icon";
import { LinePhoneIcon } from "../icons/line-phone-icon";
import { Typography } from "../shared/typography/typography";

export const Footer = () => {
  return (
    <div className="bg-theme-primary-200 pt-10 pb-16">
      <div className="container flex">
        <div className="flex flex-col gap-6 flex-1">
          <Typography variant="paragraph" weight="semibold" color="white">
            Rentcars
          </Typography>

          <div className="flex gap-2">
            <LineLocationIcon />
            <Typography variant="paragraph" color="grey-150">
              25566, Bishkek, Dzhal
            </Typography>
          </div>

          <div className="flex gap-2">
            <LinePhoneIcon />
            <Typography variant="paragraph" color="grey-150">
              +996 709 762 347
            </Typography>
          </div>

          <div className="flex gap-2">
            <LineEmailIcon />
            <Typography variant="paragraph" color="grey-150">
              uranus@gmail.com
            </Typography>
          </div>
        </div>

        <div className="flex gap-[96px]">
          <div className="space-y-8">
            <Typography variant="paragraph" color="white" weight="medium">
              Our Product
            </Typography>

            <div>
              <Typography variant="paragraph" color="grey-150">
                Career
              </Typography>
              <Typography variant="paragraph" color="grey-150">
                Car
              </Typography>
              <Typography variant="paragraph" color="grey-150">
                Packages
              </Typography>
            </div>
          </div>

          <div className="space-y-8">
            <Typography variant="paragraph" color="white" weight="medium">
              About Rentcars
            </Typography>

            <div>
              <Typography variant="paragraph" color="grey-150">
                Download
              </Typography>
              <Typography variant="paragraph" color="grey-150">
                Help Center
              </Typography>
              <Typography variant="paragraph" color="grey-150">
                Guides
              </Typography>
              <Typography variant="paragraph" color="grey-150">
                Partner Network
              </Typography>
            </div>
          </div>

          <div className="space-y-8">
            <Typography variant="paragraph" color="white" weight="medium">
              Follow Us
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
