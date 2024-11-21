import { MazeWorkspace } from "../template";

type Props = {
  next: () => void;
};
export default function Step1({ next }: Props) {
  return (
    <MazeWorkspace
      height={2}
      width={2}
      description="step1: 矢印をゴールまで移動させよう"
      allowReset={false}
      prev={null}
      next={next}
    />
  );
}
