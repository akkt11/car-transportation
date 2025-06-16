import { Link } from "react-router";
import { Button } from "../shared/button/button";
import { Typography } from "../shared/typography/typography";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export const Navbar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <header>
      <div
        className={`${
          showBurgerMenu ? "block" : "hidden"
        } md:hidden bg-white h-full w-full absolute z-50 shadow-xl`}
      >
        <div className="h-full">
          <div
            className="flex w-full justify-end"
            onClick={() => setShowBurgerMenu(false)}
          >
            <div className="h-[32px] w-[32px] cursor-pointer mt-7 mr-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 18L20 18"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M4 12L20 12"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M4 6L20 6"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-16 h-full">
            <Link
              to="/products"
              className="cursor-pointer"
              onClick={() => setShowBurgerMenu(false)}
            >
              <Typography color="grey-100" variant="h2" weight="medium">
                Продукты
              </Typography>
            </Link>
            <Link
              to="how-it-works"
              className="cursor-pointer"
              onClick={() => setShowBurgerMenu(false)}
            >
              <Typography color="grey-100" variant="h2" weight="medium">
                Как это работает
              </Typography>
            </Link>
            <Link
              to="about-us"
              className="cursor-pointer"
              onClick={() => setShowBurgerMenu(false)}
            >
              <Typography color="grey-100" variant="h2" weight="medium">
                О Нас
              </Typography>
            </Link>

            <Button onClick={scrollToBottom}>Заказать</Button>
          </div>
        </div>
      </div>

      <div className="w-full z-50">
        <div className="container min-h-[90px] flex justify-between items-center">
          <div>
            <Link to="/" className="cursor-pointer">
              <Typography color="grey-100" variant="paragraph" weight="medium">
                FlagmaAutoKG
              </Typography>
            </Link>
          </div>

          <div className="hidden md:flex gap-[40px]">
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

          <Button onClick={scrollToBottom} className="hidden md:block">
            Заказать
          </Button>

          <div
            className="w-[32px] h-[32px] cursor-pointer md:hidden"
            onClick={() => setShowBurgerMenu(true)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 18L20 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M4 12L20 12"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};
