import { Link } from "react-scroll";
import { Button } from "../shared/button/button";
import { Typography } from "../shared/typography/typography";
import { animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="absolute w-full z-50">
      <div className="container min-h-[90px] flex justify-between items-center">
        <div>
          <Link to={"home"} smooth={true} duration={500}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              RENTCARS
            </Typography>
          </Link>
        </div>

        <div className="flex gap-[40px]">
          <Link to={"how"} smooth={true} duration={500}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              Как это работает
            </Typography>
          </Link>
          <Link to={"why"} smooth={true} duration={500}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              О Нас
            </Typography>
          </Link>
          <Link to={"cars"} smooth={true} duration={500}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              Машины
            </Typography>
          </Link>
          <Link to={"rates"} smooth={true} duration={500}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              Отзывы
            </Typography>
          </Link>
          <Link to={"contact"} smooth={true} duration={500}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              Контакты
            </Typography>
          </Link>
        </div>

        <Button onClick={scrollToBottom}>Заказать</Button>
      </div>
    </div>
  );
};
