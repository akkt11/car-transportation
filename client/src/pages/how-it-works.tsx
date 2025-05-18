export const HowItWorks = () => {
  return (
    <section className="pt-[80px] pb-[80px]">
      <div className="container space-y-12">
        <div className="flex gap-8">
          <div className="flex-1">
            <div>
              <img
                src="../assets/zayavka.png"
                alt="image"
                className="rounded-2xl object-cover h-[700px] w-[780px]"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center">
            <div className="max-w-[80%] space-y-8 mx-auto">
              <h2 className="text-3xl font-bold">
                Оформление заявки за 5 минут
              </h2>

              <p className="text-theme-grey-100">
                Вы просто оставляете заявку на сайте, указывая место отправления
                и назначения, тип автомобиля и предпочтительные даты. Наш
                менеджер связывается с вами для подтверждения деталей и
                подбирает оптимальный маршрут и транспорт.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-row-reverse">
          <div className="flex-1">
            <div>
              <img
                src="../assets/load-car.png"
                alt="image"
                className="rounded-2xl object-cover h-[700px] w-[780px]"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center">
            <div className="max-w-[80%] space-y-8 mx-auto">
              <h2 className="text-3xl font-bold">
                Погрузка и страхование авто
              </h2>

              <p className="text-theme-grey-100">
                В день отправки наш водитель прибывает по указанному адресу. Мы
                тщательно осматриваем автомобиль, оформляем акт приёма-передачи
                и страхуем его на весь период перевозки. После этого машина
                аккуратно загружается на автовоз.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex-1">
            <div>
              <img
                src="../assets/give-car.png"
                alt="image"
                className="rounded-2xl object-cover h-[700px] w-[780px]"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center">
            <div className="max-w-[80%] space-y-8 mx-auto">
              <h2 className="text-3xl font-bold">
                Доставка и передача получателю
              </h2>

              <p className="text-theme-grey-100">
                Ваш автомобиль прибывает точно в срок. Мы предварительно
                связываемся с получателем и согласовываем время доставки. После
                осмотра и подписания документов вы получаете автомобиль в том же
                состоянии, в каком он был отправлен.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
