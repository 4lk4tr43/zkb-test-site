<script>
	import Background from '../lib/components/Background.svelte'
	import LaunchBuildInfo from '../lib/components/LaunchBuildInfo.svelte'
</script>

<nav>
	<a href="/"><h2>HOME</h2></a>
	<LaunchBuildInfo />
</nav>

<Background />
<main>
	<slot />
</main>

<style>
	main {
		padding: 2rem;
	}

	nav {
		align-items: center;
		background: black;
		display: flex;
		justify-content: space-between;
		color: white;
		padding: 1rem;
	}

	nav > a {
		text-decoration: none;
		color: whitesmoke;
	}

	nav > a:hover {
		color: white;
	}

	h2 {
		margin: 0;
	}
</style>