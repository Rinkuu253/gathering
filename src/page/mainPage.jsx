import { useEffect, useRef, useState } from "react";
import {
  Container,
  Flex,
  Group,
  Image,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
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
    "2025-09-25T13:59:00+07:00" // sampai 26 Sept 2025 jam 08:00 WIB
  );
  const inRange3 = isBetween(
    "2025-09-25T14:00:00+07:00", // mulai 24 Sept 2025 jam 00:00 WIB
    "2025-09-25T19:00:00+07:00" // sampai 26 Sept 2025 jam 08:00 WIB
  );

  const inRange4 = isBetween(
    "2025-09-25T20:00:00+07:00", // mulai 24 Sept 2025 jam 00:00 WIB
    "2025-09-26T04:00:00+07:00" // sampai 26 Sept 2025 jam 08:00 WIB
  );

  return inRange ? (
    <MainPageFirstDay />
  ) : inRange2 ? (
    <MainPageSecondDay />
  ) : inRange3 ? (
    <MainPageSecondDayHalf />
  ) : inRange4 ? (
    <MainPageSecondDayNight />
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
            <source src="/music/onGoing.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Flex>
      </Container>
    </>
  );
};

const MainPageSecondDayHalf = () => {
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
          <ScrollArea mah={"90vh"}>
            <Flex
              gap={"lg"}
              direction={"column"}
              mt={"md"}
              maw={800}
              mx={"auto"}
            >
              <Text fz={"xs"}>
                Ada sesuatu yang bergerak dalam diam… <br />
                Bayangan yang tak terlihat, tapi dampaknya nyata.
              </Text>
              <Text fz={"xs"}>
                Mereka menyusup di antara langkah kita, memperlambat,
                melemahkan, bahkan menghancurkan tanpa kita sadari. Misi kita
                sudah semakin dekat. Bayangan lawan mulai bergerak… namun mereka
                belum tahu, bahwa para agen pilihan sedang bersiap.
              </Text>
              <Image
                w={"70%"}
                mx={"auto"}
                src={"/bring.jpg"}
                style={{ border: "4px solid white", borderRadius: 16 }}
              />
              <Text fz={"xs"}>
                Besok… pintu menuju arena akan terbuka, sebuah tim yang dipilih
                untuk satu misi: mengungkap dan menaklukkan musuh yang selama
                ini bersembunyi di balik layar. Pertarungan ini bukan sekadar
                permainan… ini tentang mengembalikan kekuatan, kecepatan, dan
                kejayaan kita.
              </Text>
              <Text fz={"md"} fw={900}>
                Bersiaplah… waktu kalian hampir tiba.
              </Text>
            </Flex>
          </ScrollArea>

          <audio ref={audioRef} autoPlay loop muted>
            <source src="/music/halfSecondDay.mpeg" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Flex>
      </Container>
    </>
  );
};

const MainPageSecondDayNight = () => {
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
          <ScrollArea mah={"90vh"}>
            <Flex
              gap={"lg"}
              direction={"column"}
              mt={"md"}
              maw={800}
              mx={"auto"}
            >
              <Text fz={"xs"}>Bayangan itu tidak sendirian…</Text>
              <Text fz={"xs"}>
                Mereka berulang, menyusup, dan menempel di setiap celah
                pekerjaanmu. Jumlahnya tak kecil, tapi juga bukan puluhan.
              </Text>

              <Text fz={"xs"}>
                Coba lihat bentuk yang sempurna… delapan sisi, delapan arah. Ya…
                begitulah banyaknya mereka yang harus kalian hadapi.
              </Text>
              <Text fz={"md"} fw={900}>
                Hati-hati, karena tiap musuh punya wajah berbeda, namun tujuan
                mereka sama: memperlambatmu.
              </Text>
            </Flex>
          </ScrollArea>

          <audio ref={audioRef} autoPlay loop muted>
            <source src="/music/halfSecondDay.mpeg" type="audio/mpeg" />
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
          <ScrollArea mah={"70vh"}>
            <Flex
              gap={"lg"}
              direction={"column"}
              mt={"xl"}
              maw={800}
              mx={"auto"}
            >
              <Title fz={"xl"}>Welcome, agen terpilih.</Title>
              <Text fz={"xs"}>
                Perjalanan kalian baru saja dimulai… dan kereta ini bukan
                sekadar alat transportasi, melainkan gerbang menuju misi yang
                akan menguji ketahanan, kecerdasan, dan strategi kalian.
              </Text>
              <Text fz={"xs"}>
                Di depan, bukan sekadar destinasi. Ada bayangan yang menunggu.
                Mereka tidak berwujud manusia, tetapi selalu hadir di setiap
                sistem, setiap proses, bahkan di sekitar kalian tanpa disadari.
              </Text>
              <Text fz={"xs"}>
                Jumlah mereka… sama dengan sisi dari bentuk sempurna. Delapan
                wajah, delapan musuh, delapan bayangan. Masing-masing memiliki
                cara unik untuk mengacaukan ritme dan menunda kemenangan.
              </Text>
              <Text fz={"xs"}>
                Tugas kalian jelas: temukan mereka, kenali kelemahannya, dan
                hancurkan satu per satu. Tapi waspadalah… mereka akan
                bersembunyi di balik kelengahan, menyusup di setiap langkah, dan
                menguji kekuatan tim kalian.
              </Text>

              <Text fz={"xs"}>
                Nikmati perjalanan ini.
                <br />
                Gunakan waktu di Whoosh ini untuk menenangkan pikiran,
                menyiapkan strategi, dan menyatukan semangat. Karena begitu
                pintu misi terbuka… tidak ada jalan kembali. Kemenangan hanya
                untuk agen yang sigap, solid, dan berani.
              </Text>
              <Text fw={900} fz={"lg"} mt={"md"}>
                Segera temukan Agent ID kamu untuk mengenali identitas musuh !
              </Text>
            </Flex>
          </ScrollArea>

          <audio ref={audioRef} autoPlay loop muted hidden>
            <source src="/music/whoosh.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Flex>
      </Container>
    </>
  );
};
