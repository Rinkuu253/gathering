import { useEffect, useRef, useState } from "react";
import { Container, Flex, Group, Text, Title } from "@mantine/core";
import "../App.css";
import { IconVolume } from "@tabler/icons-react";

function isBetween(startStr, endStr) {
  const now = new Date();
  const nowJakarta = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );

  const start = new Date(startStr);
  const end = new Date(endStr);

  return nowJakarta >= start && nowJakarta <= end;
}

export default function MainPage() {
  const inRange = isBetween(
    "2025-09-24T00:00:00+07:00", // mulai 24 Sept 2025 jam 00:00 WIB
    "2025-09-25T07:59:59+07:00" // sampai 26 Sept 2025 jam 08:00 WIB
  );
  const inRange2 = isBetween(
    "2025-09-25T08:00:00+07:00", // mulai 24 Sept 2025 jam 00:00 WIB
    "2025-09-26T08:00:00+07:00" // sampai 26 Sept 2025 jam 08:00 WIB
  );

  return inRange ? (
    <MainPageFirstDay />
  ) : inRange2 ? (
    <MainPageSecondDay />
  ) : (
    <MainPageThirdDay />
  );
}

const MainPageFirstDay = () => {
  const audioRef = useRef(null);

  const [showIcon, setShowIcon] = useState(false);

  const handleTextClick = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play();
      setShowIcon(true); // show the volume icon
    }
  };

  const handleIconClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };
  return (
    <>
      <Container size={"xl"} px={"md"} m={0}>
        <Flex
          direction={"column"}
          h={"100vh"}
          w={"100%"}
          py={"xl"}
          px={"xl"}
          align={"center"}
          mx={"auto"}
          gap={"md"}
        >
          <Text fz={"h3"} fw={700}>
            Beyond Journey - <br />
            The Rise of Agents
          </Text>
          <Group>
            {!showIcon && (
              <Text
                fz={"xs"}
                style={{ cursor: "pointer", userSelect: "none" }}
                onClick={handleTextClick}
              >
                {`> Tap for Audio <`}
              </Text>
            )}

            {showIcon && (
              <IconVolume
                color="white"
                size={24}
                style={{ cursor: "pointer" }}
                onClick={handleIconClick}
              />
            )}
          </Group>
          <Flex gap={"lg"} direction={"column"} mt={"md"} maw={800} mx={"auto"}>
            <Text fz={"xs"}>
              Dunia terus bergerak, penuh dengan peluang… sekaligus ancaman yang
              tersembunyi.
            </Text>
            <Text fz={"xs"}>
              Di balik kesibukan sehari-hari, ada musuh yang tak terlihat,
              perlahan melemahkan potensi, merampas efisiensi, dan menguji
              ketangguhan kita. Hanya mereka yang siap membuka mata, membaca
              tanda, dan menembus batas yang mampu bertahan. Anda bukan sekadar
              peserta.
            </Text>
            <Text fz={"xs"}>
              Anda dipilih sebagai{" "}
              <Text span fw={900} fz={"xs"}>
                Agent
              </Text>
              , bagian dari sebuah{" "}
              <Text span fw={900} fz={"xs"}>
                Squad Rahasia
              </Text>{" "}
              yang akan menapaki Beyond Journey. Perjalanan ini tidak mudah.
              Anda akan diuji dalam kekuatan, strategi, kecerdasan, dan kerja
              sama.
            </Text>
            <Text fz={"xs"}>
              Pertanyaannya sederhana:
              <br />
              <Text span fw={700} fz={"xs"}>
                Apakah anda siap? Nantikan The Beyond Journey 26 Sep 2025 @West
                Java 700MDPL
              </Text>
            </Text>
          </Flex>
          <audio ref={audioRef} autoPlay loop muted>
            <source src="/music/sherma.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Flex>
      </Container>
    </>
  );
};

