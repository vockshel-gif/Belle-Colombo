# Belle Colombo — Luxury Dining & Executive Admin Studio

A state-of-the-art, responsive web application and live executive administration cockpit crafted for **Belle Colombo**, showcasing luxury dining, artisan cocktails, multi-course tasting experiences, dynamic event calendars, and a real-time split-screen content studio.

---

## ✦ Key Features

### 1. Customer Dining Application (`index.html`)
- **Interactive Menu Hub**: Seamless navigation between Express Lunch, À La Carte, The Bar, and Tasting Menus.
- **Tasting Menus Experience**: Switch between the **5-Course Wine Pairing** and the **7-Course Grand Tasting** with pricing, curated pairings, and detailed dish notes.
- **Dynamic Event Calendar**: Symmetrically balanced event cards, date badges, hairline dividers, categories (*Dining*, *Live Music*, *Specials*, *Private Events*), and direct WhatsApp RSVP integration.
- **Mobile-First Luxury Aesthetic**: Obsidian black surfaces (`#070709`), champagne gold accents (`#bca685`), and haptic/click feedback.
- **Official Social & Location Links**: Direct WhatsApp reservation (`+94 77 031 5589`), Instagram (`@belle.colombo`), Facebook, and Google Maps.

### 2. Executive Studio & Live Preview Cockpit (`admin.html`)
- **Split-Screen Desktop Cockpit**: Real-time content editor on the left with an embedded interactive iPhone 15 Pro titanium frame on the right.
- **0ms Keystroke Live Sync**: Modifying any dish, price, description, add-on, or event date immediately updates the mobile phone preview without reloading the page.
- **Auto-Navigation Linkage**: Selecting any tab on the left (e.g. *Events*, *Lunch*, *À La Carte*, *Tasting*) signals the mobile preview to automatically slide to that exact section.
- **Comprehensive Content Management**:
  - 📅 **Upcoming Events**: Add, edit, delete events, select preset imagery or upload custom posters.
  - 🍽️ **Lunch Menu**: Manage 10 lunch items, prices, vegetarian toggles, and culinary add-on chips.
  - 📜 **À La Carte**: Manage all 5 courses (*Appetisers*, *Entrées*, *Mains*, *From The Grill*, *Desserts*), steak cuts, dual prices, and dietary tags.
  - 🍸 **The Bar**: Curate cocktail collections and bar bites.
  - 🍷 **Tasting Menus**: Configure 5-course and 7-course prices (menu only and wine pairing).
  - 🏛️ **Venue & Socials**: Change WhatsApp reservation numbers, Instagram handle, operating hours, and tax notes.
- **100% Free Persistence & Cloud Sync**:
  - **Local Storage Engine**: Instant auto-save to browser storage on every keystroke.
  - **1-Click Download `belleData.js`**: Export the production data file with a single click to commit or deploy.
  - **JSON Export / Import**: Backup and restore all menus and events at any time.
  - **Google Firebase Firestore (Spark Plan)**: Optional 100% free cloud sync (50,000 reads/day free forever, no credit card needed).

---

## 🏛️ Venue & Official Contacts

- **Address**: Colombo, Sri Lanka
- **WhatsApp / Reservations**: [+94 77 031 5589](https://wa.me/94770315589?text=Hi%20Belle%20Colombo%2C%20I%20would%20like%20to%20reserve%20a%20table.)
- **Instagram**: [@belle.colombo](https://www.instagram.com/belle.colombo/)
- **Facebook**: [Belle Colombo](https://www.facebook.com/bellecolombo)
- **Location**: [Google Maps](https://maps.google.com/?q=Belle+Colombo+Sri+Lanka)
- **Dining Hours**: Daily | 11:00 AM – 10:30 PM

---

## 🚀 Live Hosting & Deployment

The application is a pure static web application with zero server runtime dependencies.

### GitHub Pages (100% Free)
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. The live dining application will be available at:
   `https://vockshel-gif.github.io/Belle-Colombo/`
5. The admin studio will be available at:
   `https://vockshel-gif.github.io/Belle-Colombo/admin.html`

---

## 📁 Project Structure

```
├── index.html                   # Production customer dining SPA
├── admin.html                   # Luxury Executive Studio & Live Preview Cockpit
├── belleData.js                 # Central production data store (menus, events, venue)
├── menu.html                    # Reference menu archive
├── assets/                      # Event imagery and static resources
├── Logo/                        # Vector branding assets
└── README.md                    # Project documentation
```

---

*Crafted with precision and elegance for Belle Colombo.*
