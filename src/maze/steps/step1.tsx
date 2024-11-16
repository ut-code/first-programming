import { MazeWorkspace } from "../template";

type Props = {
  next: () => void;
};
export default function Step1({ next }: Props) {
  return <MazeWorkspace height={1} width={2} description="step1: クリアしてみよう。" allowReset={false} next={next} />;
}
