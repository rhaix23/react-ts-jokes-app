import { Outlet } from "react-router-dom";
import { Container, createStyles } from "@mantine/core";
import { Header } from "../components";

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: "#2F86A6",
  },
}));

export const Layout = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Container py={32}>
        <Header />
        <Outlet />
      </Container>
    </div>
  );
};
