import { CarCard } from "../shared/car-card/car-card";

export const BottomProducts = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-5xl font-semibold text-center md:text-left">
        Bottom products
      </h2>

      <div className="flex gap-6 justify-center md:justify-stretch flex-wrap">
        <CarCard
          title="Honda Civic"
          rating={5}
          price={5100}
          doors={4}
          src="../assets/honda-civic.png"
        />
        <CarCard
          title="Hyundai Accent"
          rating={2}
          price={8600}
          doors={4}
          src="../assets/hyundai-accent.png"
        />
        <CarCard
          title="Nissan Versa S"
          rating={4}
          price={4300}
          doors={4}
          src="../assets/nissan-versa.png"
        />
        <CarCard
          title="Kia Rio LX"
          rating={3}
          price={6300}
          doors={4}
          src="../assets/kia-rio.png"
        />
      </div>
    </div>
  );
};
