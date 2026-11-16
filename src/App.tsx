import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { GlobalHeader } from "./assets/GlobalHeader";
import {
  TutorialDialog,
  type TutorialDialogPropsStep,
} from "./components/Dialogs/TutorialDialog";
import { Maze } from "./maze";
import { isHintOpen } from "./atoms";

export function App(): JSX.Element {
  const [hint, setHint] = useState<TutorialDialogPropsStep[] | null>(null);
  const [isHintFirstView, setIsHintFirstView] = useState<boolean>(true);
  const [, setHintVisible] = useAtom(isHintOpen);
  useEffect(() => {
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
