import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Container,
  Flex,
  Image,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import "../App.css";
import { useParams } from "react-router-dom";
import { listGroup } from "./dateRules";
import { useDisclosure } from "@mantine/hooks";

export default function MainPage() {
  const { kelompok } = useParams();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Container size={"xl"} px={"md"} m={0}>
        <Card w="100%" bg={"transparent"} h={"85vh"}>
          <Flex
            h={"100%"}
            align={"center"}
            direction={"column"}
            justify={"space-between"}
            my={"xl"}
          >
            <Flex justify=" center" direction={"column"} gap={"xl"}>
              <Text fz={"h1"} fw={700} c={"white"}>
                Selamat Bermain
                <br />
                Squad
              </Text>
              <Image
                src={`/Group/${listGroup?.[kelompok]?.name}.png`}
                w={"50%"}
                mx={"auto"}
              />
            </Flex>
            <Flex justify={"center"} direction={"column"} gap={"xl"} w={"100%"}>
              <Button
                fullWidth
                size="lg"
                radius={"lg"}
                variant="outline"
                c={"white"}
              >
                Hint
              </Button>
              <Button
                fullWidth
                size="lg"
                radius={"lg"}
                variant="outline"
                c={"white"}
                onClick={open}
              >
                Peta
              </Button>
              <Button
                fullWidth
                size="lg"
                radius={"lg"}
                variant="outline"
                c={"white"}
              >
                List Kamar
              </Button>
              <Button
                fullWidth
                size="lg"
                radius={"lg"}
                variant="outline"
                c={"white"}
              >
                List Kelompok
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Container>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        withCloseButton
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered
      >
        <Image
          src="/denah.jpg"
          alt="Denah"
          onClick={() => window.open("/denah.jpg", "_blank")}
          style={{ cursor: "pointer" }}
        />
      </Modal>
    </>
  );
}
