# Open WebUI Desktop

Electron wrapper for [Open WebUI](https://docs.openwebui.com).

## Prerequisites

You need a running Open WebUI instance (local or hosted). See the [official installation docs](https://docs.openwebui.com/getting-started/) to set one up.

## Setup

```bash
cp .env.example .env
# Set OPENWEBUI_URL to your instance in .env
npm install
npm start
```

## Build & Install (macOS)

```bash
npm run dist
```

1. Open `dist/mac-arm64/`
2. Drag `Open WebUI.app` to your `/Applications` folder
3. Right-click the app → **Open**
4. Click **Open** in the security dialog (first time only)

If macOS blocks the app, go to **System Settings → Privacy & Security** and click **Open Anyway**.
