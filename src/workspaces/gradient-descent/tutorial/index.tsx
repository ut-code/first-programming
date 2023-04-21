import { TutorialDialogPropsStep } from "../../../components/TutorialDialog";

export const gradTutorialSteps: TutorialDialogPropsStep[] = [
  {
    title: "ページ 1",
    content: <>ページ 1 の内容</>,
  },
  {
    title: "ページ 2",
    content: (
      <>
        ページ 2 の内容
        <img
          width="100%"
          src={new URL("./sample.svg", import.meta.url).toString()}
          alt="画像や動画をインポートして使えます。圧縮等は効かないので必ず事前に圧縮しましょう。SVG の圧縮には SVGO がおすすめです。"
        />
      </>
    ),
  },
];