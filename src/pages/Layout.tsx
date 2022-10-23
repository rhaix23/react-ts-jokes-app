import { Outlet } from "react-router-dom";
import { Container, createStyles } from "@mantine/core";
import { Footer, Header } from "../components";

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
      <Container py={32} sx={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};
