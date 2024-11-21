import { MazeWorkspace } from "../template";

type Props = {
  prev: () => void;
  next: () => void;
};
export default function Step3({ prev, next }: Props) {
  return (
    <MazeWorkspace
      width={5}
      height={5}
      description="テンプレートを使って、汎用アルゴリズムを構築しよう"
      allowReset={true}
      prev={prev}
      next={next}
    />
  );
}
