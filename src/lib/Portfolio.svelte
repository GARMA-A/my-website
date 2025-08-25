<script>
	import Header from './Header.svelte';
	import HomeSection from './HomeSection.svelte';
	import AboutSection from './AboutSection.svelte';
	import EducationSection from './EducationSection.svelte';
	import SkillsSection from './SkillsSection.svelte';
	import Footer from './Footer.svelte';

	// Props for customization
	export let name = 'Girgis Emad';
	export let title = 'Full stack developer!';
	export let motto = 'THE ONLY WAY IS UP';
	export let resumeUrl = 'https://www.linkedin.com/in/girgis-emad-garma-96943a258/overlay/1635541771265/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD9sq-EBnZqGW4zzQX6VXHYFhUiBGP89DGk';
	export let linkedinUrl = 'https://www.linkedin.com/in/girgis-emad-garma-96943a258/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BxoJJYBM%2BTSuJAh3pxNX2AA%3D%3D';
	export let githubUrl = 'https://github.com/GARMA-A';
	export let instagramUrl = 'https://www.instagram.com/girgisyt/?hl=ar#';
	export let whatsappUrl = 'https://wa.me/qr/I5I632ZU54YCH1';
	export let aboutImage = '/imgs/me.jpeg';
	export let aboutText = "I'am a 20 year old guy 👨‍🎓 I study in the Faculty of Computing & information technology Arab Academy Aswan, I have a big mind and heart which will not allow me to reach one day without developing myself 🔥 I don't like losing & I have to fight every day until I win 🥇 I hope one day I can look back and say I did it I succeeded 🌟 finally my dream is that Become the best programmer the world has known 😊";
</script>

<svelte:head>
	<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
	<link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet'>
</svelte:head>

<Header />

<HomeSection 
	{name} 
	{title} 
	{motto} 
	{resumeUrl} 
	{linkedinUrl} 
	{githubUrl} 
	{instagramUrl} 
	{whatsappUrl} 
/>

<AboutSection 
	{aboutImage} 
	{aboutText} 
	title="Full stack !" 
/>

<EducationSection />

<SkillsSection />

<Footer />

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border: none;
		outline: none;
		scroll-behavior: smooth;
		font-family: 'poppins', sans-serif;
		color: rgb(201, 233, 254);
		text-decoration: none;
	}

	:global(:root) {
		--bg-color: #09031B;
		--sec-bg-color: #344162;
		--text-color: #aa78cd;
		--white: #fdfdfd;
		--sub-color: #e4d4f9;
	}

	:global(html) {
		font-size: 50%;
		overflow-x: hidden;
	}

	:global(body) {
		background-color: var(--bg-color);
		color: var(--white);
	}

	:global(section) {
		min-height: 100vh;
		padding: 10rem 9% 2rem;
	}
</style>