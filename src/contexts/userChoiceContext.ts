import { createContext } from "react";

const GameContext = createContext<{
  choiceState: string;
  choiceSetter: (s: string) => void;
  gameStatusState: boolean;
  gameStatusSetter: (_s: boolean) => void;
}>({
  choiceState: "",
  choiceSetter: (_s: string) => {},
  gameStatusState: true,
  gameStatusSetter: (_v: boolean) => {},
});

export default GameContext;
