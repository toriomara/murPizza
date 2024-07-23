import { FC, useState, FormEvent, ChangeEvent, FormEventHandler } from "react";
import "./styles.css";
import { Pizza } from "../models/Pizza";

const initState = {
  title: "",
  price: "",
  img: "",
};

interface addPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

export const AddPizzaForm: FC<addPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({
      ...newPizza,
      [name]: value,
    });
    console.log("name ===>", name);
    console.log("value ===>", value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const { title, price, img } = newPizza;
    if (title && price && img) {
      addPizza({
        id: Date.now(),
        title,
        img,
        price,
      });
      setNewPizza(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">+ Add at Menu</button>
    </form>
  );
};
