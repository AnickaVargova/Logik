import { createSecretOptions} from "../helpers";

export const options = ["red", "blue", "yellow", "green", "black", "pink"];

export const getDefaultData = () => ({
    secretOptions: createSecretOptions(options),
    history: [],
    current: ['','','',''],
    dropdowns: [false, false, false, false],
    submitted: 1,
    gameOver: false,
    secretShown: false
  });