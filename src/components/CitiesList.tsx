import React from "react";

type IProps = {
  list: Array<string>;
  onRemoveClick: (item: string) => void;
};

// export const CitiesList = ({list: Array<string>, onRemoveClick: string}) => {
export const CitiesList = ({ list, onRemoveClick }: IProps) => {
  return list.map((item) => {
    return <City key={item} city={item} onRemoveClick={onRemoveClick} />;
  });
};
