# Retro & Interactive Web Portfolio
> Dibuat khusus untuk seleksi masuk Divisi Website Development UKM Creative Computer Club (Triple-C) Universitas Trunojoyo Madura (Est. 1999).

Portofolio web ini mengusung konsep estetika retro/vintage (kertas tua / mesin tik) yang dipadukan dengan identitas seorang pendaftar **Divisi Website Development** yang berfokus pada sistem backend, arsitektur database MySQL, dan RESTful API menggunakan Laravel. Dirancang dengan prinsip **Clean Code**, modular, dan tanpa framework berat (Pure HTML5, CSS3, dan Vanilla JavaScript).

---

## 🏛️ Arsitektur & Clean Code
Proyek ini memisahkan komponen dan logika ke dalam beberapa file terpisah agar mudah dipelihara (*maintainable*) dan dibaca oleh para penyeleksi/mentor:

```text
├── index.html            # Kerangka utama (Shell layout & Navbar dengan Logo UTM & Triple-C)
├── about.html            # Bagian modular: Profil, Maskot Jack Interaktif, Backend Projects, & Terminal CLI
├── contact.html          # Bagian modular: Informasi kontak & Form
├── style.css             # Styling global, CSS Variables, Responsive & Theme Switcher
├── script.js             # Logika modular: Fetch partials, Modal, Terminal CLI, & Maskot Rotator
├── README.md             # Ringkasan proyek untuk repositori GitHub
├── DOCUMENTATION.md      # Dokumentasi teknis lengkap proyek
└── assets/
    ├── profile.jpeg      # Aset foto profil bergaya vintage
    └── tripleC/          # Aset resmi UKM Triple-C & UTM
        ├── LOGO CBT.jpg
        ├── Salinan 001_UNIVERSITAS TRUNODJOYO MADURA.png
        ├── Salinan Jack 1 (1).png
        ├── Salinan Jack 2 (1).png
        ├── Salinan Jack 3.png
        └── Salinan TRIPLE-C.png
```

---

## ✨ Fitur Unggulan & Integrasi Aset
1. **Identitas UKM & Kampus di Navbar**: Menampilkan Logo Resmi Universitas Trunojoyo Madura dan Logo Triple-C di sebelah kiri navbar, menegaskan afiliasi institusi.
2. **Maskot Interaktif "Jack" (Multi-Pose)**: Kartu maskot Jack di section About dapat diklik untuk mengganti pose secara dinamis (Jack 1, 2, dan 3) dengan pesan rekomendasi unik bertema `#SalamCreative #SemangatCreative`.
3. **Modular Section Loading**: Bagian `about` dan `contact` dimuat secara terpisah menggunakan asynchronous fetch (`about.html` & `contact.html`).
4. **Terminal Milik Habibie (CLI Easter Egg)**: Terminal interaktif retro dengan sapaan sistem boot khusus UKM Triple-C. Mendukung perintah seperti `help`, `about`, `projects`, `skills`, `jack`, `utm`, `triplec`, dan `ukm`/`join`.
5. **Live JSON API Response Viewer ("Test API")**: Tombol interaktif pada setiap card proyek backend (`Magnets API` & `Task Management API`) untuk mensimulasikan respons JSON RESTful API secara *real-time*.
6. **Backend Architectural Highlights**: Menampilkan informasi arsitektur kode (*Service Layer, Geofencing Radius, SOLID Principles, Repository Pattern*) pada setiap proyek.
7. **Theme Switcher (Vellum / Hacker Mode)**: Tombol sakelar tema di navbar untuk beralih antara mode *Vellum Cream* (klasik kertas tua) dan *Hacker Mode* (terminal hijau gelap).

---

## 🚀 Proyek Backend Terkait
- **[Magnets API](https://github.com/bjhabibie59/magnets-api)**: API backend magang SMK mencakup presensi, jurnal, laporan, dan integrasi RFID berbasis geofencing radius lokasi.
- **[Task Management API](https://github.com/bjhabibie59/task-management)**: API pengelolaan tugas dengan penerapan Clean Code & SOLID Principles secara ketat.

---

## 🛠️ Cara Menjalankan
1. Pastikan Anda memiliki browser modern (Chrome, Firefox, Edge, dll.).
2. Buka file `index.html` langsung di browser atau jalankan menggunakan **Live Server** di VS Code.
