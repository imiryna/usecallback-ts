import { useState } from "react";
import "./App.css";
import { CitiesList } from "./components/CitiesList";

const listOfCities = ["Beijing", "Tokyo", "Kinshasa", "Moscow", "Jakarta"];

export const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(listOfCities);

  const handleClick = () => {
    setList([...list, name]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRemoveClick = (item: string) => {
    const filteredList = list.filter((listItem) => listItem !== item);

    setList(filteredList);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <CitiesList list={list} onRemoveClick={handleRemoveClick} />
    </div>
  );
};
