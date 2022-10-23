import { SimpleGrid } from "@mantine/core";
import { ISingleJoke, ITwoPartJoke } from "../types";
import { Joke } from "./Joke";

interface IProps {
  jokes: (ISingleJoke | ITwoPartJoke)[];
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
