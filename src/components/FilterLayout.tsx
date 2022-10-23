import { Container, Divider, Text } from "@mantine/core";

interface IProps {
  children: React.ReactNode;
  title: string;
}

export const FilterLayout = ({ children, title }: IProps) => {
  return (
    <Container sx={{ flex: "1" }}>
      <Text sx={{ textTransform: "uppercase", fontWeight: 500 }}>{title}</Text>
      <Divider mb={16} />
      {children}
    </Container>
  );
};
