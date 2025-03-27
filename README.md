# Gemini KaiOS App

This project turns the Google Gemini website into a native-like application for KaiOS devices, offering a full-screen experience with keypad controls and basic mobile optimizations.

## Features

* **Full-Screen Mode:** Enjoy Gemini without the distractions of the browser UI.
* **Keypad Navigation:**
    * **Back Key:** Navigates back in the Gemini history.
    * **'5' Key:** Attempts to focus the first text input or textarea on the page.
    * **'2' Key:** Scrolls down the page.
    * **'8' Key:** Scrolls up the page.
* **Mobile Optimization (Attempted):** Basic CSS is injected to improve readability on smaller screens. The user-agent is also modified to encourage the mobile version of the site (though effectiveness may vary).
* **Instant Loading Spinner:** A visual indicator while the Gemini website is loading.

## What You Need

1.  A computer to prepare the app files.
2.  A USB cable to connect your KaiOS phone to your computer (for sideloading) OR a GitHub account (for web hosting).
3.  Approximately 15 minutes of your time.

## Installation

There are two main ways to install this Gemini KaiOS app: sideloading via USB or hosting it online.

### Option A: Sideload via USB

1.  **Download the Files:** Download or create the following files and place them in a folder named `gemini-app`:
    * `index.html`
    * `script.js`
    * `manifest.webapp`
    * `icon.png` (a 128x128 pixel PNG image for the app icon)

2.  **Zip the Files:** Open your terminal or command prompt, navigate to the `gemini-app` folder, and run the following command to create a `.webapp` file without compression:
    ```bash
    zip -0 -r gemini.webapp *
    ```
    This will create a file named `gemini.webapp` in the `gemini-app` folder.

3.  **Connect Your KaiOS Phone:** Connect your KaiOS phone to your computer using a USB cable. Ensure your phone is in a mode that allows file transfer (this might be MTP or similar, depending on your device).

4.  **Copy the `.webapp` File:** Locate the newly created `gemini.webapp` file on your computer and copy it to your phone's storage (either internal storage or an SD card).

5.  **Install via File Manager:**
    * On your KaiOS phone, open the **File Manager** app.
    * Navigate to the location where you copied the `gemini.webapp` file.
    * Select the `gemini.webapp` file.
    * You should be prompted to install the application. Confirm the installation.

    The Gemini app should now appear on your KaiOS app grid.

### Option B: Host Online

1.  **Upload to GitHub:**
    * Create a new repository on your GitHub account.
    * Upload all the files (`index.html`, `script.js`, `manifest.webapp`, `icon.png`) to this repository.

2.  **Enable GitHub Pages:**
    * Go to the "Settings" tab of your GitHub repository.
    * Scroll down to the "GitHub Pages" section.
    * Under "Source," select the branch where you uploaded your files (usually `main` or `master`).
    * Click "Save."
    * GitHub will provide you with a URL for your hosted website (usually something like `https://<your-username>.github.io/<your-repository-name>`).

3.  **Add to Home Screen on KaiOS:**
    * Open the web browser on your KaiOS phone.
    * Navigate to the GitHub Pages URL you obtained in the previous step.
    * Once the page loads (you'll likely just see the loading spinner), open the browser's options menu.
    * Look for an option like "Add to Home Screen" or a similar phrasing. Select it.
    * Confirm that you want to add the Gemini app to your home screen.

    The Gemini app icon should now appear on your KaiOS home screen.

## Usage

Once installed, simply open the "Gemini" app from your KaiOS app grid or home screen. The app will load the Google Gemini website in a full-screen iframe.

Use the keypad to navigate:

* Press the **Back key** to go back to the previous page within Gemini.
* Press the **'5' key** to try and focus on the text input field. You might need to press it multiple times or the focus might not always land exactly where you expect due to the website's structure.
* Press the **'2' key** to scroll down the content.
* Press the **'8' key** to scroll up the content.

Please note that the level of mobile optimization and keypad control is limited by the structure and functionality of the Gemini website itself.

## Troubleshooting

| Issue                 | Fix                                                                                                                               |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| White screen          | Wait longer; KaiOS WebViews can be slow to load complex websites. Ensure you have a stable internet connection.                    |
| Keys not working      | Double-check that the iframe has loaded completely. Ensure there are no JavaScript errors in the console (if you have access).       |
| Desktop site is shown | The Gemini website might not have a distinct mobile version easily triggered by the user agent. Further CSS adjustments might be needed in `script.js`. |
| Cannot focus input    | The input field might be dynamically loaded or have a complex structure. More advanced JavaScript might be required for reliable focusing. |

Made with ❤ by Google Gemini
