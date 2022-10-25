<script>
	import { onMount } from 'svelte'

	let buildInfo, environment

	onMount(async () => {
		if (window?._satellite?.buildInfo) {
			buildInfo = window?._satellite?.buildInfo
			environment = window?._satellite?.environment?.stage
		} else {
			window.addEventListener('DOMContentLoaded', async () => {
				buildInfo = window?._satellite?.buildInfo
				environment = window?._satellite?.environment?.stage
			})
		}
	})
</script>

<div class="root">
	<h3>Launch</h3>
	<div><span>Build Date</span> { buildInfo?.buildDate || '' }</div>
	<div><span>Environment</span> { environment || '' }</div>
</div>

<style>
	h3 {
		margin: 0;
	}

	span {
		font-weight: bolder;
	}
	.root {
		display: flex;
		flex-direction: column;
	}

	.root > div {
		display: flex;
		justify-content: space-between;
		width: 20rem;
	}
</style>