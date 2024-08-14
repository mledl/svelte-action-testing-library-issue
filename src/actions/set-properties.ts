import type { Action } from 'svelte/action';

export const setProperties: Action<HTMLElement, Record<string, unknown>> = <T extends object>(
	node: Node,
	properties: T
) => {
	Object.assign(node, { ...properties });

	return {
		update(updatedProperties: T) {
			Object.assign(node, { ...updatedProperties });
		}
	};
};
