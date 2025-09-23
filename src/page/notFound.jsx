import { Button, Container, Flex, Text, Title } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const { kelompok } = useParams();
  return (
    <>
      <Container size={"xl"}>
        <Title>Route Not Found Press Here to Go Back</Title>
        <Button onClick={() => navigate(`/gathering/${kelompok}`)}>
          Go Back
        </Button>
      </Container>
    </>
  );
}
