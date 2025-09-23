import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container, Flex, Text, Title } from "@mantine/core";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try autoplay immediately
    audio.play().catch(() => {
      console.log("Autoplay with sound blocked, waiting for click...");
    });

    // Unmute on first click
    const enableSound = () => {
      audio.muted = false;
      audio.play();
      document.removeEventListener("click", enableSound);
    };

    document.addEventListener("click", enableSound);
    return () => document.removeEventListener("click", enableSound);
  }, []);
  return (
    <>
      <Container size={"xl"}>
        <Title>Beyond Journey - The Rise of Agents</Title>
        <Flex gap={"lg"} direction={"column"} mt={"xl"} maw={800} mx={"auto"}>
          <Text>
            Dunia terus bergerak, penuh dengan peluang… sekaligus ancaman yang
            tersembunyi.
          </Text>
          <Text>
            Di balik kesibukan sehari-hari, ada musuh yang tak terlihat,
            perlahan melemahkan potensi, merampas efisiensi, dan menguji
            ketangguhan kita. Hanya mereka yang siap membuka mata, membaca
            tanda, dan menembus batas yang mampu bertahan. Anda bukan sekadar
            peserta.
          </Text>
          <Text>
            Anda dipilih sebagai{" "}
            <Text span fw={900}>
              Agent
            </Text>
            , bagian dari sebuah{" "}
            <Text span fw={900}>
              Squad Rahasia
            </Text>{" "}
            yang akan menapaki Beyond Journey. Perjalanan ini tidak mudah. Anda
            akan diuji dalam kekuatan, strategi, kecerdasan, dan kerja sama.
          </Text>
          <Text>
            Pertanyaannya sederhana:
            <br />
            <Text span fw={900}>
              Apakah anda siap? Nantikan The Beyond Journey 26 Sep 2025 @West
              Java 700MDPL
            </Text>
          </Text>
        </Flex>
        <audio ref={audioRef} autoPlay loop muted hidden>
          <source src="/music/sherma.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </Container>
    </>
  );
}

export default App;
