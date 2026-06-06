# Electron Explorer

A simple Electron JS desktop application built with React and Electron.

## Features

- ✓ Electron & React Integration
- ✓ Hot Reload in Development
- ✓ IPC Communication Ready
- ✓ Cross-platform Support (Windows, macOS, Linux)
- ✓ Production Build Ready

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/priyadharsan17/ElectronExplorer.git
cd ElectronExplorer
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the application in development mode with hot reload:

```bash
npm start
```

Or run Electron with remote debugging:

```bash
npm run electron-dev
```

## Build

Build the application for production:

```bash
npm run electron-build
```

The built application will be in the `dist` directory.

## Project Structure

```
ElectronExplorer/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # React App component
│   ├── App.css             # App styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── main.js                 # Electron main process
├── preload.js              # Preload script for secure IPC
└── package.json            # Project configuration
```

## Available Scripts

- `npm start` - Start the Electron app in development mode
- `npm run react-start` - Start React dev server only
- `npm run react-build` - Build React app
- `npm run electron-build` - Build Electron application
- `npm run build` - Build React app for production

## IPC Communication

The preload script (`preload.js`) exposes a secure `electron` API for inter-process communication:

```javascript
// In your React components
window.electron.ipcRenderer.send('channel-name', data);
window.electron.ipcRenderer.on('channel-name', (data) => {
  console.log(data);
});
```

## License

MIT

## Author

priyadharsan17