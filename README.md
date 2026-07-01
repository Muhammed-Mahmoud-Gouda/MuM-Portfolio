# MuM Portfolio 🚀

A premium, modern, and highly interactive developer portfolio built with **React**, **TypeScript**, and **Vanilla CSS**. Designed for full-stack software engineers, showcasing clean-code principles, decoupled system architectures, and professional backend/frontend capabilities.

Live Demo: [https://muhammed-mg.vercel.app/](https://muhammed-mg.vercel.app/)

---

## ✨ Features

- **🍱 Bento-Grid Tech Stack**: A beautifully organized directory of skills, programming languages, databases, and computer science concepts, complete with interactive custom brand-colored neon glow hover effects.
- **⚙️ Interactive System Architecture Visualizer**: An interactive visualizer modal on the **Eventify Pro** card representing the 5 decoupled layers of its N-Tier system (Web, BLL, DAL, Domain, Shared) and their respective responsibilities.
- **📱 One-Click Communication**:
  - **Scan to Chat QR Code**: Scan a QR code overlay using your mobile camera to instantly start a chat on WhatsApp.
  - **Quick Copy**: One-click clipboard copying for email and phone numbers, with success checkmark indicator feedback.
- **📷 Premium Screenshot Sliders**: Sleek, glassmorphic image sliders with navigation arrows and bottom index pill tags for swift page transitions. Includes custom terminal mock screenshots for CLI projects.
- **🚀 Ultra-smooth UI/UX**:
  - **ScrollSpy Navbar**: Dynamically tracks user scrolling position and highlights the active menu link automatically.
  - **Scroll Entrance Animations**: IntersectionObserver integrations triggering fluid slide-up/fade-in transitions as sections enter the viewport.
  - **Top Loading Bar**: Simulated top loading indicator at launch mimicking modern corporate tech sites.
  - **Floating WhatsApp Widget**: Persistent chat badge with a pulsing alert dot for instant outreach.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Fluid, responsive flexbox/grid layout systems)
- **Bundler**: Vite
- **Development Tooling**: ESLint, TypeScript compiler
- **Dependencies**: React Hooks, Lucide Icons, QR Server API

---

## 📁 Project Structure

```text
MuM-Portfolio/
├── public/                 # Static assets (CV PDF, screenshots, icons)
│   ├── eventify/           # Eventify Pro application screenshots
│   └── Muhammed_Mahmoud...pdf # Resume/CV download link
├── src/
│   ├── assets/             # Vector icons and images
│   ├── components/         # Decoupled UI components
│   │   ├── Navbar.tsx      # Sticky floating navigation with ScrollSpy
│   │   ├── TechParticlesBackground.tsx # Floating background icons animation
│   │   └── DeveloperIllustration.tsx # grayscaled 3D illustration
│   ├── App.tsx             # Main React entrypoint and states
│   ├── index.css           # Global typography, color tokens, and animation keyframes
│   └── main.tsx            # DOM initialization
├── index.html              # HTML shell & Google Fonts import
├── package.json            # Scripts & dependencies definition
└── tsconfig.json           # TS configurations
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio on your local machine:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Muhammed-Mahmoud-Gouda/MuM-Portfolio.git
   ```

2. Navigate into the project folder:
   ```bash
   cd MuM-Portfolio
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Launch the local development server:
   ```bash
   npm run dev
   ```

5. Build the production-ready bundle:
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**Muhammed Mahmoud Gouda**
- **Role**: Full-Stack .NET Developer
- **Email**: [muhammedmahmoudgoda66@gmail.com](mailto:muhammedmahmoudgoda66@gmail.com)
- **LinkedIn**: [muhammad-mahmoud-gouda](https://linkedin.com/in/muhammad-mahmoud-gouda/)
- **WhatsApp**: [+20 1064665247](https://wa.me/201064665247)
