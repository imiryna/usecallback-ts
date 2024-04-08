import { useCallback, useState } from "react";
import { CitiesList } from "./components/CitiesList";
import { Wrap, Input, Buttom, InputBox } from "./App.styled";

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

  const handleRemoveClick = useCallback(
    (item: string) => {
      const filteredList = list.filter((listItem) => listItem !== item);

      setList(filteredList);
    },
    [list]
  );

  return (
    <Wrap>
      <InputBox>
        <Input type="text" value={name} onChange={handleChange} />
        <Buttom onClick={handleClick}>Add</Buttom>
      </InputBox>
      <CitiesList list={list} onRemoveClick={handleRemoveClick} />
    </Wrap>
  );
};
