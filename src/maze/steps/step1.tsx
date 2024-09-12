import { MazeWorkspace } from '../template';

type Props = {
	next: () => void;
};
export default function Step1({ next }: Props) {
	drop(next);
	return (
		<MazeWorkspace
			height={1}
			width={2}
			description="step1: クリアしてみよう。"
			allowReset={false}
		/>
	);
}

function drop(val: unknown) {
	return val;
}
