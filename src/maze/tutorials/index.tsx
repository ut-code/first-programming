import { Box, Grid, Text } from "@chakra-ui/react";
import { Video } from "../../components/Video";
import type { TutorialDialogPropsStep } from "../../components/Dialogs/TutorialDialog";

export const step1: TutorialDialogPropsStep[] = [
  {
    title: "ブロックプログラミングについて",
    content: (
      <>
        <Text my={2}>
          <strong>「初めてのプログラミング 迷路」にようこそ！</strong>
          これから皆さんにはブロックを組み合わせて、プログラムを組んでもらいます。
          ブロックはホールドして自由に配置でき、左側のメニューには、様々なブロックがあります。
          ブロックを駆使して、プログラミングを体験してみましょう！
          では、右下の「次へ」ボタンをクリックしましょう。
        </Text>
        <Video src={new URL("./maze-block.mp4", import.meta.url).toString()} />
      </>
    ),
  },
  {
    title: "ゴールまで到達しよう",
    content: (
      <>
        <Text my={2}>
          さっそくブロックを並べて、迷路内にいる赤いアイコンを右下の旗印の場所まで移動させましょう。
          なお、この文章が書かれているポップアップは、右上の「ヘルプ」からいつでも開くことができます。
          いつでも見返してくださいね。では、右下の「はじめる」ボタンをクリックしてください！
        </Text>
        <Video src={new URL("./maze-step1.mp4", import.meta.url).toString()} />
      </>
    ),
  },
];

export const step2: TutorialDialogPropsStep[] = [
  {
    title: "いろんなブロックに触れてみましょう！",
    content: (
      <>
        <Text my={2}>
          ステージ 1
          のクリアおめでとうございます！ブロックの組み方はわかったでしょうか？ステージ
          2
          では赤色のブロック以外も使ってみましょう！一直線の迷路ですが、ブロックを組み合わせて色々なプログラムを組むことができます！いろんなブロックに触れてみてくださいね
        </Text>
        <Video src={new URL("./maze-step2.mp4", import.meta.url).toString()} />
      </>
    ),
  },
];

export const step3: TutorialDialogPropsStep[] = [
  {
    title: "少し難しいかも？",
    content: (
      <>
        <Text my={2}>
          ステージ 2
          のクリアおめでとうございます！プログラミングの雰囲気がつかめてきたでしょうか？ステージ
          3
          では本格的なアルゴリズムを考えることになります。ちょっと難しくなりますが、頑張ってついてきてください！
        </Text>
        <Video
          src={new URL("./maze-advanced.mp4", import.meta.url).toString()}
        />
      </>
    ),
  },
  {
    title: "どんな迷路でも",
    content: (
      <>
        <Text my={2}>
          「新しい迷路にする」ボタンをクリックすると、全く異なる迷路が生成されます。ステージ
          3 では繰り返しや条件分岐をうまく使用し、
          <strong>どんな迷路にも対応できる</strong>
          プログラムを作りましょう。
        </Text>
        <Video
          src={new URL("./maze-advanced.mp4", import.meta.url).toString()}
        />
      </>
    ),
  },
  {
    title: "アルゴリズム",
    content: (
      <Grid templateColumns="3fr 4fr" gap={3}>
        <Box>
          <Text my={2}>
            古来から知られている迷路の解法に、「左手法」があります。この方法では、プレーヤーは迷路内で自分の手を左の壁に当て、そのまま離さないように進みます。
          </Text>
          <Text my={2}>
            シンプルなアルゴリズムですが、島が存在しない単純な迷路は必ず方法で解くことができます。用意されたブロックのみを用いて「左手法」はどのように表現されるでしょうか。
          </Text>
        </Box>
        <img
          width="100%"
          src={new URL("./maze-method.svg", import.meta.url).toString()}
          alt="左手法"
        />
      </Grid>
    ),
  },
  {
    title: "テンプレート",
    content: (
      <Grid templateColumns="4fr 3fr" gap={3}>
        <Box>
          <Text my={2}>
            ブロックの一番下にテンプレートが用意されています。このテンプレートに赤色のブロックを加えることで、どんな迷路にも対応できるプログラムを作ることができます。左手法を意識して、いろいろな迷路をクリアしてみましょう！
          </Text>
        </Box>
      </Grid>
    ),
  },
];
export const step4: TutorialDialogPropsStep[] = [
  {
    title: "最終ステージ！",
    content: (
      <>
        <Text my={2}>
          ステージ 3
          のクリアおめでとうございます！汎用的なアルゴリズムは組めたでしょうか？最終ステージでは、
          <strong>自分の力で</strong>
          汎用的なアルゴリズムを作ってもらいます。テンプレートよりも少ないブロック数でアルゴリズムを作ってみましょう！実は
          6
          個のブロックだけで、アルゴリズムを組むこともできるんです。ぜひ挑戦してみてくださいね！
        </Text>
        <Video
          src={new URL("./maze-advanced.mp4", import.meta.url).toString()}
        />
      </>
    ),
  },
  {
    title: "アルゴリズム(再掲)",
    content: (
      <Grid templateColumns="3fr 4fr" gap={3}>
        <Box>
          <Text my={2}>
            古来から知られている迷路の解法に、「左手法」があります。この方法では、プレーヤーは迷路内で自分の手を左の壁に当て、そのまま離さないように進みます。
          </Text>
          <Text my={2}>
            シンプルなアルゴリズムですが、島が存在しない単純な迷路は必ず方法で解くことができます。用意されたブロックのみを用いて「左手法」はどのように表現されるでしょうか。
          </Text>
        </Box>
        <img
          width="100%"
          src={new URL("./maze-method.svg", import.meta.url).toString()}
          alt="左手法"
        />
      </Grid>
    ),
  },
  {
    title: "ヒント",
    content: (
      <Grid templateColumns="4fr 3fr" gap={3}>
        <img
          width="100%"
          src={new URL("./maze-hint.svg", import.meta.url).toString()}
          alt="ヒント"
        />
        <Box>
          <Text my={2}>
            迷路においてプレーヤーが歩かなければならない距離は非常に長いですが、実際は一歩一歩の積み重ねにすぎません。この一歩をもう少し詳しく見てみましょう。
          </Text>
          <Text my={2}>
            いま、プレーヤーは十字路に立っており、前、後ろ、左右のすべての方向に進むことができます。このとき、左手法に従うのであれば、プレーヤーはどちらに進めばよいでしょうか。
          </Text>
          <Text my={2}>
            左の壁に沿って進むので、左方向に進むのが正解ですね。それでは、左にもし壁があったとしたら？その場合はまっすぐ進めば良いはずです。
          </Text>
          <Text my={2}>
            同じように考えて、４つの方向に「優先順位」をつけてみましょう。壁がない方向のうち、最も優先順位が高い方向が、プレーヤーが進むべき道です。
          </Text>
        </Box>
      </Grid>
    ),
  },
];
