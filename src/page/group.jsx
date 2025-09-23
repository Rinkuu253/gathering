import { Card, Flex, Group, Image, Text } from "@mantine/core";
import { useParams } from "react-router-dom";
import { listGroup } from "./dateRules";

export default function GroupPage() {
  const { kelompok } = useParams();

  return (
    <Flex w="100%" h="100%" style={{ border: "2px solid black" }}>
      <Card withBorder w="100%">
        <Flex
          h={"100%"}
          align={"center"}
          direction={"column"}
          justify={"space-between"}
          my={"xl"}
          style={{ border: "2px solid blue" }}
        >
          <Flex justify="center" direction={"column"} gap={"md"}>
            <Text fz={"xl"} fw={700}>
              Selamat Datang Kelompok
            </Text>
            <Text fz={"lg"} fw={600}>
              {listGroup?.[kelompok]?.name}
            </Text>
            <Image src={"/Group/CRYO.png"} w={"50%"} mx={"auto"} />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
