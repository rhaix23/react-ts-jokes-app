import { NativeSelect } from "@mantine/core";
import React, { Dispatch } from "react";
import { LANGUAGES } from "../utils/languages";
import { FilterLayout } from "./FilterLayout";

interface IProps {
  language: string;
  setLanguage: Dispatch<React.SetStateAction<string>>;
}

export const LanguageFilter = ({ language, setLanguage }: IProps) => {
  return (
    <FilterLayout title="Language">
      <NativeSelect
        value={language}
        onChange={(event) => setLanguage(event.currentTarget.value)}
        data={[...LANGUAGES]}
      />
    </FilterLayout>
  );
};
