import { MazeWorkspace } from "../template";

type Props = {
  next: () => void;
};
export default function Step2({ next }: Props) {
  return <MazeWorkspace
    width={2}
    height={4}
    description="もっと動かしてみよう"
    allowReset={true}
    next={next}
  />
}
