import { BottomProducts } from "../components/bottom-products";
import { MiddleProducts } from "../components/middle-products";
import { TopProducts } from "../components/top-products";

export const Products = () => {
  return (
    <section className="pt-[80px] pb-[80px]">
      <div className="container space-y-20">
        <TopProducts />
        <MiddleProducts />
        <BottomProducts />
      </div>
    </section>
  );
};
