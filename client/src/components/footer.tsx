import { InstagramIcon } from "../icons/instagram-icon";
import { LineEmailIcon } from "../icons/line-email-icon";
import { LineLocationIcon } from "../icons/line-location-icon";
import { LinePhoneIcon } from "../icons/line-phone-icon";
import { YouTubeIcon } from "../icons/youtube-icon";
import { Typography } from "../shared/typography/typography";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-theme-primary-200 pt-10 pb-16">
        <div className="container flex flex-col sm:flex-row items-center sm:items-stretch gap-12 sm:gap-0">
          <div className="flex flex-col gap-6 flex-1">
            <Typography variant="paragraph" weight="semibold" color="white">
              FlagmaAutoKG
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

          <div className="flex flex-col sm:flex-row sm:gap-[96px] gap-6">
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
                About FlagmaAutoKG
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

              <div className="flex gap-2">
                <div className="cursor-pointer">
                  <InstagramIcon />
                </div>

                <div className="cursor-pointer">
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
