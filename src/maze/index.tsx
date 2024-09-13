import { useState } from "react";

import Step1 from "./steps/step1";
import Step2 from "./steps/step2";

export function Maze() {
  // TODO: consider using path based routing
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return <Step1 next={() => setStep(2)} />;
    case 2:
      return <Step2 next={() => setStep(3)} />;
    case 3:
      return <div> Step 3 </div>;
    default:
      return <NotFound />;
  }
}

function NotFound(): JSX.Element {
  return <div>お探しのページは見つかりませんでした。</div>;
}
