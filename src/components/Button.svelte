<script lang="ts">
	import { setProperties } from '../actions/set-properties';

	export let id: string;
	export let label: string;
	export let href: string;
</script>

<a {id} {href}>{label}</a>
<a use:setProperties={{ id }} {href}>{label}</a>

<ld-button id="1" size="lg" mode="secondary">{label}</ld-button>
<ld-button use:setProperties={{ id: '2', mode: 'secondary', size: 'lg' }}>{label}</ld-button>
