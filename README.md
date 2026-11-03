# Osman Frozen Foods website

A responsive, static company website built with HTML, CSS and vanilla JavaScript. It is ready to publish with GitHub Pages and does not require a paid hosting plan, build step, framework installation or backend.

## Included
- `index.html` — website content and structure
- `styles.css` — responsive styling and brand palette
- `script.js` — mobile navigation, product filters, product-specific WhatsApp enquiries and dynamic copyright year
- `assets/osman-logo.jpeg` — supplied company logo

## Before publishing
1. Replace the illustrative food photos in `styles.css` with real Osman Frozen Foods product photographs. Search for `.visual-` and `.hero-photo` in the stylesheet. The current photos are visual placeholders, not photographs of Osman products.
2. Confirm the phone, WhatsApp and email details with the company. The WhatsApp link uses the international number `8801811152265` (digits only).
3. Add verified product pack sizes, ingredients, storage instructions, certifications and business claims only after the company confirms them.
4. If you have a real factory pin, replace the Google Maps search link with its exact Maps share URL.

## Run locally
Open `index.html` in a browser. For a local development server, open this folder in VS Code and use the Live Server extension, or run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository, for example `osman-frozen-foods`.
2. Upload the contents of this folder to the repository root. The `index.html` file must be at the root, not inside another nested folder.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then click **Save**.
6. Wait for GitHub Pages to finish deploying. Your site will appear at `https://YOUR-USERNAME.github.io/osman-frozen-foods/` (replace `YOUR-USERNAME` with your GitHub username).
7. After every update, commit and push the changed files; GitHub Pages will publish the update.

## WhatsApp and contact links
- WhatsApp: `https://wa.me/8801811152265`
- Phone: `tel:+8801540591747`
- Email: `mailto:Osmangroup.official@gmail.com`

WhatsApp opens in the app when available, or WhatsApp Web/browser on desktop. The visitor may need to sign in to WhatsApp. This is a direct chat link, not an order/payment system.

## Brand palette
- Forest green: `#245D1D`
- Deep green: `#173E15`
- Gold: `#C6A02C`
- Warm cream: `#F7F6EF`

Fonts are loaded from Google Fonts (Playfair Display and DM Sans); if Google Fonts cannot load, the site uses local serif/sans-serif fallbacks.
