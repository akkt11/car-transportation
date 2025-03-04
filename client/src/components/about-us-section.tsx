import { Swiper, SwiperSlide } from "swiper/react";
import { QuoteLeftIcon } from "../icons/quote-left-icon";
import { QuoteRightIcon } from "../icons/quote-right-icon";
import { RateCard } from "../shared/rate-card/rate-card";
import { Typography } from "../shared/typography/typography";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

      <Swiper
        slidesPerView={2}
        spaceBetween={200}
        grabCursor
        centeredSlides
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide>
          <RateCard
            image="/assets/man 1.png"
            name="Charlie Johnson"
            comment=" «Я чувствую себя очень уверенно, когда пользуюсь услугами FlagmaAutoKG.
          Ваша служба поддержки клиентов работает с большим энтузиазмом, а
          водитель всегда приезжает вовремя»."
            city="From New York, US"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RateCard
            image="/assets/woman 1.png"
            name="Jenny Wilson"
            comment="«Я пользуюсь вашими услугами уже 3 года. Ваш сервис великолепен, я буду продолжать пользоваться вашими услугами»."
            city="Moscow"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RateCard
            image="/assets/erkin.jpg"
            name="Erkin"
            comment="Очень хорошо"
            city="Bishkek"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RateCard
            image="/assets/anton.jpg"
            name="Anton"
            comment="Доставили авто в срок, в целости и сохранности. Рекомендую эту компанию! 🚗✨"
            city="Astana"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
