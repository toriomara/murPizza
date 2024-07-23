import { FC } from "react";
import { Pizza } from "../models/Pizza";
import { SinglePizza } from "./SinglePizza";

interface ShowPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

export const ShowPizzas: FC<ShowPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza key={pizza.id} pizza={pizza} updatePizza={updatePizza} deletePizza={deletePizza} />
        );
      })}
    </div>
  );
};
