# AGENTS.md

このリポジトリで作業する AI エージェント向けの約束ごと。

## 学園祭トップページへのリンクは festival.utcode.net に固定する

- ヘッダーやクリア後の「戻る」の遷移先は `https://festival.utcode.net` にし、`kf77.utcode.net` のような回ごとの URL を書かない。`festival.utcode.net` は utcode.net の DNS 設定で最新の学園祭サイトにリダイレクトされるため。回ごとの URL を書くと、学園祭のたびにこのリポジトリを直す必要がある。
- 文言も「五月祭」「駒場祭」ではなく「学園祭」にする。同じ理由で、回ごとに書き換えずに済むようにするため。
- リンク先が古い学園祭を指しているときは、このリポジトリではなく `festival.utcode.net` のリダイレクト先を直す。手順は ut-code/festival-website の README の「毎世代やること」にある。
