import { Link } from "react-router";
import { Button } from "../shared/button/button";
import { Typography } from "../shared/typography/typography";

export const Navbar = () => {
  return (
    <div className="absolute w-full z-50">
      <div className="container min-h-[90px] flex justify-between items-center">
        <div>RENTCARS</div>

        <div className="flex gap-[40px]">
          <Link to={"/"}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              Главная
            </Typography>
          </Link>
          <Link to={"/"}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              Машины
            </Typography>
          </Link>
          <Link to={"/"}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              О Нас
            </Typography>
          </Link>
          <Link to={"/"}>
            <Typography color="grey-100" variant="paragraph" weight="medium">
              Контакты
            </Typography>
          </Link>
        </div>

        <Button>Заказать</Button>
      </div>
    </div>
  );
};
