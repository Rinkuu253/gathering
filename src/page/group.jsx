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
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { listGroup } from "./dateRules";
import { useDisclosure } from "@mantine/hooks";

function isAvailable(startDateStr) {
  // sekarang (WIB)
  const now = new Date();
  const nowJakarta = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );

  // tanggal mulai
  const start = new Date(startDateStr); // format ISO string biar aman
  return nowJakarta >= start;
}

export default function MainPage() {
  const navigate = useNavigate();
  const { kelompok } = useParams();
  const [openedMap, { open: openMap, close: closeMap }] = useDisclosure(false);
  const [openedSeat, { open: openSeat, close: closeSeat }] =
    useDisclosure(false);

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
                Welcome Agent
                <br />
                Squad
              </Text>
              <Image
                src={`/Group/${listGroup?.[kelompok]?.name}.png`}
                w={"50%"}
                mx={"auto"}
              />
            </Flex>
            <Flex justify={"center"} direction={"column"} gap={"md"} w={"100%"}>
              {/* muncul mulai 26 Sept jam 08:00 WIB */}
              {isAvailable("2025-09-22T09:00:00+07:00") && (
                <Button
                  fullWidth
                  size="lg"
                  radius="lg"
                  variant="outline"
                  c="white"
                >
                  Hint
                </Button>
              )}

              {/* muncul mulai 26 Sept jam 09:00 WIB */}
              {isAvailable("2025-09-22T08:00:00+07:00") && (
                <Button
                  fullWidth
                  size="lg"
                  radius="lg"
                  variant="outline"
                  c="white"
                  onClick={openSeat}
                >
                  Seatmap
                </Button>
              )}

              {isAvailable("2025-09-22T09:00:00+07:00") && (
                <Button
                  fullWidth
                  size="lg"
                  radius="lg"
                  variant="outline"
                  c="white"
                  onClick={openMap}
                >
                  Map
                </Button>
              )}

              {/* muncul mulai 26 Sept jam 11:10 WIB */}
              {isAvailable("2025-09-22T11:10:00+07:00") && (
                <Button
                  fullWidth
                  size="lg"
                  radius="lg"
                  variant="outline"
                  c="white"
                  onClick={() => navigate(`/group/${kelompok}/district`)}
                >
                  District (Villa)
                </Button>
              )}

              {/* muncul mulai 26 Sept jam 08:50 WIB */}
              {isAvailable("2025-09-22T08:50:00+07:00") && (
                <Button
                  fullWidth
                  size="lg"
                  radius="lg"
                  variant="outline"
                  c="white"
                  onClick={() => navigate(`/group/${kelompok}/squad`)}
                >
                  Squad Unit
                </Button>
              )}
            </Flex>
          </Flex>
        </Card>
      </Container>
      <Modal
        opened={openedMap}
        onClose={closeMap}
        title="Map"
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
      <Modal
        opened={openedSeat}
        onClose={closeSeat}
        title="SeatMap"
        withCloseButton
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered
      >
        <Image
          src="/seatMap.jpeg"
          alt="SeatMap"
          onClick={() => window.open("/seatMap.jpeg", "_blank")}
          style={{ cursor: "pointer" }}
        />
      </Modal>
    </>
  );
}
