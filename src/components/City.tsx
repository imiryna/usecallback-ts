import React from "react";

type IProps = {
  city: string;
  onRemoveClick: (item: string) => void;
};

export const City = ({ city, onRemoveClick }: IProps) => {
  const handleCityClick = () => onRemoveClick(city);
  console.log("Element render");

  return <div onClick={handleCityClick}>{city}</div>;
};
