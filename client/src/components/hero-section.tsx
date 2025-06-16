import { LineIcon } from "../icons/line-icon";
import { Typography } from "../shared/typography/typography";
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-[100px] md:pt-[160px] pb-[150px] flex bg-theme-primary-300"
    >
      <div className="container">
        <div className="relative">
          <div className="text-center md:text-left md:max-w-[500px] mb-[200px] md:mb-0 space-y-[40px] px-6 animate-text">
            <Typography variant="h1">
              Найти, забронировать и привезти авто{" "}
              <span className="text-theme-primary-100">легко!</span>
              <div className="hidden md:block">
                <LineIcon />
              </div>
            </Typography>

            <Typography variant="h5">
              Получите автомобиль в любое время и в любом месте с помощью нас.
            </Typography>
          </div>

          <img
            src="/assets/BMW-PNG-Image-Background.png"
            alt="blue bwm car"
            width={1048}
            className="absolute top-64 md:translate-x-64 md:right-0 md:-top-28 animate-car"
          />
        </div>
      </div>
    </section>
  );
};
