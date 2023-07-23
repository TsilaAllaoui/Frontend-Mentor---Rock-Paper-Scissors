import { createContext } from "react";

const GameContext = createContext<{
  choiceState: string;
  choiceSetter: (s: string) => void;
  houseChoiceState: string;
  houseChoiceSetter: (s: string) => void;
  gameStatusState: boolean;
  gameStatusSetter: (_v: boolean) => void;
  scoreState: number;
  scoreStateSetter: (_n: number) => void;
  winState: string;
  winStateSetter: (_n: string) => void;
  resetState: boolean;
  resetStateSetter: (_v: boolean) => void;
}>({
  choiceState: "",
  choiceSetter: (_s: string) => { },
  houseChoiceState: "",
  houseChoiceSetter: (_s: string) => { },
  gameStatusState: true,
  gameStatusSetter: (_v: boolean) => { },
  scoreState: 0,
  scoreStateSetter: (_n: number) => { },
  winState: "",
  winStateSetter: (_n: string) => { },
  resetState: true,
  resetStateSetter: (_v: boolean) => { },
});

export default GameContext;
