# dev-portfolio-react

# • DevPortfolio

This personal website is designed for a React app developer. It showcases their projects, skills, and professional journey, emphasizing their expertise in React development.

## • Screens

### • Home Page
The landing page that introduces the developer and gives an overview of their skills and recent projects.

- **Behavior:** Static information display with smooth scrolling to other sections.
- **Layout:** Consists of a 'Header', 'AboutMe', 'Skills', 'Projects', and 'ContactForm'.

### • Detailed Project Page
Displays detailed information about specific projects when selected from the Home Page.

- **Behavior:** 
  - Fetches project details dynamically when accessed.
  - Includes screenshots, technologies used, and links to live demos or code repositories.
- **Layout:** Consists of a 'Header', 'ProjectDetails', and 'Footer'.

## • Components

### • Header
Displays the developer’s name and includes navigation links to various sections of the site.

- **Behavior:** Includes links to Home, About Me, Skills, Projects, and Contact.
- **Styling:** Fixed position, large font size, minimalist with a vibrant underline on hover.

### • AboutMe
Short section that provides a biography and a professional photograph of the developer.

- **Styling:** Light background, contemporary font, professional quality image to the side.

### • Skills
Visually engaging display of technical skills, emphasizing proficiency in React and related technologies.

- **Styling:** Circular progress bars or icons representing each skill with animation on scroll, vibrant colors for emphasis on key skills.

### • Projects
Grid or list layout showing thumbnails or previews of key projects.

- **Behavior:** Clickable items leading to a detailed project page.
- **Styling:** Cards with hover effects showing brief project info, vibrant accents on card borders.

### • ContactForm
A simple form allowing visitors to send messages directly through the website.

- **Behavior:** Includes fields for name, email, and message. Validates input and provides a submission confirmation.
- **Styling:** Minimalist input fields with vibrant submit button, subtle animations on focus.

### • ProjectDetails
Detailed display of the selected project, including its objectives, processes, outcomes, and technical details.

- **Styling:** Clean layout with a light base, screenshots or GIFs with round edges, distinct sections for readability.

### • Footer
Contains social media links and copyright information.

- **Behavior:** Static display.
- **Styling:** Minimalist, containing only essential links in a small font, organized cleanly.

## • General Principles

- **Color & Typography:** Light backgrounds with vibrant highlights. Consistent use of vibrant colors for interactive elements. Black and grey text ensures readability.
- **Whitespace:** Ample space between all elements promotes an uncluttered, professional appearance.
- **Images & Icons:** Strategic use, primarily in the 'Skills' and 'Projects' sections to visually communicate expertise and influence.
- **Navigation:** Simple, intuitive top-aligned navigation enhances usability. Minimal footer to prevent distraction.
- **Hierarchical Typography:** Differentiating text size and weight helps in guiding the user attention effectively.
- **Standout CTAs:** Contrasting colors for buttons like 'See More' on projects or 'Submit' on the contact form.

This design spec for a personal website ensures that the React developer’s skills, projects, and professional demeanor are showcased in a clear, engaging, and accessible manner.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/dev-portfolio-react.git
cd dev-portfolio-react
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
