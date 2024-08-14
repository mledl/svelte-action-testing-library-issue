import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/svelte';
import Button from './Button.svelte';

// Note: stencilJs requires to run 'defineCustomElements' method to load the web components.
// Doing so, only id attribute will be added and web component specific ones get lost.
// Uncomment to test.
// import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader';
// defineCustomElements();

// Note: Without 'defineCustomElements' called, the first 'ld-button' renders with all props as expected.
// The one that sets the props using 'setProperties' action only sets 'id' property.
describe('set properties using Svelte action', () => {
	test('renders different variations of setting props', async () => {
		const { container, debug } = render(Button, { id: '1', href: '/test/1', label: 'Click me' });
		debug();

		const anchorElements = container.querySelectorAll('a');
		expect(anchorElements).toHaveLength(2);
		expect(anchorElements[0].getAttribute('href')).toBe('/test/1');
		expect(anchorElements[1].getAttribute('href')).toBe('/test/1');

		const ldButtonElements = container.querySelectorAll('ld-button');
		expect(ldButtonElements).toHaveLength(2);
		expect(ldButtonElements[0].getAttribute('mode')).toBe('secondary');
		expect(ldButtonElements[1].getAttribute('mode')).toBe('secondary');
	});
});
