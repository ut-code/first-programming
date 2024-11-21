//xml形式でテンプレートを作成できる
export const templates = [
  {
    name: "Template 1",
    blockxml: `
      <block type="custom_while_true">
        <statement name="STATEMENTS">
          <block type="custom_common_if_else">
            <value name="EXPRESSION">
              <block type="custom_maze_checkWall">
                <field name="DIRECTION">left</field>
              </block>
            </value>
            <statement name="TRUE_STATEMENTS">
              <block type="custom_common_if">
                <value name="EXPRESSION">
                  <block type="custom_maze_checkWall">
                    <field name="DIRECTION">top</field>
                  </block>
                </value>
                <statement name="TRUE_STATEMENTS">
                  <block type="custom_common_if_else">
                    <value name="EXPRESSION">
                      <block type="custom_maze_checkWall">
                        <field name="DIRECTION">right</field>
                      </block>
                    </value>
                    <statement name="TRUE_STATEMENTS">

                    </statement>
                    <statement name="FALSE_STATEMENTS">

                    </statement>
                  </block>
                </statement>
                <statement name="FALSE_STATEMENTS">

                </statement>
              </block>
            </statement>
            <statement name="FALSE_STATEMENTS">
            <block type="custom_maze_turn">
              <field name="DIRECTION">left</field>
            </block>
          </statement>
            <next>
              <block type="custom_maze_stepForward"></block>
            </next>
          </block>
        </statement>
      </block>
    `,
  },
];
