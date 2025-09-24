import {
  Accordion,
  Container,
  Flex,
  Image,
  List,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import { listGroup } from "./dateRules";

export default function DistrictList() {
  const { kelompok } = useParams();

  const districts = [
    {
      key: "alpha",
      name: "Alpha",
      description:
        "Alpha District represents leadership, courage, and vision. Symbolized by the eagle.",
      icon: "/district/alpha_balanced.png",
      members: [
        "SANDY QLINTANG",
        "JIMMY SUSANTO",
        "R. HARRY MURTI",
        "ANTON HIDAYAT",
      ],
    },
    {
      key: "bravo",
      name: "Bravo",
      description:
        "Bravo District stands for protection, defense, and resilience. Represented by the shield.",
      icon: "/district/bravo_balanced.png",
      members: [
        "MUHAMMAD PAJAR",
        "STEFAN NUGROHO",
        "PANGGALIH SAKO DENTA",
        "BINTANG TEDJOBAGASKARA",
        "FAHRIZA GULHAM YUSUF",
        "MOCH. KHOIRUL ANNAM",
        "MUHAMMAD LUTHFAN MAULANA",
        "ZAKARIA RAMADHAN",
      ],
    },
    {
      key: "charlie",
      name: "Charlie",
      description:
        "Charlie District is about strength in arms, strategy, and combat. Its symbol is crossed swords.",
      icon: "/district/charlie_balanced.png",
      members: [
        "FATICHA NASHARO QISTHIA FARID",
        "SAKINAH BALADRAF",
        "AZKA RASHIFAH",
        "BRIGITTA GLORIA TJAHJADI",
        "AISA NAZIHAH",
        "INE ISLAMIATI",
        "HASNA HAMIDAH",
      ],
    },
    {
      key: "delta",
      name: "Delta",
      description:
        "Delta District embodies communication, waves, and connectivity.",
      icon: "/district/delta_balanced.png",
      members: [
        "FERI IRWANSYAH",
        "OSWALD DEW SACHIO S",
        "MUHAMMAD FAHRIZAL KHOIRI",
        "TAUFIK IKHWANA DJIBRAN PRAMUDYA",
        "MUHAMMAD RYO TJOKROSOEDOMO",
        "FREDERICK LIWANG",
        "MUHAMMAD HAFAS HAIKAL",
        "GANA MAHADI",
        "IIN SAPUTRA",
        "STEFEN MULIAWAN",
        "AURIGA RAFSANDJANIE",
      ],
    },
    {
      key: "echo",
      name: "Echo",
      description: "Echo District values wisdom, knowledge, and healing.",
      icon: "/district/echo_balanced.png",
      members: [
        "DR. ADELINE",
        "TJHIA LIAN NIE",
        "WIDYANTI OEY",
        "LINDA NOVIANA",
        "DEVIANA KARTIKA",
        "STEFANI AJENG FEBRIYANTI",
        "HIKMAHWATI",
        "IRENE NATALIA NESTA SIHOMBING",
      ],
    },
    {
      key: "foxtrot",
      name: "Foxtrot",
      description:
        "Foxtrot District is progress, movement upward, and tactical advancement.",
      icon: "/district/foxtrot_balanced.png",
      members: [
        "KEISHA",
        "MELLY YANA SILVI",
        "MICHELE LIONY ONIBALA",
        "LARA YUPA",
        "HILDA NURMALIHAH",
        "IKA RIZKY FADHILLAH",
        "VERONIKA ELLENA",
        "MARCHELLA DEWI PURWATI",
      ],
    },
    {
      key: "oscar",
      name: "Oscar",
      description:
        "Oscar District symbolizes precision, direction, and sharp focus.",
      icon: "/district/oscar_balanced.png",
      members: [
        "RUKTININGSIH",
        "WIDIA MELIAWATI",
        "SONYA APRIANI TANDI",
        "VINI GOKKANA CLARA MANURUNG",
        "GRACE CHRISTY",
        "STEPHANIE SUNANDAR",
        "LAVINIA IDOLA",
        "SALMA SAPANA MEDIANA P",
        "MAISYA HANIFAH",
      ],
    },
    {
      key: "sierra",
      name: "Sierra",
      description: "Sierra District stands for resilience, unity, and growth.",
      icon: "/district/sierra_balanced.png",
      members: [
        "KRISTIN THERESIA",
        "MICHELLINA YUNARDY",
        "ELISABETH INDAH",
        "BRIGITA IVANA",
        "CICILLIA AJENG",
        "ALMA DAFINA",
        "YOSEPHINE CHARISMANUELA",
        "AMELIA DAMAYANTI",
        "NOVELIA ANNA",
        "GIOVANI ANGGASTA",
        "EVI NURSAEPI",
        "JESIKA CAROLINE GRACE",
      ],
    },
    {
      key: "tango",
      name: "Tango",
      description:
        "Tango District represents loyalty, instinct, and the wild. Its emblem is the wolf.",
      icon: "/district/tango_balanced.png",
      members: [
        "ANGGA",
        "IRVAN",
        "FAUZI",
        "SUPRI",
        "MARCELLINUS BARLIAN DEWANTO",
        "GERRY MAY SUSANTO",
        "MATTHEW MARVELINO",
        "MUHAMMAD MA'RIF",
        "KEVIN FEBRIANUS MODA",
      ],
    },
    {
      key: "victor",
      name: "Victor",
      description:
        "Victor District values endurance, stability, and tradition.",
      icon: "/district/victor_balanced.png",
      members: [
        "SURYA DHARMA",
        "HANSLIBRERY",
        "BENNY",
        "BAMBANG HADY",
        "SUNANTO",
        "ZIKRY",
        "DODY ANGGAH SAPUTRA",
      ],
    },
    {
      key: "yankee",
      name: "Yankee",
      description: "Yankee District is unity, honor, and recognition.",
      icon: "/district/yankee_balanced.png",
      members: [
        "AGUS SURANTO",
        "FERI PURWO",
        "MATHEUS ALVIN PRAWIRA",
        "JEFRI EFRANDA",
        "AHMAD MAULANA FAQIH",
        "WARA NOVEKA",
        "FERRY BOY SINAGA",
      ],
    },
    {
      key: "zulu",
      name: "Zulu",
      description: "Zulu District stands for tradition, victory, and glory.",
      icon: "/district/zulu_balanced.png",
      members: [
        "ANTONIUS TEGUH IMAN",
        "NATHANAEL",
        "DHIMAS RAIHAN",
        "BRANDON CHRISTOPHER",
        "FEBRI ROMANDA",
        "ANGGARA DAMAR",
      ],
    },
  ];
  return (
    <>
      <Container size={"xl"} py={"xl"}>
        <Title c={"white"} my={"xl"}>
          District
        </Title>
        <ScrollArea h={"55vh"}>
          <Accordion variant="default" chevronIconSize={19} chevron>
            {districts.map((district) => (
              <Accordion.Item value={district.key} key={district.key}>
                <Accordion.Control>
                  <Flex align="center" gap="md">
                    <Image
                      src={district.icon}
                      alt={district.name}
                      fit="contain"
                      w={30}
                    />
                    <Title order={4} c={"white"}>
                      District {district.name}
                    </Title>
                  </Flex>
                </Accordion.Control>
                <Accordion.Panel>
                  {district.members.length > 0 && (
                    <>
                      <Title order={6} mb="xs" ta={"left"}>
                        Members:
                      </Title>
                      <List spacing="xs" withPadding ta={"left"}>
                        {district.members.map((m, idx) => (
                          <List.Item
                            key={idx}
                            fz={"xs"}
                            style={{ letterSpacing: "2px" }}
                          >
                            {m}
                          </List.Item>
                        ))}
                      </List>
                    </>
                  )}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </ScrollArea>
      </Container>
    </>
  );
}
