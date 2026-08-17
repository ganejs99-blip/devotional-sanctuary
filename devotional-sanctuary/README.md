# 🦚 Hare Krishna Devotional Sanctuary & Daily Sadhana Portal

A divine, interactive web application designed for daily Bhakti tracking, Japa meditation, Vaishnava songbook, darshan galleries, and secret encrypted devotee messages. Ready for instant deployment on **GitHub Pages**!

---

## 🌟 Features Overview

### 1. 🪔 Mystical Mantra Entrance ("Are Bhai Bolo Yrr!")
- Enter through an auspicious royal envelope and wax seal.
- Type sacred keywords into the input box or click any quick-chant chip to open different sanctums.

### 2. 📿 Secret Keyword Directory

| Keyword | Sanctum Unlocked | Features |
| :--- | :--- | :--- |
| **`hare krishna`** or **`sadhana`** | **Daily Bhakti & Sadhana Tracker** | • Interactive 108 Tulsi Japa Mala counter<br>• Seva, Katha, and Sloka logger<br>• Sloka of the Day from Bhagavad Gita<br>• **📊 1-Click Excel (.csv) Export**<br>• **📄 1-Click Word (.doc) Export**<br>• Local storage auto-save |
| **`RadhaGovind`** or **`schedule`** | **Daily Vaishnava Schedule** | Morning Mangala Aarti to Night Rest schedule with live active seva indicator |
| **`Radha & Govind`** | **Sri Sri Radha Govind Ji Darshan** | Divine photo gallery with zoomable lightbox |
| **`Radha Madhav`** | **Sri Sri Radha Madhav Darshan** | Mayapur & Vrindavan pastimes gallery |
| **`vaishnav song`** | **Vaishnava Songbook & Player** | Lyrics in original Sanskrit/Bengali + English translations (*Jaya Radha Madhava*, *Damodarashtakam*, *Gopinath*, *Sri Guru Vandana*, etc.) |
| **`myfav`** | **Leave a Devotee Note / Prayer** | Public form for friends/well-wishers to send encrypted heartfelt messages |
| **`myheart`** | **Private Devotional Inbox** | Enter PIN (`108`) to view, manage, and delete all received devotee messages |
| **`menu`** | **Mantra Guide** | Directory modal of all secret keywords |

---

## 📁 How to Add Your Own Photos & Songs

### 📸 Adding Radha Govind Photos:
1. Place your images inside the folder: `images/radha-govind/` (e.g. `images/radha-govind/darshan1.jpg`).
2. In `index.html`, find the section `<section id="radhaGovindGallerySection">` and update the `src="..."` attribute with your image paths:
   ```html
   <img src="images/radha-govind/darshan1.jpg" alt="Radha Govind" class="darshan-img">
   ```

### 🌸 Adding Radha Madhav Photos:
1. Place your images inside `images/radha-madhav/` (e.g. `images/radha-madhav/darshan1.jpg`).
2. Update the `src="..."` in the `<section id="radhaMadhavGallerySection">` of `index.html`.

### 🎵 Adding Custom Audio / Songs:
1. Place your MP3 audio files in the `audio/` folder (e.g. `audio/kirtan.mp3`).
2. The site includes a built-in Web Audio synthesis engine for bells, shankh, and harmonic chimes that works out-of-the-box offline!

---

## 🚀 How to Host on GitHub Pages (Free & Instant)

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name your repository (e.g., `devotional-sanctuary` or `hare-krishna`).
   - Choose **Public**.

2. **Upload Files**:
   - Upload all files and folders (`index.html`, `css/`, `js/`, `images/`, `audio/`, `README.md`).

3. **Enable GitHub Pages**:
   - In your repository, click **Settings** (top tab).
   - In the left sidebar, click **Pages**.
   - Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
   - Click **Save**.

4. **Your Live Website is Ready!** 🎉
   - Your site will be live at: `https://<your-username>.github.io/<repo-name>/`

---

## 🙏 Credits & Dedication
*हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे । हरे राम हरे राम राम राम हरे हरे ॥*  
Dedicated with love and devotion at the lotus feet of Sri Sri Radha & Krishna.
