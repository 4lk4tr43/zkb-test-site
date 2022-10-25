<script>
	export let description
	export let href
	export let title
</script>

<a {href}>
	<div class="card">
		<slot />
		<div class='container'>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	</div>
</a>

<style>
		a {
				text-decoration: none;
		}

		h3 {
        color: #333;
		}

		p {
				color: #555;
		}

    .card {
				background: white;
				border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
        padding: 2px 16px;
    }
</style>