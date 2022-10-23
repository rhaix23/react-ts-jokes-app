import { Checkbox } from "@mantine/core";
import { Dispatch } from "react";
import { FilterLayout } from "./FilterLayout";

interface IProps {
  type: string[];
  setType: Dispatch<React.SetStateAction<string[]>>;
}

export const TypeFilter = ({ type, setType }: IProps) => {
  return (
    <FilterLayout title="Type">
      <Checkbox.Group value={type} onChange={setType}>
        <Checkbox value={"single"} label={"Single"} />
        <Checkbox value={"twopart"} label={"Two Part"} />
      </Checkbox.Group>
    </FilterLayout>
  );
};
