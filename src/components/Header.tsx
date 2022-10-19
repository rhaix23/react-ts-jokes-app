import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Title,
  Transition,
  Paper,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { navLinks } from "../utils/navLinks";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const HEADER_HEIGHT = 36;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    background: "transparent",
    border: "none",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    border: "none",
    overflow: "hidden",
    backgroundColor: "#945EB6",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#fff",
    fontWeight: 500,
    fontSize: theme.fontSizes.lg,

    "&:hover": {
      backgroundColor: "#008D7F",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));

const HeaderComponent = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = navLinks.map((link) => (
    <div key={link.label}>
      {link.link.includes("http") ? (
        <a href={link.link} className={classes.link}>
          {link.label}
        </a>
      ) : (
        <Link className={classes.link} to={link.link}>
          {link.label}
        </Link>
      )}
    </div>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={64} className={classes.root}>
      <Container className={classes.header} fluid>
        <div style={{ width: 240 }}>
          <Image radius="md" src={logo} alt="logo" />
        </div>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export { HeaderComponent as Header };
