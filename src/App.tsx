import "./App.css";
import { FC, useState } from "react";
import { AddPizzaForm } from "./components/AddPizzaForm";
import { Pizza } from "./models/Pizza";
import { ShowPizzas } from "./components/ShowPizzas";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
    setPizzasList(newPizzasList);
  };

  console.log(pizzasList);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Tortoise's Pizza</span>
        <AddPizzaForm addPizza={addPizza} />
        <ShowPizzas
          pizzasList={pizzasList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      </div>
    </div>
  );
};

export default App;
