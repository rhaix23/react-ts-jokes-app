import {
  Checkbox,
  Divider,
  Grid,
  Group,
  NativeSelect,
  Paper,
  Radio,
  Text,
} from "@mantine/core";
import { Dispatch } from "react";
import { CATEGORIES } from "../utils/categories";
import { FLAGS } from "../utils/flags";
import { LANGUAGES } from "../utils/languages";

interface IProps {
  allCategories: boolean;
  setAllCategories: Dispatch<React.SetStateAction<boolean>>;
  categories: string[];
  setCategories: Dispatch<React.SetStateAction<string[]>>;
  type: string[];
  setType: Dispatch<React.SetStateAction<string[]>>;
  safeMode: boolean;
  setSafeMode: Dispatch<React.SetStateAction<boolean>>;
  blacklistFlags: string[];
  setBlacklistFlags: Dispatch<React.SetStateAction<string[]>>;
  language: string;
  setLanguage: Dispatch<React.SetStateAction<string>>;
}

export const Settings = ({
  allCategories,
  setAllCategories,
  categories,
  setCategories,
  type,
  setType,
  safeMode,
  setSafeMode,
  blacklistFlags,
  setBlacklistFlags,
  language,
  setLanguage,
}: IProps) => {
  return (
    <Paper shadow="sm" p="md" mt={16} sx={{ backgroundColor: "#82c91e" }}>
      <Grid>
        <Grid.Col xs={12} sm={4}>
          <Text sx={{ textTransform: "uppercase", fontWeight: 500 }}>
            Categories
          </Text>
          <Divider mt={8} mb={16} />
          <Group mb={8}>
            <Radio
              size="md"
              checked={allCategories}
              onChange={(event) =>
                setAllCategories(event.currentTarget.checked)
              }
              value="any"
              label="Any"
            />
            <Radio
              size="md"
              checked={!allCategories}
              onChange={(event) =>
                setAllCategories(!event.currentTarget.checked)
              }
              value="custom"
              label="Custom"
            />
          </Group>
          {!allCategories && (
            <Group>
              <Checkbox.Group value={categories} onChange={setCategories}>
                {CATEGORIES?.map((category) => (
                  <Checkbox value={category} label={category} size="md" />
                ))}
              </Checkbox.Group>
            </Group>
          )}
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <Text sx={{ textTransform: "uppercase", fontWeight: 500 }}>
            Joke Type
          </Text>
          <Divider mt={8} mb={8} />
          <Checkbox.Group value={type} onChange={setType}>
            <Checkbox value={"single"} label={"Single"} />
            <Checkbox value={"twopart"} label={"Two Part"} />
          </Checkbox.Group>
        </Grid.Col>

        <Grid.Col xs={12} sm={4}>
          <Text sx={{ textTransform: "uppercase", fontWeight: 500 }}>
            Safe Mode & Blacklist Flags
          </Text>
          <Divider mt={8} mb={16} />
          <Checkbox
            checked={safeMode}
            onChange={(event) => setSafeMode(event.currentTarget.checked)}
            label="Safe Mode"
            mb={8}
          />
          {!safeMode && (
            <Checkbox.Group value={blacklistFlags} onChange={setBlacklistFlags}>
              {FLAGS?.map((flag) => (
                <Checkbox value={flag} label={flag} />
              ))}
            </Checkbox.Group>
          )}
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <Text sx={{ textTransform: "uppercase", fontWeight: 500 }}>
            Language
          </Text>
          <Divider mt={8} mb={16} />
          <NativeSelect
            value={language}
            onChange={(event) => setLanguage(event.currentTarget.value)}
            data={[...LANGUAGES]}
          />
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
