<script>
	export let aboutImage = '/imgs/me.jpeg';
	export let title = 'Full stack !';
	export let aboutText = "I'am a 20 year old guy 👨‍🎓 I study in the Faculty of Computing & information technology Arab Academy Aswan, I have a big mind and heart which will not allow me to reach one day without developing myself 🔥 I don't like losing & I have to fight every day until I win 🥇 I hope one day I can look back and say I did it I succeeded 🌟 finally my dream is that Become the best programmer the world has known 😊";
</script>

<section class="about" id="about">
	<h2 class="heading">About<span> Me</span></h2>
	<div class="about-img">
		<img src={aboutImage} alt="About me">
		<span class="circle-spain"></span>
	</div>

	<div class="about-content">
		<h3>{title}</h3>
		<p>{aboutText}</p>
	</div>
</section>

<style>
	.about {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		background: var(--sec-bg-color);
		padding-bottom: 6rem;
	}

	.heading {
		font-size: 5rem;
		margin-bottom: 3rem;
		text-align: center;
	}

	.heading span {
		color: var(--sub-color);
	}

	.about-img {
		position: relative;
		width: 25rem;
		height: 25rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about-img img {
		width: 90%;
		border-radius: 50%;
		border: 0.2rem solid var(--sub-color);
	}

	.about-img .circle-spain {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(0deg);
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border-top: 0.2rem solid var(--sec-bg-color);
		border-bottom: 0.2rem solid var(--sec-bg-color);
		border-left: 0.2rem solid var(--sub-color);
		border-right: 0.2rem solid var(--sub-color);
	}

	.about-content {
		text-align: center;
	}

	.about-content h3 {
		font-size: 2.6rem;
	}

	.about-content p {
		font-size: 1.6rem;
		margin: 2rem 0 3rem;
		max-width: 80rem;
	}

	/* Mobile responsiveness */
	@media(max-width: 991px) {
		.about {
			padding: 10rem 4% 2rem;
		}
	}

	@media(max-width: 768px) {
		.heading {
			font-size: 4rem;
		}

		.about-img {
			width: 20rem;
			height: 20rem;
		}

		.about-content h3 {
			font-size: 2.2rem;
		}

		.about-content p {
			font-size: 1.4rem;
		}
	}

	@media(max-width: 520px) {
		.heading {
			font-size: 3.5rem;
		}

		.about-img {
			width: 18rem;
			height: 18rem;
		}

		.about-content h3 {
			font-size: 2rem;
		}

		.about-content p {
			font-size: 1.3rem;
		}
	}
</style>