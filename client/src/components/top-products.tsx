import { CarCard } from "../shared/car-card/car-card";

export const TopProducts = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-5xl font-semibold">Top products</h2>

      <div className="flex gap-6 flex-wrap">
        <CarCard
          title="Jaguar XE L P250"
          rating={4.5}
          price={11800}
          doors={4}
          src="../public/assets/jaguar-xe.png"
        />
        <CarCard
          title="Audi R8"
          rating={4.8}
          price={23100}
          doors={2}
          src="../public/assets/audi-r8.png"
        />
        <CarCard
          title="BMW M3"
          rating={4.4}
          price={11600}
          doors={4}
          src="../public/assets/bmw-m3.png"
        />
        <CarCard
          title="Lamborghini Huracan"
          rating={4.3}
          price={12300}
          doors={2}
          src="../public/assets/lamborghini-huracan.png"
        />
      </div>
    </div>
  );
};
