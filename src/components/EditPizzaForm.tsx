import { FC, useState, FormEvent, ChangeEvent, FormEventHandler } from "react";
import "./styles.css";
import { Pizza } from "../models/Pizza";

interface editPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

export const EditPizzaForm: FC<editPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({
      ...editPizza,
      [name]: value,
    });
    console.log("name ===>", name);
    console.log("value ===>", value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
      updatePizza(editPizza);
    }
    handleToggleEdit();
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};
