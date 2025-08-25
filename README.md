# Portfolio Library

A beautiful, customizable Svelte component library for creating professional portfolio websites. This library was converted from a traditional HTML/CSS/JS portfolio website into reusable Svelte components.

## Features

- 🎨 **Modern Design** - Clean, professional portfolio layout
- 📱 **Responsive** - Works perfectly on desktop and mobile devices
- 🔧 **Customizable** - Easy to customize with props
- 🚀 **Framework Agnostic** - Can be used in any Svelte project
- 💻 **TypeScript Support** - Full TypeScript declarations included
- ⚡ **Lightweight** - Minimal dependencies

## Components

### Main Component
- **Portfolio** - Complete portfolio layout with all sections

### Individual Components
- **Header** - Navigation header with mobile menu
- **HomeSection** - Hero section with introduction
- **AboutSection** - About section with image and description
- **EducationSection** - Timeline for education and experience
- **SkillsSection** - Skills display with progress bars
- **Footer** - Footer with copyright and back-to-top button

## Installation

```bash
npm install portfolio-lib
```

## Usage

### Basic Usage

```svelte
<script>
  import { Portfolio } from 'portfolio-lib';
</script>

<Portfolio />
```

### Customized Usage

```svelte
<script>
  import { Portfolio } from 'portfolio-lib';
</script>

<Portfolio 
  name="Your Name"
  title="Your Title"
  motto="Your Motto"
  resumeUrl="https://your-resume-url.com"
  linkedinUrl="https://linkedin.com/in/your-profile"
  githubUrl="https://github.com/your-username"
  aboutText="Your personal description here..."
/>
```

### Individual Components

```svelte
<script>
  import { Header, HomeSection, AboutSection, EducationSection, SkillsSection, Footer } from 'portfolio-lib';
</script>

<Header />
<HomeSection 
  name="John Doe" 
  title="Software Developer" 
  motto="Code. Create. Innovate." 
/>
<AboutSection 
  aboutText="I'm a passionate developer..." 
  aboutImage="/path/to/your/image.jpg"
/>
<EducationSection />
<SkillsSection />
<Footer />
```

## Customization Props

### Portfolio Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `'Girgis Emad'` | Your name displayed in the hero section |
| `title` | `string` | `'Full stack developer!'` | Your professional title |
| `motto` | `string` | `'THE ONLY WAY IS UP'` | Your personal motto or tagline |
| `resumeUrl` | `string` | `'#'` | Link to your resume |
| `linkedinUrl` | `string` | `'#'` | Link to your LinkedIn profile |
| `githubUrl` | `string` | `'#'` | Link to your GitHub profile |
| `instagramUrl` | `string` | `'#'` | Link to your Instagram profile |
| `whatsappUrl` | `string` | `'#'` | Link to your WhatsApp |
| `aboutImage` | `string` | `'/imgs/me.jpeg'` | Path to your profile image |
| `aboutText` | `string` | Default bio text | Your personal description |

### EducationSection Component

```svelte
<script>
  import { EducationSection } from 'portfolio-lib';
  
  const customEducation = [
    {
      year: '2020 - 2024',
      title: 'Computer Science Degree',
      description: 'Bachelor of Science in Computer Science...'
    }
  ];
  
  const customExperience = [
    {
      year: '2023 - Present',
      title: 'Software Engineer',
      description: 'Working on web applications...'
    }
  ];
</script>

<EducationSection 
  educationData={customEducation}
  experienceData={customExperience}
/>
```

### SkillsSection Component

```svelte
<script>
  import { SkillsSection } from 'portfolio-lib';
  
  const customCodingSkills = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'Python', percentage: 85 },
    { name: 'React', percentage: 80 }
  ];
  
  const customProfessionalSkills = [
    { name: 'Project Management', percentage: 75 },
    { name: 'Team Leadership', percentage: 70 }
  ];
</script>

<SkillsSection 
  codingSkills={customCodingSkills}
  professionalSkills={customProfessionalSkills}
/>
```

## Styling

The library uses CSS custom properties (CSS variables) for theming. You can override the default theme by setting these variables:

```css
:root {
  --bg-color: #09031B;
  --sec-bg-color: #344162;
  --text-color: #aa78cd;
  --white: #fdfdfd;
  --sub-color: #e4d4f9;
}
```

## Dependencies

- **External**: Boxicons for icons, Google Fonts for typography
- **Peer Dependencies**: Svelte ^5.0.0

## Development

This library was created using SvelteKit's library template. To contribute:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build the library: `npm run build`

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Original design inspiration from the HTML/CSS/JS portfolio by Girgis Emad (GARMA-A).
