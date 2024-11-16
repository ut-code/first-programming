import { MazeWorkspace } from "../template";

type Props = {
  prev: () => void;
};

export default function Step3({ prev }: Props) {
  return (
    <MazeWorkspace
      width={8}
      height={8}
      description="汎用アルゴリズムを作ってみよう"
      allowReset={true}
      prev={prev}
      next={null}
    />
  );
}
