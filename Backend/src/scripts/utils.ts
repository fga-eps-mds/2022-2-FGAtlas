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
  "CONTAINER Nº 17", // faltou
  "LDTEA SALA 2",
  "LAB SS",
  "MULTIUSO",
  "LAB TERMODINÂMICA", // faltou
  "LAB SHP", //
  "CONTEINER 04", // faltou
  "LAB TERMOFLUIDOS", //
  "LAB NEI", //
  "LAB NEI 2", //
  "LAB MAT", //
  "LAB ELETR", //
  "LAB OND", // faltou
  "ANTE SALA", //
  "LDTEA SALA 3",
];

// Local em que cada sala está concentrada, 1 = terreo, 2 = segundo andar, 3 = terceiro andar
const levels = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 3, 1, 2, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 3,
];

const latRooms = [
  -15.989011, -15.989082, -15.989074, -15.989073, -15.989113, -15.988966, -15.98916, -15.989166,
  -15.989187, -15.989361, -15.988785, -15.988825, -15.988912, -15.988845, -15.989113, -15.988966,
  -15.98916, -15.989166, -15.989187, -15.989361, -15.989491, -15.989186, -15.988845, -15.989074, 0,
  -15.990346, -15.989618, -15.988968, 0, -15.990709, 0, -15.989676, -15.989725, -15.989694,
  -15.989739, -15.989796, 0, -15.989388, -15.990359,
];

const logRooms = [
  -48.044678, -48.044685, -48.044619, -48.044637, -48.044621, -48.044615, -48.044525, -48.044456,
  -48.044402, -48.044594, -48.044771, -48.044715, -48.044662, -48.044627, -48.044621, -48.044615,
  -48.044525, -48.044456, -48.044402, -48.044594, -48.045425, -48.044865, -48.044627, -48.044619, 0,
  -48.044271, -48.045745, -48.044985, 0, -48.044407, 0, -48.04558, -48.045878, -48.045797,
  -48.045477, -48.045539, 0, -48.044572, -48.044283,
];

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
  "Containers",
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

export default {
  places,
  buildings,
  pareamentoBuilding,
  levels,
  latBuildings,
  longBuildings,
  latRooms,
  logRooms,
};
