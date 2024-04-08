import React from "react";
import { List } from "./Cities.styled";

type IProps = {
  city: string;
  onRemoveClick: (item: string) => void;
};

export const City = ({ city, onRemoveClick }: IProps) => {
  const handleCityClick = () => onRemoveClick(city);

  return <List onClick={handleCityClick}>{city}</List>;
};
