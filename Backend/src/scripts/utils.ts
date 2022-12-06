// Arquivo para armazenar as constantes que não temos disponível no sigaa

// Nomes das salas
const places: string[] = [
  "I1",
  "I2",
  "I3",
  "I4",
  "I5",
  "I6",
  "I7",
  "I8",
  "I9",
  "I10",
  "S1",
  "S2",
  "S3",
  "S4",
  "S5",
  "S6",
  "S7",
  "S8",
  "S9",
  "S10",
  "MOCAP",
  "ANFITEATRO",
  "S-4",
  "I-3",
  "CONTAINER Nº 17",
  "LDTEA SALA 2",
  "LAB SS",
  "MULTIUSO",
  "LAB TERMODINÂMICA",
  "LAB SHP",
  "CONTEINER 04",
  "LAB TERMOFLUIDOS",
  "LAB NEI",
  "LAB NEI 2",
  "LAB MAT",
  "LAB ELETR",
  "LAB OND",
  "ANTE SALA",
  "LDTEA SALA 3",
];

// Local em que cada sala está concentrada, 1 = terreo, 2 = segundo andar, 3 = terceiro andar
const levels = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 3, 1, 2, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 3,
];

const latRooms = [];

const logRooms = [];

// Local onde cada sala está contida
const pareamentoBuilding = [
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "UAC",
  "Labs",
  "UAC",
  "UAC",
  "UAC",
  "Containers",
  "LTDEA",
  "Labs",
  "UAC",
  "Labs",
  "Labs",
  "Containers",
  "Labs",
  "Labs",
  "Labs",
  "Labs",
  "Labs",
  "Labs",
  "UAC",
  "LTDEA",
];

// Lista de prédios
const buildings = ["UAC", "LTDEA", "RU", "Containers", "Labs"];

const latBuildings = [
  -15.989085482691276, -15.990508287834954, -15.98956996870734, -15.99057040065923,
  -15.98966889298044,
];
const longBuildings = [
  -48.04476934064168, -48.04424886724141, -48.044200587479295, -48.04454659244202,
  -48.04545215471333,
];
export default { places, buildings, pareamentoBuilding, levels, latBuildings, longBuildings };
