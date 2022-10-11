<script>
	const testLinks = [
		'file://test.txt',
		'mailto:mom@test.com',
		'tel:0791235476',
		'http://localhost:8080/test',
		'sip:brother@test.com',
		'skype:sister',
	]
</script>

<h1>Home</h1>

{#each testLinks as testLink}
	<a href={testLink}>{testLink}</a>
{/each}

<style>
	a {
		border-radius: .25rem;
		border: 1px solid darkgrey;
		display: block;
		margin: .25rem;
		padding: .5rem;
		text-decoration: none;
		width: 12rem;
	}

	a:hover {
		background: lightgrey;
	}
</style>