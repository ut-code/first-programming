<script lang="ts">
	import { onDestroy } from 'svelte';
	import Blockly, { VariableModel } from 'blockly';
	import { javascriptGenerator } from './types.blockly';

	/** ブロックの数が少ない場合 */
	type BlocklyToolboxDefinitionFlyout = {
		type: 'flyout';
		blockTypes: string[];
	};

	/** ブロックの数が多い場合、もしくは変数が必要な場合 */
	type BlocklyToolboxDefinitionCategory = {
		type: 'category';
		categories: Array<{ name: string; blockTypes: string[] }>;
		enableVariables?: boolean;
	};

	type BlocklyToolboxDefinition = BlocklyToolboxDefinitionFlyout | BlocklyToolboxDefinitionCategory;

	export let toolboxDefinition: BlocklyToolboxDefinition; // WRITE ONLY
	export let onCodeChange: ((code: string, variableNames: string[]) => void) | undefined =
		undefined; // WRITE ONLY

	let workspaceArea = null;
	let workspace: Blockly.WorkspaceSvg;
	export let code: string;
	$: code = javascriptGenerator.workspaceToCode(workspace);

	export let highlightBlock = (_: string) => {};
	$: highlightBlock = (id: string) => {
		workspace?.highlightBlock(id);
	};

	$: {
		if (workspace) workspace.dispose();
		if (workspaceArea) {
			workspace = Blockly.inject(workspaceArea, {
				toolbox: toolbox(toolboxDefinition),
				grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
				trashcan: true,
				renderer: 'thrasos',
				move: { drag: true, scrollbars: true, wheel: true }
			});
			if (onCodeChange !== undefined) {
				workspace.addChangeListener(assignOnCodeChange(onCodeChange));
			}
		}
	}
	onDestroy(() => workspace?.dispose);

	let previousCode = '';
	function assignOnCodeChange(
		onCodeChange: (code: string, varNames: string[]) => void
	): () => void {
		return () => {
			if (previousCode !== code) {
				previousCode = code;
				onCodeChange(
					code,
					Blockly.Variables.allUsedVarModels(workspace).map((model: VariableModel) => model.name)
				);
			}
		};
	}

	// ui stuff
	function toolbox(toolboxDefinition: BlocklyToolboxDefinition) {
		if (toolboxDefinition.type === 'flyout') {
			return {
				kind: 'flyoutToolbox',
				contents: toolboxDefinition.blockTypes.map((type) => ({
					kind: 'block',
					type
				}))
			};
		} else {
			return {
				kind: 'categoryToolbox',
				contents: [
					...toolboxDefinition.categories.map((category) => ({
						kind: 'category',
						name: category.name,
						contents: category.blockTypes.map((type) => ({
							kind: 'block',
							type
						}))
					})),
					...(toolboxDefinition.enableVariables
						? [{ kind: 'category', name: '変数', custom: 'VARIABLE' }]
						: [])
				]
			};
		}
	}
</script>
