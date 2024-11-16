import { useEffect, useState } from "react";
import { GlobalHeader } from "./assets/GlobalHeader";
import { TutorialDialog, type TutorialDialogPropsStep } from "./components/TutorialDialog";
import { Maze } from "./maze";

export function App(): JSX.Element {
  const [hint, setHint] = useState<TutorialDialogPropsStep[] | null>(null);
  const [isHintFirstView, setIsHintFirstView] = useState<boolean>(true);
  useEffect(() => {
    console.log(hint);
    setIsHintFirstView(true);
  }, [hint]);

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
