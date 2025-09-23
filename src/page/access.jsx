import { Container, Flex, Text, Title } from "@mantine/core";
import { useParams } from "react-router-dom";

export default function AccessPage() {
  const { kelompok } = useParams();
  return (
    <>
      <Container size={"xl"}>
        <Title>Kelompok {kelompok}</Title>
      </Container>
    </>
  );
}
