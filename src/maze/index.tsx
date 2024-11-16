import { useEffect, useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import { step1, step3 } from "./tutorials";
import type { TutorialDialogPropsStep } from "../components/TutorialDialog";
import Step3 from "./steps/step3";

type Props = { setHint: (hint: TutorialDialogPropsStep[] | null) => void };

export function Maze({ setHint }: Props) {
  // TODO: consider using path based routing
  const [step, setStep] = useState<1 | 2 | 3>(1);
  useEffect(() => {
    if (!setHint) return;
    switch (step) {
      case 1:
        return setHint(step1);
      case 2:
        return setHint(step1);
      case 3:
        return setHint(step3);
      default:
        step satisfies never;
    }
  }, [step, setHint]);

  switch (step) {
    case 1:
      return <Step1 next={() => setStep(2)} />;
    case 2:
      return <Step2 prev={() => setStep(1)} next={() => setStep(3)} />;
    case 3:
      return <Step3 prev={() => setStep(2)} />;
    default:
      step satisfies never;
  }
}
