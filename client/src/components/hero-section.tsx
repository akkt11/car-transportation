import { LineIcon } from "../icons/line-icon";
import { Typography } from "../shared/typography/typography";
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-[160px] pb-[150px] flex bg-theme-primary-300"
    >
      <div className="container relative">
        <div className="max-w-[500px] space-y-[40px] px-6">
          <Typography variant="h1">
            Найти, забронировать и привезти авто{" "}
            <span className="text-theme-primary-100">легко!</span>
            <LineIcon />
          </Typography>

          <Typography variant="h5">
            Получите автомобиль в любое время и в любом месте с помощью нас.
          </Typography>
        </div>

        <div>
          <img
            src="/assets/BMW-PNG-Image-Background.png"
            alt="blue bwm car"
            width={1048}
            className="absolute translate-x-64 right-0 -top-28"
          />
        </div>
      </div>
    </section>
  );
};
