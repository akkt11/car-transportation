import { ComponentProps } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FillFolmSection } from "./fill-forrm-section";

type Props = ComponentProps<"div">;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden flex flex-col min-h-screen">
        {children}
      </main>

      <FillFolmSection />

      <Footer />
    </>
  );
};
