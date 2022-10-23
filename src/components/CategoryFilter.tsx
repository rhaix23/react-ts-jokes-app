import { Dispatch } from "react";
import { Checkbox, Group, Radio } from "@mantine/core";
import { CATEGORIES } from "../utils/categories";
import { FilterLayout } from "./FilterLayout";

interface IProps {
  allCategories: boolean;
  setAllCategories: Dispatch<React.SetStateAction<boolean>>;
  categories: string[];
  setCategories: Dispatch<React.SetStateAction<string[]>>;
}

export const CategoryFilter = ({
  allCategories,
  setAllCategories,
  categories,
  setCategories,
}: IProps) => {
  return (
    <FilterLayout title="Categories">
      <Group mb={32}>
        <Radio
          size="md"
          checked={allCategories}
          onChange={(event) => setAllCategories(event.currentTarget.checked)}
          value="any"
          label="Any"
        />
        <Radio
          size="md"
          checked={!allCategories}
          onChange={(event) => setAllCategories(!event.currentTarget.checked)}
          value="custom"
          label="Custom"
        />
        {!allCategories && (
          <Checkbox.Group
            value={categories}
            onChange={setCategories}
            orientation="vertical"
          >
            {CATEGORIES?.map((category) => (
              <Checkbox value={category} label={category} size="md" />
            ))}
          </Checkbox.Group>
        )}
      </Group>
    </FilterLayout>
  );
};
