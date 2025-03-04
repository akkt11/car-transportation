import { CarIcon } from "../icons/car-icon";
import { DateIcon } from "../icons/date-icon";
import { LocationIcon } from "../icons/location-icon";
import { Card } from "../shared/card/card";
import { Typography } from "../shared/typography/typography";

export const HowItWorkSection = () => {
  return (
    <section className="py-[80px] container">
      <div className="max-w-[736px] flex justify-center mx-auto text-center gap-[80px] flex-col">
        <div className="space-y-8">
          <div className="bg-theme-primary-300 py-4 px-8 rounded-lg inline-block">
            <Typography
              variant="caption"
              weight="medium"
              color="primary-100"
              className="uppercase"
            >
              Как это работает
            </Typography>
          </div>

          <Typography variant="h2" weight="medium">
            Перевозка осуществляется в следующие 3 рабочих шага
          </Typography>
        </div>

        <div className="flex justify-between">
          <Card
            icon={<LocationIcon />}
            label="Выберите локацию"
            description="Выберите свой и найдите свой лучший автомобиль"
          />

          <Card
            icon={<DateIcon />}
            label="Выберите время"
            description="Выберите дату и время, чтобы забронировать автомобиль"
          />

          <Card
            icon={<CarIcon />}
            label="Выберите ваш автомобиль"
            description="Забронируйте свой автомобиль, и мы доставим его прямо к вам"
          />
        </div>
      </div>
    </section>
  );
};
