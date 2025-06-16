import { MessageIcon } from "../icons/message-icon";
import { SupportIcon } from "../icons/support-icon";
import { UserTickIcon } from "../icons/user-tick-icon";
import { WalletIcon } from "../icons/wallet-ico";
import { Card } from "../shared/card/card";
import { Typography } from "../shared/typography/typography";

export const WhyUsSection = () => {
  return (
    <section id="why" className="py-[80px] container relative">
      <div className="flex flex-row-reverse">
        <div className="hidden md:block">
          <img
            src="/assets/2023-Audi-R8-front_51535_032_1848x697_6Y6Y_cropped.png"
            alt="blue bwm car"
            className="absolute -translate-x-[400px] w-[900px] left-0 bottom-40"
          />
        </div>

        <div className="max-w-[570px]">
          <div className="space-y-8 mb-[56px] text-center md:text-left">
            <div className="bg-theme-primary-300 py-4 px-8 rounded-lg inline-block">
              <Typography
                variant="caption"
                weight="medium"
                color="primary-100"
                className="uppercase"
              >
                Почему мы
              </Typography>
            </div>

            <Typography variant="h2" weight="medium">
              Мы предлагаем лучшие условия перевозки
            </Typography>
          </div>

          <div className="flex flex-col gap-[40px]">
            <Card
              variant="row"
              label="Лучшая цена гарантирована"
              description="Нашли более низкую цену? Мы вернем вам 100% разницы."
              icon={<WalletIcon />}
            />

            <Card
              variant="row"
              label="Водитель с опытом работы"
              description="У вас нет водителя? Не волнуйтесь, у нас есть много опытных водителей для вас."
              icon={<UserTickIcon />}
            />

            <Card
              variant="row"
              label="Круглосуточная доставка автомобилей"
              description="Забронируйте автомобиль в любое время, и мы доставим его прямо к вам."
              icon={<SupportIcon />}
            />

            <Card
              variant="row"
              label="Техническая поддержка 24/7"
              description="У вас есть вопрос? Обратитесь в службу поддержки FlagmaAutoKG в любое время, когда у вас возникнут проблемы."
              icon={<MessageIcon />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
