import Blockly, { type VariableModel } from "blockly";
import { useCallback, useEffect, useRef } from "react";
import { javascriptGenerator } from "./types.blockly";

/** ブロックの数が少ない場合 */
export type BlocklyToolboxDefinitionFlyout = {
  type: "flyout";
  blockTypes: string[];
};

/** ブロックの数が多い場合、もしくは変数が必要な場合 */
export type BlocklyToolboxDefinitionCategory = {
  type: "category";
  categories: Array<{ name: string; blockTypes: string[] }>;
  enableVariables?: boolean;
};

export type BlocklyToolboxDefinition =
  | BlocklyToolboxDefinitionFlyout
  | BlocklyToolboxDefinitionCategory;

export type UseBlocklyWorkspaceProps = {
  toolboxDefinition: BlocklyToolboxDefinition;
  onCodeChange?: (code: string, variableNames: string[]) => void;
};

export type UseBlocklyWorkspaceReturnValue = {
  workspaceAreaRef: React.MutableRefObject<HTMLDivElement | null>;
  highlightBlock(id: string): void;
  getCode(): string;
};

export function useBlocklyWorkspace({
  toolboxDefinition,
  onCodeChange,
}: UseBlocklyWorkspaceProps): UseBlocklyWorkspaceReturnValue {
  const workspaceAreaRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg>();

  const highlightBlock = useCallback((id: string) => {
    workspaceRef.current?.highlightBlock(id);
  }, []);

  const getCode = useCallback(
    () => javascriptGenerator.workspaceToCode(workspaceRef.current),
    []
  );

  useEffect(() => {
    const workspaceArea = workspaceAreaRef.current;
    if (!workspaceArea) return undefined;

    const toolbox =
      toolboxDefinition.type === "flyout"
        ? {
            kind: "flyoutToolbox",
            contents: [
              ...(toolboxDefinition.type === "flyout"
                ? toolboxDefinition.blockTypes.map((type) => ({
                    kind: "block",
                    type,
                  }))
                : []),
                //テンプレートを作成
              {
                kind: "block",
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
            ],
          }
        : {
            kind: "categoryToolbox",
            contents: [
              ...(toolboxDefinition.type === "category"
                ? toolboxDefinition.categories.map((category) => ({
                    kind: "category",
                    name: category.name,
                    contents: category.blockTypes.map((type) => ({
                      kind: "block",
                      type,
                    })),
                  }))
                : []),
              ...(toolboxDefinition.enableVariables
                ? [{ kind: "category", name: "変数", custom: "VARIABLE" }]
                : []),
            ],
          };

    const workspace = Blockly.inject(workspaceArea, {
      toolbox,
      grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
      trashcan: true,
      renderer: "thrasos",
      move: { drag: true, scrollbars: true, wheel: true },
    });

    return () => workspace.dispose();
  }, [toolboxDefinition, workspaceAreaRef]);

  return {
    workspaceAreaRef,
    highlightBlock,
    getCode,
  };
}
