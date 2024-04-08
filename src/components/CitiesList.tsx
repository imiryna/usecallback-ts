import { memo } from "react";
import { City } from "./City";

type IProps = {
  list: Array<string>;
  onRemoveClick: (item: string) => void;
};

export const CitiesList = memo(function CitiesList({ list, onRemoveClick }: IProps) {
  return (
    <>
      {list.map((item: string) => (
        <City key={item} city={item} onRemoveClick={onRemoveClick} />
      ))}
    </>
  );
});
