import { Button, Paper, Text, ThemeIcon, Transition } from "@mantine/core";
import { useState } from "react";
import { IJoke } from "../pages/Home";
import { GiClick } from "react-icons/gi";

interface IProps {
  joke: IJoke;
}

export const Joke = ({ joke }: IProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <Paper
      shadow="sm"
      p="md"
      onClick={() => setOpened((state) => !state)}
      sx={{
        minHeight: 200,
        backgroundColor: joke.type === "single" ? "#F2F013" : "#34BE82",
        position: "relative",
        cursor: joke.type === "single" ? "default" : "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {joke.type === "twopart" ? (
        <>
          <Transition
            mounted={!opened}
            transition="slide-down"
            duration={400}
            timingFunction="ease-in-out"
          >
            {(styles) => <Text style={styles}>{joke.setup}</Text>}
          </Transition>

          <Transition
            mounted={opened}
            transition="slide-up"
            duration={400}
            timingFunction="ease-in-out"
          >
            {(styles) => <Text style={styles}>{joke.delivery}</Text>}
          </Transition>
        </>
      ) : (
        <Text>{joke.joke}</Text>
      )}
      {joke.type === "twopart" && (
        <Button size="sm" leftIcon={<GiClick />} color="lime">
          {opened ? "Hide" : "Show Second Part"}
        </Button>
      )}
    </Paper>
  );
};
