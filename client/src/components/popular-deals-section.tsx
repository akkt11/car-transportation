import { AudiCarIcon } from "../icons/audi-car-icon";
import { BmwCarIcon } from "../icons/bmw-car-icon";
import { JaguarCarIcon } from "../icons/jaguar-car-icont";
import { LamboCarIcon } from "../icons/lambo-car-icon";
import { CarCard } from "../shared/car-card/car-card";
import { Typography } from "../shared/typography/typography";

export const PopularDealsSection = () => {
  return (
    <section className="py-[80px] container">
      <div className="max-w-[1120px] flex justify-center mx-auto text-center gap-[80px] flex-col">
        <div className="space-y-8">
          <div className="bg-theme-primary-300 py-4 px-8 rounded-lg inline-block">
            <Typography
              variant="caption"
              weight="medium"
              color="primary-100"
              className="uppercase"
            >
              Популярные предложения
            </Typography>
          </div>

          <Typography variant="h2" weight="medium">
            Самые популярные предложения по перевозке автомобилей
          </Typography>
        </div>

        <div className="flex justify-between gap-6">
          <CarCard
            title="Jaguar XE L P250"
            rating={4.5}
            price={11800}
            doors={4}
            icon={<JaguarCarIcon />}
          />
          <CarCard
            title="Audi R8"
            rating={4.8}
            price={23100}
            doors={2}
            icon={<AudiCarIcon />}
          />
          <CarCard
            title="BMW M3"
            rating={4.4}
            price={11600}
            doors={4}
            icon={<BmwCarIcon />}
          />
          <CarCard
            title="Lamborghini Huracan"
            rating={4.3}
            price={12300}
            doors={2}
            icon={<LamboCarIcon />}
          />
        </div>
      </div>
    </section>
  );
};
