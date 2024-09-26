import { MazeWorkspace } from "../template";

type Props = {
  next: () => void;
};
export default function Step2({ next }: Props) {
  return (
    <MazeWorkspace
      width={4}
      height={2}
      description="もっと動かしてみよう"
      allowReset={true}
      next={next}
    />
  );
}
