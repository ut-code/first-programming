import { useState } from "react";

import Step1 from "./steps/step1";

function NotFound(): JSX.Element {
  return <div>お探しのページは見つかりませんでした。</div>;
}

export function Maze() {
  // TODO: consider using path based routing
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return <Step1 next={() => setStep(2)} />;
    case 2:
      return <div> Step 2 </div>;
    default:
      return <NotFound />;
  }
}
