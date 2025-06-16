import { FormEvent, useState } from "react";
import { Button } from "../shared/button/button";
import { Typography } from "../shared/typography/typography";

export const FillFolmSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    date: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("e.target", formData);

    await fetch("http://localhost:4444/user/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Заявка принята");
  };

  return (
    <section id="contact" className="py-[80px] container">
      <div className="space-y-8 text-center">
        <div className="bg-theme-primary-300 py-4 px-8 rounded-lg inline-block">
          <Typography
            variant="caption"
            weight="medium"
            color="primary-100"
            className="uppercase"
          >
            Связаться с нами
          </Typography>
        </div>

        <form
          className="bg-theme-primary-100 p-10 rounded-2xl text-left space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <Typography variant="h3" weight="medium" color="white">
              У вас есть вопросы?
            </Typography>

            <Typography variant="paragraph" color="white">
              Оставьте свои контакты и мы свяжемся с вами
            </Typography>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 none">
            <input
              name="name"
              required
              placeholder="Введите имя"
              className="h-10 bg-theme-white rounded-lg p-6"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="phone"
              required
              placeholder="Введите номер"
              className="h-10 bg-theme-white rounded-lg p-6"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              name="car"
              required
              placeholder="Введите модель машины"
              className="h-10 bg-theme-white rounded-lg p-6"
              value={formData.car}
              onChange={handleChange}
            />
            <input
              name="date"
              required
              type="date"
              className="h-10 bg-theme-white rounded-lg p-6"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <Button variant={"outline"}>Отправить</Button>
        </form>
      </div>
    </section>
  );
};
