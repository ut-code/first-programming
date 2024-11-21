//xml形式でテンプレートを作成できる
export const templates = [
  {
    name: "While True Template",
    blockxml: `
      <block type="custom_while_true">
        <statement name="STATEMENTS">
          <block type="custom_common_if_else">
            <value name="EXPRESSION">
            </value>
            <statement name="TRUE_STATEMENTS">
            </statement>
            <statement name="FALSE_STATEMENTS">
            </statement>
          </block>
        </statement>
      </block>
    `,
  },
];
