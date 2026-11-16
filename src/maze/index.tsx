import { useEffect, useState } from "react";
import Step1 from "./steps/step1";
import { step1, step2, step3, step4 } from "./tutorials";
import type { TutorialDialogPropsStep } from "../components/Dialogs/TutorialDialog";
import Step4 from "./steps/step4";
import Step3 from "./steps/step3";
import Step2 from "./steps/step2";

type Props = { setHint: (hint: TutorialDialogPropsStep[] | null) => void };

export function Maze({ setHint }: Props) {
  // TODO: consider using path based routing
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  useEffect(() => {
    switch (step) {
      case 1:
        setHint(step1);
        break;
      case 2:
        setHint(step2);
        break;
      case 3:
        setHint(step3);
        break;
      case 4:
        setHint(step4);
        break;
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
      return <Step3 prev={() => setStep(2)} next={() => setStep(4)} />;
    case 4:
      return <Step4 prev={() => setStep(3)} />;
    default:
      step satisfies never;
  }
}
