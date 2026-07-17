# Gbolagade Kazeem Adewale — Academic Portfolio

A deployment-ready, one-page academic portfolio built with HTML, CSS and vanilla JavaScript.

## Add your files

- Photograph: `images/profile.jpg`
- Project screenshots: `images/gutdigest-preview.png`, `images/gutmove-preview.png`, `images/gutacid-preview.png`, `images/all-or-none-preview.png`
- Academic CV: `Gbolagade_Kazeem_Adewale_Academic_CV.pdf`

The supplied photograph, project screenshots and academic CV are already connected to the website.

## Test locally

You can open `index.html` directly, or run a simple server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a new public GitHub repository.
2. Upload all files and folders from this project to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

GitHub will display the public URL after deployment.

## Deploy to Firebase Hosting

Install the Firebase CLI, sign in, and run:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

When prompted, select your Firebase project, use `.` as the public directory, and answer **No** to configuring as a single-page app and overwriting `index.html`.
