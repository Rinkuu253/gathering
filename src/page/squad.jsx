import { Container, Flex, Image, List, Text, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { listGroup } from "./dateRules";

export default function SquadList() {
  const { kelompok } = useParams();
  return (
    <>
      <Container size={"xl"} py={"xl"}>
        <Flex direction={"column"} py={"xl"} gap={"md"}>
          <Title>Kelompok {listGroup?.[kelompok]?.name}</Title>
          <Image
            src={`/Group/${listGroup?.[kelompok]?.name}.png`}
            w={"50%"}
            mx={"auto"}
          />
          <List ta={"left"} spacing={"md"}>
            {listGroup?.[kelompok]?.listName?.map((item, idx) => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            ))}
          </List>
        </Flex>
      </Container>
    </>
  );
}
