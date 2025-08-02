
# POS WEB APP

A simple and beautiful cashbook and inventory management application built with React, TypeScript, and Tailwind CSS. It uses Firebase Firestore for real-time data persistence and offline capabilities, and Cloudinary for image storage.

## Run Locally

**Prerequisites:**
- Node.js
- A Firebase Project
- A Cloudinary Account

### Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd olesco-agrivet-trading
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create an environment file:**
    - Create a file named `.env` in the root of the project.
    - You will need credentials for Firebase and Cloudinary. An `.env.example` is not provided for security, but you will need to add the following keys:
      - `VITE_FIREBASE_API_KEY`
      - `VITE_FIREBASE_AUTH_DOMAIN`
      - `VITE_FIREBASE_PROJECT_ID`
      - `VITE_FIREBASE_STORAGE_BUCKET`
      - `VITE_FIREBASE_MESSAGING_SENDER_ID`
      - `VITE_FIREBASE_APP_ID`
      - `VITE_CLOUDINARY_CLOUD_NAME`
      - `VITE_CLOUDINARY_UPLOAD_PRESET`

4.  **Set up Firebase:**
    - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - In your project, go to **Project Settings** > **General**.
    - Under "Your apps", click the **Web** icon (`</>`) to add a new web app.
    - Register your app and Firebase will provide you with a `firebaseConfig` object.
    - Add your Firebase config to your `.env` file with the keys starting with `VITE_FIREBASE_`.

5.  **Set up Cloudinary (for Image Uploads):**
    - Create a free account on [Cloudinary](https://cloudinary.com/).
    - Find your **Cloud Name** on your dashboard.
    - Go to **Settings** (gear icon) > **Upload**.
    - Scroll down to **Upload presets**.
    - Click **Add upload preset**.
    - Change **Signing Mode** to **Unsigned** and make a note of the preset name.
    - Add your Cloud Name and Upload Preset to your `.env` file as `VITE_CLOUDINARY_CLOUD_NAME` and `VITE_CLOUDINARY_UPLOAD_PRESET`. For example:
      - `VITE_CLOUDINARY_CLOUD_NAME=ecommercestorage`
      - `VITE_CLOUDINARY_UPLOAD_PRESET=your_preset_name`


6.  **Set up Firestore Database:**
    - In the Firebase Console, go to **Build** > **Firestore Database**.
    - Click **Create database** and start in **Test mode** for initial development.
    - **Important:** Remember to configure your [security rules](https://firebase.google.com/docs/firestore/security/get-started) for production.

7.  **Run the app:**
    ```bash
    npm run dev
    ```

The application will now be running on your local server. It will automatically seed default settings and inventory to your Firestore database on the first run.
