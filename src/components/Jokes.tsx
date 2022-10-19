import { SimpleGrid } from "@mantine/core";
import React from "react";
import { IJoke } from "../pages/Home";
import { Joke } from "./Joke";

interface IProps {
  jokes: IJoke[];
}

export const Jokes = ({ jokes }: IProps) => {
  return (
    <SimpleGrid
      breakpoints={[
        { minWidth: "xs", cols: 1 },
        { minWidth: "sm", cols: 2 },
        { minWidth: "md", cols: 3 },
      ]}
    >
      {jokes?.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </SimpleGrid>
  );
};
