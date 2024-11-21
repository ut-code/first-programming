import { useEffect, useState } from "react";
import { GlobalHeader } from "./assets/GlobalHeader";
import {
  TutorialDialog,
  type TutorialDialogPropsStep,
} from "./components/Dialogs/TutorialDialog";
import { Maze } from "./maze";
import { useAtom } from "jotai";
import { isHintOpen } from "./atoms";

export function App(): JSX.Element {
  const [hint, setHint] = useState<TutorialDialogPropsStep[] | null>(null);
  const [isHintFirstView, setIsHintFirstView] = useState<boolean>(true);
  const [_, setHintVisible] = useAtom(isHintOpen);
  useEffect(() => {
    hint;
    setIsHintFirstView(true);
    setHintVisible(true);
  }, [hint, setHintVisible]);

  return (
    <GlobalHeader
      Hint={
        hint ? (
          <TutorialDialog
            isFirstView={isHintFirstView}
            title="迷路"
            steps={hint}
            onClose={() => {
              setIsHintFirstView(false);
            }}
          />
        ) : (
          <span>ヒントはありません</span>
        )
      }
    >
      <Maze setHint={setHint} />
    </GlobalHeader>
  );
}