const MainPageSecondDay = () => {
  const audioRef = useRef(null);

  const [showIcon, setShowIcon] = useState(false);

  const handleTextClick = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play();
      setShowIcon(true); // show the volume icon
    }
  };

  const handleIconClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };
  return (
    <>
      <Container size={"xl"} px={"md"} m={0}>
        <Flex
          direction={"column"}
          h={"100vh"}
          w={"100%"}
          py={"xl"}
          px={"xl"}
          align={"center"}
          mx={"auto"}
          gap={"md"}
        >
          <Text fz={"h3"} fw={700}>
            Beyond Journey - <br />
            The Rise of Agents
          </Text>
          <Group>
            {!showIcon && (
              <Text
                fz={"xs"}
                style={{ cursor: "pointer", userSelect: "none" }}
                onClick={handleTextClick}
              >
                {`> Tap for Audio <`}
              </Text>
            )}

            {showIcon && (
              <IconVolume
                color="white"
                size={24}
                style={{ cursor: "pointer" }}
                onClick={handleIconClick}
              />
            )}
          </Group>
          <Flex gap={"lg"} direction={"column"} mt={"md"} maw={800} mx={"auto"}>
            <Text fz={"xs"}>
              Besok, perjalanan akan dimulai. Dunia lama akan ditinggalkan, dan
              satu per satu identitas baru akan diungkapkan.
            </Text>
            <Text fz={"xs"}>
              Hingga saat ini, kamu hanyalah{" "}
              <Text span fw={700} fz={"xs"}>
                peserta biasa
              </Text>
              . Tapi mulai esok, kamu akan resmi menjadi{" "}
              <Text span fw={700} fz={"xs"}>
                Agen
              </Text>
              . Dengan kode, dengan tugas, dengan misi.
            </Text>
            <Text fz={"xs"}>
              Malam ini, rahasiakan semangatmu. Simpan energimu. Karena besok,
              saat fajar baru menyala, Agent ID, boarding pass, dan akses menuju
              Beyond Journey akan diberikan kepadamu.
            </Text>
            <Text fz={"xs"}>
              Bersiaplah…
              <br />
              <Text span fw={700} fz={"xs"}>
                dunia akan segera berubah, dan kamu adalah bagian dari pasukan
                yang terpilih.
              </Text>
            </Text>
          </Flex>
          <audio ref={audioRef} autoPlay loop muted>
            <source src="/music/sherma.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Flex>
      </Container>
    </>
  );
};
const MainPageThirdDay = () => {
  const audioRef = useRef(null);

  const [showIcon, setShowIcon] = useState(false);

  const handleTextClick = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play();
      setShowIcon(true); // show the volume icon
    }
  };

  const handleIconClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };
  return (
    <>
      <Container size={"xl"} px={"md"} m={0}>
        <Flex
          direction={"column"}
          h={"100vh"}
          w={"100%"}
          py={"xl"}
          px={"xl"}
          align={"center"}
          mx={"auto"}
          gap={"md"}
        >
          <Text fz={"h3"} fw={700}>
            The Departure Code
          </Text>
          <Group>
            {!showIcon && (
              <Text
                fz={"xs"}
                style={{ cursor: "pointer", userSelect: "none" }}
                onClick={handleTextClick}
              >
                {`> Tap for Audio <`}
              </Text>
            )}

            {showIcon && (
              <IconVolume
                color="white"
                size={24}
                style={{ cursor: "pointer" }}
                onClick={handleIconClick}
              />
            )}
          </Group>
          <Flex gap={"lg"} direction={"column"} mt={"xl"} maw={800} mx={"auto"}>
            <Text fz={"xs"}>Perjalanan ini bukan perjalanan biasa.</Text>
            <Text fz={"xs"}>
              Perjalanan ini bukan perjalanan biasa. Dalam hitungan menit,
              identitas barumu akan diaktifkan.
            </Text>
            <Text fz={"xs"}>
              Anda bukan lagi hanya seorang peserta — anda akan resmi menjadi{" "}
              <Text span fw={900} fz={"xs"}>
                Agent
              </Text>
              , dengan{" "}
              <Text span fw={900} fz={"xs"}>
                ID
              </Text>{" "}
              yang menandai siapa dirimu dalam misi ini. Tiket Woosh-mu bukan
              sekadar akses perjalanan… ia adalah kunci menuju dunia penuh
              rahasia, tantangan, dan Villain yang menunggu untuk diungkap.
            </Text>
            <Text fz={"xs"}>
              Dengarkan baik-baik: setiap kode, setiap simbol, setiap langkah
              akan menentukan apakah Squad-mu akan bertahan… atau tersingkir
              dalam bayangan sejarah.
            </Text>

            <Text fz={"sm"} fw={700}>
              Bersiaplah. Agent ID-mu dan Tiket Woosh sebentar lagi tiba
              <br />
            </Text>
            <Text fw={900} fz={"lg"} mt={"md"}>
              Siap berangkat, Agent?
            </Text>
          </Flex>
          <audio ref={audioRef} autoPlay loop muted hidden>
            <source src="/music/sherma.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Flex>
      </Container>
    </>
  );
};
