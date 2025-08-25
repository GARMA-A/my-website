<script>
	export let name = 'Girgis Emad';
	export let title = 'Full stack developer!';
	export let motto = 'THE ONLY WAY IS UP';
	export let resumeUrl = '#';
	export let linkedinUrl = '#';
	export let githubUrl = '#';
	export let instagramUrl = '#';
	export let whatsappUrl = '#';
</script>

<section class="home show-animate" id="home">
	<div class="home-content">
		<h1>Hi , I'm <span>{name}</span></h1>
		<div class="text-animate">
			<h3>{title}</h3>
			<span class="animate" style="--i:3;"></span>
		</div>
		<p>{motto}</p>
		<div class="btn-box">
			<a href={resumeUrl} class="btn">Resume</a>
			<a href={linkedinUrl} class="btn">Linkedin</a>
		</div>
	</div>

	<div class="home-sci">
		<a href={githubUrl}><i class='bx bxl-github'></i></a>
		<a href={instagramUrl}><i class='bx bxl-instagram'></i></a>
		<a href={whatsappUrl}><i class='bx bxl-whatsapp'></i></a>
	</div>

	<div class="home-imghover"></div>
</section>

<style>
	.home {
		display: flex;
		align-items: center;
		padding: 0 9%;
		background: url('/imgs/HEADER.jpeg') no-repeat;
		background-size: cover;
		background-position: end;
	}

	.home-content {
		max-width: 65rem;
		z-index: 99;
	}

	.home-content h1 {
		font-size: 5.6rem;
		font-weight: 700;
		line-height: 1.3;
	}

	.home-content h1 span {
		color: #fff;
	}

	.home-content .text-animate {
		position: relative;
		width: 33.8rem;
	}

	.home-content .text-animate h3 {
		font-size: 3.0rem;
		font-weight: 700;
		color: transparent;
		-webkit-text-stroke: 1.5px var(--sec-bg-color);
	}

	.home-content p {
		font-size: 1.6rem;
		margin: 2rem 0 4rem;
	}

	.btn-box {
		position: relative;
		display: flex;
		justify-content: space-between;
		width: 34.5rem;
		height: 5rem;
	}

	.btn-box .btn {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 15rem;
		height: 100%;
		background-color: var(--sub-color);
		border: 0.2rem solid var(--sub-color);
		border-radius: 0.8rem;
		font-size: 2rem;
		font-weight: 600;
		letter-spacing: 0.1rem;
		color: var(--bg-color);
		z-index: 1;
		overflow: hidden;
		transition: 0.5s;
	}

	.btn-box .btn::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: #87a7f3;
		z-index: -1;
		transition: 0.5s;
	}

	.btn-box .btn:hover::before {
		width: 100%;
	}

	.home-sci {
		position: absolute;
		bottom: 4rem;
		width: 170px;
		display: flex;
		justify-content: space-between;
	}

	.home-sci a {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background: transparent;
		border: 0.2rem solid var(--sec-bg-color);
		border-radius: 50%;
		font-size: 25px;
		color: var(--sub-color);
		z-index: 1;
		overflow: hidden;
		transition: 0.5s;
	}

	.home-sci a::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: rgba(65, 59, 84, 0.7);
		z-index: -1;
		transition: 0.5s;
	}

	.home-sci a:hover::before {
		width: 100%;
	}

	.home-imghover {
		position: absolute;
		top: 0;
		right: 0;
		width: 45%;
		height: 100%;
		background: transparent;
		transition: 2s;
	}

	.home-imghover:hover {
		background: var(--bg-color);
		opacity: 0.8;
	}

	/* Mobile responsiveness */
	@media(max-width: 768px) {
		.home-content h1 {
			font-size: 4rem;
		}

		.home-content .text-animate h3 {
			font-size: 2.5rem;
		}

		.btn-box {
			width: 30rem;
		}

		.btn-box .btn {
			width: 14rem;
		}
	}

	@media(max-width: 520px) {
		.home-content h1 {
			font-size: 3.5rem;
		}

		.btn-box {
			width: 25rem;
		}

		.btn-box .btn {
			width: 12rem;
		}
	}
</style>