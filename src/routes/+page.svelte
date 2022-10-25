<script>
	import Card from '../lib/components/Card.svelte'

	const projects = [
		{
			description: 'Filter unwanted strings from Adobe Analytics',
			href: 'analytics-filter',
			title: 'Analytics Filter',
		},
		{
			description: 'Record, observe, and replay client activity.',
			href: 'test-tool',
			title: 'Test Tool',
		},
	]
</script>

{#each projects as { description, href, title }}
	<Card {description} {href} {title}></Card>
	<br>
{/each}
