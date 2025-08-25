<script>
	export let educationData = [
		{
			year: '2020 - 2021',
			title: 'UI/UX Degree - Google',
			description: 'master of ui & ux design UI on figma software UX certificate from google 230 hours online course.'
		},
		{
			year: '2021 - 2022',
			title: 'Frontend',
			description: "I'm NEXT.js Front end Web Developer using {TailWind,MUI} For Styling"
		},
		{
			year: '2022 - 2023',
			title: 'Back End',
			description: "I'm Flask And Node.js Back end Web Developer using SQL , MongoDB"
		}
	];

	export let experienceData = [
		{
			year: '2022 - 2026',
			title: 'AAST University',
			description: "I'am in my third year at the College of Computing and Information Technology"
		},
		{
			year: '2021 - 2022',
			title: 'Front Projects',
			description: 'I have manufactured many products in the field of education and selling products and games, which you can find on GitHub'
		},
		{
			year: '2022 - 2023',
			title: 'Back Projects',
			description: 'Designed complex Api and Databases using Flask with help of Docker to manage the projects'
		}
	];
</script>

<section class="education" id="education">
	<h2 class="heading">My <span>Journey</span></h2>

	<div class="education-row">
		<div class="education-column">
			<h3 class="titl">Education</h3>

			<div class="education-box">
				{#each educationData as item}
					<div class="education-content">
						<div class="content">
							<div class="year">
								<i class='bx bx-calendar'></i>
								{item.year}
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="education-column">
			<h3 class="titl">Experience</h3>

			<div class="education-box">
				{#each experienceData as item}
					<div class="education-content">
						<div class="content">
							<div class="year">
								<i class='bx bx-calendar'></i>
								{item.year}
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.education {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		min-height: auto;
		padding-bottom: 5rem;
	}

	.heading {
		font-size: 5rem;
		margin-bottom: 3rem;
		text-align: center;
	}

	.heading span {
		color: var(--sub-color);
	}

	.education-row {
		display: flex;
		flex-wrap: wrap;
		gap: 5rem;
	}

	.education-column {
		flex: 1 1 40rem;
	}

	.education-column .titl {
		font-size: 2.5rem;
		margin: 0 0 1.5rem 2rem;
	}

	.education-box {
		border-left: 0.2rem solid var(--sub-color);
	}

	.education-content {
		position: relative;
		padding-left: 2rem;
	}

	.education-content::before {
		content: '';
		position: absolute;
		top: 0;
		left: -1.1rem;
		width: 2rem;
		height: 2rem;
		background: var(--sub-color);
		border-radius: 50%;
	}

	.content {
		position: relative;
		padding: 1.5rem;
		border: 0.2rem solid var(--sub-color);
		border-radius: 0.6rem;
		margin-bottom: 2rem;
		overflow: hidden;
	}

	.content::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: var(--sec-bg-color);
		z-index: -1;
		transition: 0.5s;
	}

	.content:hover::before {
		width: 100%;
	}

	.year i {
		color: var(--sub-color);
	}

	.content .year {
		font-size: 1.5rem;
		color: var(--sub-color);
		padding-bottom: 0.5rem;
	}

	.content h3 {
		font-size: 2rem;
	}

	.content p {
		font-size: 1.6rem;
		padding-top: 0.5rem;
	}

	/* Mobile responsiveness */
	@media(max-width: 991px) {
		.education {
			padding: 10rem 4% 2rem;
		}

		.education-row {
			flex-direction: column;
		}
	}

	@media(max-width: 768px) {
		.heading {
			font-size: 4rem;
		}

		.education-column .titl {
			font-size: 2rem;
		}

		.content h3 {
			font-size: 1.8rem;
		}

		.content p {
			font-size: 1.4rem;
		}
	}

	@media(max-width: 520px) {
		.heading {
			font-size: 3.5rem;
		}

		.education-column .titl {
			font-size: 1.8rem;
		}

		.content h3 {
			font-size: 1.6rem;
		}

		.content p {
			font-size: 1.3rem;
		}
	}
</style>