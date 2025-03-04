import { QuoteLeftIcon } from "../icons/quote-left-icon";
import { QuoteRightIcon } from "../icons/quote-right-icon";
import { RateCard } from "../shared/rate-card/rate-card";
import { Typography } from "../shared/typography/typography";

export const AboutUsSection = () => {
  return (
    <section id="rates" className="relative py-[80px] bg-theme-primary-400">
      <div className="absolute top-0 right-10">
        <QuoteLeftIcon />
      </div>

      <div className="absolute top-20">
        <QuoteRightIcon />
      </div>

      <div className="mx-auto text-center space-y-6 mb-[80px]">
        <div className="bg-theme-primary-300 py-4 px-8 rounded-lg inline-block">
          <Typography
            variant="caption"
            weight="medium"
            color="primary-100"
            className="uppercase"
          >
            Тестимониалы
          </Typography>
        </div>

        <Typography variant="h2" weight="medium">
          Что люди говорят о нас?
        </Typography>
      </div>

      <div className="flex justify-center gap-10">
        <div className="z-50">
          <RateCard
            image="/assets/man 1.png"
            name="Charlie Johnson"
            comment=" «Я чувствую себя очень уверенно, когда пользуюсь услугами Caretall.
          Ваша служба поддержки клиентов работает с большим энтузиазмом, а
          водитель всегда приезжает вовремя»."
            city="From New York, US"
          />
        </div>
        <div className="z-50">
          <RateCard
            image="/assets/woman 1.png"
            name="Jenny Wilson"
            comment="«Я пользуюсь вашими услугами уже 3 года. Ваш сервис великолепен, я буду продолжать пользоваться вашими услугами»."
            city="Moscow"
          />
        </div>
        <div className="z-50">
          <RateCard name="Erkin" comment="Очень хорошо" city="Bishkek" />
        </div>
      </div>
    </section>
  );
};
