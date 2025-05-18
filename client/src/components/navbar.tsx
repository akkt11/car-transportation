import { Link } from "react-router";
import { Button } from "../shared/button/button";
import { Typography } from "../shared/typography/typography";
import { animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <header>
      <div className="w-full z-50">
        <div className="container min-h-[90px] flex justify-between items-center">
          <div>
            <Link to="/" className="cursor-pointer">
              <Typography color="grey-100" variant="paragraph" weight="medium">
                FlagmaAutoKG
              </Typography>
            </Link>
          </div>

          <div className="flex gap-[40px]">
            <Link to="/products" className="cursor-pointer">
              <Typography color="grey-100" variant="paragraph" weight="medium">
                Продукты
              </Typography>
            </Link>
            <Link to="how-it-works" className="cursor-pointer">
              <Typography color="grey-100" variant="paragraph" weight="medium">
                Как это работает
              </Typography>
            </Link>
            <Link to="about-us" className="cursor-pointer">
              <Typography color="grey-100" variant="paragraph" weight="medium">
                О Нас
              </Typography>
            </Link>
          </div>

          <Button onClick={scrollToBottom}>Заказать</Button>
        </div>
      </div>
    </header>
  );
};
