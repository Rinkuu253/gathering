import { Container, Flex, Image } from "@mantine/core";

export default function RougeBattle() {
  return (
    <>
      <Container h={"80vh"}>
        <Flex h={"100%"}>
          <Image src={"/rogue.png"} fit="contain" />
        </Flex>
      </Container>
    </>
  );
}
