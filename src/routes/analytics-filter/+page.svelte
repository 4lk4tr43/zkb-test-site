<script>
	import Card from '../../lib/components/Card.svelte'
	import { onMount } from 'svelte'

	const testLinks = [
		'file://c:/test.txt',
		'mailto:mom@test.com',
		'tel:0791235476',
		'http://localhost:8080/test',
		'sip:brother@test.com',
		'skype:sister',
	]

	let testVars = `{
	"eVar1": "file://c:/test.txt",
	"prop1": "D=v1",
	"eVar2": "mailto:mom@test.com",
	"prop2": "D=v2",
	"eVar3": "tel:0791235476",
	"prop3": "D=v3",
	"eVar4": "http://localhost:8080/test",
	"prop4": "D=v4",
	"eVar5": "sip:brother@test.com",
	"prop5": "D=v5",
	"eVar6": "skype:sister",
	"prop6": "D=v6",
	"eVar7": "",
	"prop7": "D=v7",
	"prop8": "D=v8"
}`

	let filterSwitch
	let linkName = 'test-link'

	onMount(async () => {
		window.adobeDataLayer = window.adobeDataLayer || []
		if (window?._satellite?.buildInfo) {
			filterSwitch = !!window?._adobeAnalyticsFilter_
		} else {
			window.addEventListener('DOMContentLoaded', async () => {
				filterSwitch = !!window?._adobeAnalyticsFilter_
			})
		}
	})
</script>

<Card href="#" title="Filter Switch"
      description="Enable or disable Analytics client filtering.">
	<div class="content">
		<input bind:checked={filterSwitch} on:change={() => window._adobeAnalyticsFilter_ = filterSwitch} type="checkbox">
		<label>Filter</label>
	</div>
</Card>
<br>
<Card href="#" title="Test Links"
      description="Special links with possible confidential data. Should be filtered out in the analytics calls.">
	<div class="content">
		{#each testLinks as testLink}
			<a on:click|preventDefault={() => {}} href={testLink}>{testLink}</a>
		{/each}
	</div>
</Card>
<br>
<Card href="#" title="Test Adobe Analytics Calls" description="Execute the data layer as page or link call.">
	<div class="content space-between">
		<textarea bind:value={testVars} />
		<div class="controls">
			<button on:click={() => window.adobeDataLayer.push({...{ event: 'page-load' }, ...JSON.parse(testVars)})}>
				Send Page Load
			</button>
			<br>
			<div>
				<input type="text" bind:value={linkName}>
				<button
					on:click={() => window.adobeDataLayer.push({...{ event: 'custom-link', eventInfo: {linkName} }, ...JSON.parse(testVars)})}>
					Send Link
				</button>
			</div>
		</div>
	</div>
</Card>

<style>
	a {
		background: white;
		border-radius: .25rem;
		border: 1px solid darkgrey;
		display: block;
		margin: .25rem;
		padding: .5rem;
		text-decoration: none;
		width: 16rem;
	}

	textarea {
		background: black;
		color: white;
		height: 20rem;
		width: 30rem;
	}

	a:hover {
		background: lightgrey;
	}

	.content {
		padding: 1rem;
	}

	.space-between {
		display: flex;
	}

	.controls {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}

	button {
		background-color: #EA4C89;
		border-radius: 8px;
		border-style: none;
		box-sizing: border-box;
		color: #FFFFFF;
		cursor: pointer;
		display: inline-block;
		font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 14px;
		font-weight: 500;
		height: 40px;
		line-height: 20px;
		list-style: none;
		margin: 0;
		outline: none;
		padding: 10px 16px;
		position: relative;
		text-align: center;
		text-decoration: none;
		transition: color 100ms;
		vertical-align: baseline;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	button:hover,
	button:focus {
		background-color: #F082AC;
	}
</style>