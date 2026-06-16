# AT GitHub App 🚀

Academic React Native mobile application built with Expo and JavaScript, designed to interface directly with the official GitHub REST API.

---

## 📋 Table of Contents

- [Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Folder Structure](#-folder-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Setup & Authentication](#️-setup--authentication)

---

## ✨ Key Features

- **Secure Authentication:** Simple local authentication combined with GitHub's Personal Access Token (PAT) for direct secure requests to the official GitHub API.
- **Repository Explorer:**
  - Real-time list of the user's repositories.
  - Infinite scrolling / pagination on-demand (_lazy loading_).
  - _Pull-to-refresh_ gestures to reload data instantly.
  - Details screen displaying stars, forks, open issues count, and repository description.
- **Issue Tracker:**
  - Integrated view of bugs, tasks, and enhancements.
  - Dynamic progress bar showing the percentage of loaded issues.
  - Interactive swipe actions to reveal details for specific issues.
- **Fluid Navigation:** Sleek sliding menus (Drawer) and bottom tab navigation (Tabs) built on React Navigation v7.

---

## 🛠️ Tech Stack

Built using modern hybrid mobile development tools:

- **Core:** [React Native](https://reactnative.dev/) & [Expo (v54)](https://expo.dev/)
- **Navigation:** [React Navigation (v7)](https://reactnavigation.org/) (Stack, Drawer, and Bottom Tabs)
- **Styling:** Custom theme engine adhering to a refined GitHub Dark palette.
- **Gestures & Animations:** `react-native-gesture-handler` and `react-native-reanimated`.
- **State Management:** React Context API for global authentication state and GitHub API state.

---

## 📁 Folder Structure

The application's architecture is divided into modular directories inside the `src/` folder:

```text
src/
├── components/     # Reusable UI components (buttons, inputs, lists, etc.)
├── context/        # Context Providers for global state (Auth and GitHub data)
├── navigation/     # Navigation configuration (Stack, Tab, and Drawer)
├── screens/        # Screen components (Login, Repositories, Issues, Profile, etc.)
└── styles/         # Style declarations based on the GitHub Dark palette
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- Package manager `npm` or `yarn`
- **Expo Go** application installed on your physical device (iOS/Android) or active emulators configured.

### Steps to Run

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the Expo development server:**

   ```bash
   npm run start
   ```

3. **Open the app:**
   - Scan the QR code shown in the terminal using the **Expo Go** app on your phone.
   - Alternatively, press `a` to run on Android, `i` to run on iOS, or `w` to run on Web.

---

## ⚙️ Setup & Authentication

To connect the application to your GitHub account:

1. Go to your GitHub **Settings** > **Developer Settings**.
2. Under **Personal Access Tokens**, click on **Tokens (classic)** and generate a new token.
3. Select the required scopes (such as `repo` and `project`) so the app can fetch your repositories and issues.
4. Input your generated token on the app login screen or update it in the Profile page to authenticate.
