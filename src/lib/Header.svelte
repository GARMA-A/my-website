<script>
	import { onMount } from 'svelte';

	let menuActive = false;
	let header;

	onMount(() => {
		const handleScroll = () => {
			if (header) {
				header.classList.toggle('sticky', window.scrollY > 100);
			}
		};

		window.addEventListener('scroll', handleScroll);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMenu() {
		menuActive = !menuActive;
	}

	function closeMenu() {
		menuActive = false;
	}
</script>

<header class="header" bind:this={header}>
	<div id="menu-icon" on:click={toggleMenu}>
		<i class='bx bx-menu'></i>
		<span class="animate" style="--i:2;"></span>
	</div>
	<a href="#" class="logo">GARMA<span class="animate" style="--i:1;"></span></a>
	<nav class="navbar" class:active={menuActive} on:click={closeMenu}>
		<a href="#home" class="active">Home</a>
		<a href="#about">About</a>
		<a href="#education">Education</a>
		<a href="#skills">Skills</a>
		<a href="#contact">Contact</a>

		<span class="active-nav"></span>
		<span class="animate" style="--i:2;"></span>
	</nav>
</header>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 2rem 9%;
		background: transparent;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
		transition: 0.3s;
	}

	.header.sticky {
		background: var(--bg-color);
	}

	.logo {
		position: relative;
		font-size: 2.5rem;
		color: var(--white);
		font-weight: 600;
	}

	.navbar {
		position: relative;
	}

	.navbar a {
		font-size: 1.4rem;
		color: var(--white);
		font-weight: 1000;
		margin-left: 3.5rem;
		transition: 0.3s;
	}

	.navbar a:hover,
	.navbar a.active {
		color: var(--sub-color);
	}

	#menu-icon {
		font-size: 5rem;
		color: var(--text-color);
		cursor: pointer;
		display: none;
	}

	/* Mobile responsiveness */
	@media(max-width: 768px) {
		.header {
			background: var(--bg-color);
		}

		#menu-icon {
			position: absolute;
			left: 85%;
			display: block;
		}

		.navbar {
			position: absolute;
			top: 100%;
			left: -100%;
			width: 100%;
			padding: 1rem 4%;
			background-color: #131218;
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
			transition: 0.25s ease;
			transition-delay: 0.25s;
		}

		.navbar.active {
			transition-delay: 0s;
			left: 0;
		}

		.navbar a {
			display: block;
			font-size: 2rem;
			margin: 3rem 0;
		}
	}
</style>