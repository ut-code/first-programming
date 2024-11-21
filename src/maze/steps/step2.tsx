import { MazeWorkspace } from "../template";

type Props = {
  next: () => void;
  prev: () => void;
};
export default function Step2({ prev, next }: Props) {
  return (
    <MazeWorkspace
      height={1}
      width={5}
      description="step2: いろんなブロックも使ってみよう"
      allowReset={false}
      prev={prev}
      next={next}
    />
  );
}
