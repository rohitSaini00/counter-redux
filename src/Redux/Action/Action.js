import { dec } from "../TotalAction";
import { int } from "../TotalAction";

export const intcrement = (number) => {
  return (dispacth) => {
    dispacth({
      type: int,
      payload: number,
    });
  };
};

export const decrement = (number) => {
  return (dispacth) => {
    dispacth({
      type: dec,
      payload: number,
    });
  };
};
