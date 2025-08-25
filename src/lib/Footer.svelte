<script>
	export let copyrightText = 'Copyright © 2023 by Girgis Elghattas | ALL Rights Reserved.';
</script>

<footer class="footer">
	<div class="footer-text">
		<p>{copyrightText}</p>
	</div>
	<div class="footer-icontop">
		<a href="#"><i class='bx bxs-chevrons-up'></i></a>
	</div>
</footer>

<style>
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: 2rem 9%;
		background: #0d0f2a;
	}

	.footer-text p {
		font-size: 1.6rem;
	}

	.footer-icontop a {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 0.8rem;
		background: #9299cd;
		border: 0.2rem solid var(--sub-color);
		border-radius: 0.6rem;
		z-index: 1;
		overflow: hidden;
	}

	.footer-icontop a::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: #100b1d;
		z-index: -1;
		transition: 0.5s;
	}

	.footer-icontop a:hover::before {
		width: 100%;
	}

	.footer-icontop a i {
		font-size: 2.4rem;
		color: var(--bg-color);
		transition: 0.5s;
	}

	.footer-icontop a:hover i {
		color: #fff;
	}

	/* Mobile responsiveness */
	@media(max-width: 991px) {
		.footer {
			padding: 2rem 4%;
		}
	}

	@media(max-width: 768px) {
		.footer {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
		}

		.footer-text p {
			font-size: 1.4rem;
		}
	}

	@media(max-width: 520px) {
		.footer-text p {
			font-size: 1.2rem;
		}
	}
</style>