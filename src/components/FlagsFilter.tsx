import { Checkbox } from "@mantine/core";
import React, { Dispatch } from "react";
import { FLAGS } from "../utils/flags";
import { FilterLayout } from "./FilterLayout";

interface IProps {
  safeMode: boolean;
  setSafeMode: Dispatch<React.SetStateAction<boolean>>;
  blacklistFlags: string[];
  setBlacklistFlags: Dispatch<React.SetStateAction<string[]>>;
}

export const FlagsFilter = ({
  safeMode,
  setSafeMode,
  blacklistFlags,
  setBlacklistFlags,
}: IProps) => {
  return (
    <FilterLayout title="Blacklist">
      <Checkbox
        checked={safeMode}
        onChange={(event) => setSafeMode(event.currentTarget.checked)}
        label="Safe Mode"
        mb={16}
      />
      {!safeMode && (
        <Checkbox.Group
          value={blacklistFlags}
          onChange={setBlacklistFlags}
          orientation="vertical"
        >
          {FLAGS?.map((flag) => (
            <Checkbox value={flag} label={flag} />
          ))}
        </Checkbox.Group>
      )}
    </FilterLayout>
  );
};
