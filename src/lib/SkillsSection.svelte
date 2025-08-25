<script>
	export let codingSkills = [
		{ name: 'HTML', percentage: 90 },
		{ name: 'CSS(TailWind)', percentage: 70 },
		{ name: 'Next.js Javascript', percentage: 60 },
		{ name: 'C++ & C (Problem solving)', percentage: 70 },
		{ name: 'java(OOP,JavaFX)', percentage: 40 }
	];

	export let professionalSkills = [
		{ name: 'Web Design', percentage: 85 },
		{ name: 'Web Development', percentage: 40 },
		{ name: 'Front End', percentage: 80 },
		{ name: 'Back End', percentage: 65 }
	];
</script>

<section class="skills" id="skills">
	<h2 class="heading">My <span>Skills</span></h2>

	<div class="skills-row">
		<div class="skills-column">
			<h3 class="title">Coding skills</h3>
			<div class="skills-box">
				<div class="skills-content">
					{#each codingSkills as skill}
						<div class="progress">
							<h3>{skill.name}<span>{skill.percentage}%</span></h3>
							<div class="bar">
								<span style="width: {skill.percentage}%"></span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="skills-column">
			<h3 class="title">professional Skills</h3>
			<div class="skills-box">
				<div class="skills-content">
					{#each professionalSkills as skill}
						<div class="progress">
							<h3>{skill.name}<span>{skill.percentage}%</span></h3>
							<div class="bar">
								<span style="width: {skill.percentage}%"></span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.skills {
		min-height: auto;
		padding-bottom: 7rem;
		background: var(--sec-bg-color);
	}

	.heading {
		font-size: 5rem;
		margin-bottom: 3rem;
		text-align: center;
	}

	.heading span {
		color: var(--sub-color);
	}

	.skills-row {
		display: flex;
		flex-wrap: wrap;
		gap: 5rem;
	}

	.skills-column {
		flex: 1 1 40rem;
	}

	.skills-column .title {
		font-size: 2.5rem;
		margin: 0 0 1.5rem;
	}

	.skills-box .skills-content {
		position: relative;
		border: 0.2rem solid var(--sub-color);
		border-radius: 0.6rem;
		padding: 0.5rem 1.5rem;
		z-index: 1;
		overflow: hidden;
	}

	.skills-box .skills-content::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: #4e60707d;
		z-index: -1;
		transition: 0.5s;
	}

	.skills-box .skills-content:hover::before {
		width: 100%;
	}

	.skills-content .progress {
		padding: 1rem 0;
	}

	.skills-content .progress h3 {
		font-size: 1.7rem;
		display: flex;
		justify-content: space-between;
		color: var(--white);
	}

	.skills-content .progress h3 span {
		color: var(--white);
	}

	.skills-content .progress .bar {
		height: 2.5rem;
		border-radius: 0.6rem;
		border: 0.2rem solid var(--text-color);
		padding: 0.5rem;
		margin: 1rem 0;
	}

	.skills-content .progress .bar span {
		display: block;
		height: 100%;
		border-radius: 0.3rem;
		background: var(--sub-color);
		transition: width 2s ease-in-out;
	}

	/* Mobile responsiveness */
	@media(max-width: 991px) {
		.skills {
			padding: 10rem 4% 2rem;
		}

		.skills-row {
			flex-direction: column;
		}
	}

	@media(max-width: 768px) {
		.heading {
			font-size: 4rem;
		}

		.skills-column .title {
			font-size: 2rem;
		}

		.skills-content .progress h3 {
			font-size: 1.5rem;
		}
	}

	@media(max-width: 520px) {
		.heading {
			font-size: 3.5rem;
		}

		.skills-column .title {
			font-size: 1.8rem;
		}

		.skills-content .progress h3 {
			font-size: 1.4rem;
		}

		.skills-content .progress .bar {
			height: 2rem;
		}
	}
</style>