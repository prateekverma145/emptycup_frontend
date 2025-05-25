# My App

A modern React application built with Vite, featuring a Dockerized setup for both frontend and backend services.

## 🚀 Features

- React 19 with Vite for fast development and building
- TailwindCSS for styling
- Docker and Docker Compose support
- ESLint for code quality
- TypeScript support

## 📋 Prerequisites

- Node.js (v20.14.0 or later)
- Docker and Docker Compose
- npm (comes with Node.js)

## 🛠️ Installation

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Docker Setup

1. Build and start the containers:
```bash
docker-compose up --build
```

This will start both frontend and backend services:
- Frontend: http://localhost:5173
- Backend: http://localhost:4000

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
my-app/
├── src/              # Source files
├── public/           # Static assets
├── node_modules/     # Dependencies
├── Dockerfile        # Frontend Docker configuration
├── docker-compose.yml # Docker services configuration
├── package.json      # Project dependencies and scripts
├── vite.config.js    # Vite configuration
├── tailwind.config.js # TailwindCSS configuration
└── postcss.config.cjs # PostCSS configuration
```

## 🔧 Technologies Used

- React 19
- Vite
- TailwindCSS
- Docker
- ESLint
- TypeScript

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. Please contact the repository owner for contribution guidelines.
