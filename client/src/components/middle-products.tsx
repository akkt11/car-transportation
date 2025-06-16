import { CarCard } from "../shared/car-card/car-card";

export const MiddleProducts = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-5xl font-semibold text-center md:text-left">
        Middle products
      </h2>

      <div className="flex gap-6 justify-center md:justify-stretch flex-wrap">
        <CarCard
          title="Toyota Camry XLE"
          rating={4}
          price={10800}
          doors={4}
          src="../assets/toyota-xml.png"
        />
        <CarCard
          title="Hyundai Elantra SEL"
          rating={4.8}
          price={10100}
          doors={4}
          src="../assets/hyundai-elantra.png"
        />
        <CarCard
          title="Mazda 3 Preferred"
          rating={3}
          price={1010600}
          doors={4}
          src="../assets/mazda-3.png"
        />
        <CarCard
          title="Kia Forte LXS"
          rating={3.3}
          price={10300}
          doors={4}
          src="../assets/kia-forte.png"
        />
        <CarCard
          title="Kia Rio LX"
          rating={3.5}
          price={10300}
          doors={4}
          src="../assets/kia-rio.png"
        />
      </div>
    </div>
  );
};
