import {
  Alert,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Loader,
  Paper,
  TextInput,
} from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosOptions, IoIosSend, IoIosAlert } from "react-icons/io";
import {
  CategoryFilter,
  FlagsFilter,
  Jokes,
  LanguageFilter,
  TypeFilter,
} from "../components";
import { ISingleJoke, ITwoPartJoke } from "../types";

export const Home = () => {
  const [jokes, setJokes] = useState<(ISingleJoke | ITwoPartJoke)[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [toggleSettings, setToggleSettings] = useState(false);
  const [search, setSearch] = useState("");
  const [allCategories, setAllCategories] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [safeMode, setSafeMode] = useState(true);
  const [blacklistFlags, setBlacklistFlags] = useState<string[]>([]);
  const [language, setLanguage] = useState("English");

  const setParams = (api: string): string => {
    let url = api;

    const LIMIT = 9; // amount of jokes to fetch (max 10)

    url = allCategories ? url + "Any" : url + categories.join(","); // Must be the first parameter

    url += `?amount=${LIMIT}`;

    if (search) url += `&contains=${search}`;

    if (type.length === 1) {
      url = type.includes("single")
        ? url + "&type=single"
        : url + "&type=twopart";
    }

    if (safeMode) {
      url = url + "&safe-mode";
    } else if (blacklistFlags.length > 0) {
      url = url + `&blacklistFlags=${blacklistFlags.join(",")}`;
    }

    if (language !== "English") {
      if (language === "German") url = url + "&lang=de";
      else if (language === "Czech") url = url + "&lang=cs";
      else if (language === "Spanish") url = url + "&lang=es";
      else if (language === "French") url = url + "&lang=fr";
      else if (language === "Portuguese") url = url + "&lang=pt";
    }

    return url;
  };

  const fetchJokes = async () => {
    const url = setParams("https://v2.jokeapi.dev/joke/");
    setIsLoading(true);
    const response = await axios.get(url);
    const { jokes, error } = response.data;
    setErrorMessage(error ? response.data.causedBy[0] : "");
    setJokes(jokes);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <section style={{ minHeight: "80vh" }}>
      {isLoading ? (
        <Group position="center">
          <Loader size="xl" color="#fff" />
        </Group>
      ) : (
        <Container>
          <Grid>
            <Grid.Col xs={12} sm={10}>
              <TextInput
                placeholder="Search for a joke that contains this search string"
                size="sm"
                sx={{ width: "100%" }}
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={2}>
              <Button
                size="sm"
                color="lime"
                leftIcon={<IoIosOptions />}
                onClick={() => setToggleSettings((state) => !state)}
                fullWidth
              >
                Settings
              </Button>
            </Grid.Col>
          </Grid>

          {toggleSettings && (
            <Paper
              shadow="sm"
              p="md"
              mt={16}
              sx={{
                backgroundColor: "#82c91e",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <CategoryFilter
                allCategories={allCategories}
                setAllCategories={setAllCategories}
                categories={categories}
                setCategories={setCategories}
              />

              <TypeFilter type={type} setType={setType} />

              <FlagsFilter
                safeMode={safeMode}
                setSafeMode={setSafeMode}
                blacklistFlags={blacklistFlags}
                setBlacklistFlags={setBlacklistFlags}
              />

              <LanguageFilter language={language} setLanguage={setLanguage} />
            </Paper>
          )}

          <Button
            size="sm"
            color="green"
            leftIcon={<IoIosSend />}
            disabled={isLoading}
            onClick={fetchJokes}
            mt={16}
            fullWidth
          >
            Fetch Jokes
          </Button>

          <Divider my={16} />

          {isLoading ? (
            <Group position="center">
              <Loader size="xl" color="yellow" />
            </Group>
          ) : errorMessage ? (
            <Alert
              icon={<IoIosAlert size={16} />}
              title="Bummer!"
              color="red"
              variant="filled"
            >
              {errorMessage}
            </Alert>
          ) : (
            <Jokes jokes={jokes} />
          )}
        </Container>
      )}
    </section>
  );
};
