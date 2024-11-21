import { MazeWorkspace } from "../template";

type Props = {
  prev: () => void;
};

export default function Step4({ prev }: Props) {
  return (
    <MazeWorkspace
      width={8}
      height={8}
      description="自分の力で汎用アルゴリズムを作ってみよう"
      allowReset={true}
      prev={prev}
      next={null}
    />
  );
}
