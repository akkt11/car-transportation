import { CarCard } from "../shared/car-card/car-card";
import { Typography } from "../shared/typography/typography";

export const PopularDealsSection = () => {
  return (
    <section id="cars" className="py-[80px] container">
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

        <div className="flex justify-between gap-6 flex-col md:flex-row items-center">
          <CarCard
            title="Jaguar XE L P250"
            rating={4.5}
            price={11800}
            doors={4}
            src="../assets/toyota-xml.png"
          />
          <CarCard
            title="Audi R8"
            rating={4.8}
            price={23100}
            doors={2}
            src="../assets/toyota-xml.png"
          />
          <CarCard
            title="BMW M3"
            rating={4.4}
            price={11600}
            doors={4}
            src="../assets/toyota-xml.png"
          />
          <CarCard
            title="Lamborghini Huracan"
            rating={4.3}
            price={12300}
            doors={2}
            src="../assets/toyota-xml.png"
          />
        </div>
      </div>
    </section>
  );
};
