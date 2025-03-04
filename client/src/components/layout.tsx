import { ComponentProps } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

type Props = ComponentProps<"div">;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="overflow-hidden flex flex-col min-h-screen">
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
