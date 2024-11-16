import { MazeWorkspace } from "../template";

type Props = {
  prev: () => void;
  next: () => void;
};
export default function Step2({ prev, next }: Props) {
  return (
    <MazeWorkspace width={4} height={2} description="もっと動かしてみよう" allowReset={true} prev={prev} next={next} />
  );
}
