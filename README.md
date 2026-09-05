# Retro & Interactive Web Portfolio
> Dibuat khusus untuk seleksi masuk UKM (Unit Kegiatan Mahasiswa)

Portofolio web ini mengusung konsep estetika retro/vintage (kertas tua / mesin tik) yang dipadukan dengan identitas seorang **Junior Backend Developer**. Dirancang dengan prinsip **Clean Code**, modular, dan tanpa framework berat (Pure HTML5, CSS3, dan Vanilla JavaScript).

---

## 🏛️ Arsitektur & Clean Code
Proyek ini memisahkan komponen dan logika ke dalam beberapa file terpisah agar mudah dipelihara (*maintainable*) dan dibaca oleh para penyeleksi/mentor:

```text
├── index.html        # Kerangka utama (Shell layout & Navbar)
├── about.html        # Bagian modular: Profil, Backend Projects, & Terminal CLI
├── contact.html      # Bagian modular: Informasi kontak & Form
├── style.css         # Styling global, CSS Variables, Responsive & Theme Switcher
├── script.js         # Logika modular: Fetch partials, Modal, Intersection Observer, & CLI
└── assets/
    └── profile.jpeg  # Aset foto profil
```

---

## ✨ Fitur Unggulan
1. **Modular Section Loading**: Bagian `about` dan `contact` dimuat secara terpisah menggunakan asynchronous fetch (`about.html` & `contact.html`), menunjukkan pemahaman tentang *component-based architecture*.
2. **Interactive CLI Terminal (Easter Egg)**: Pengunjung (atau mentor UKM) dapat mengetik perintah seperti `help`, `projects`, `skills`, atau perintah khusus `ukm` / `join` di terminal interaktif retro untuk melihat pesan pendaftaran khusus.
3. **Live JSON API Response Viewer ("Test API")**: Tombol interaktif pada setiap card proyek backend (`Magnets API` & `Task Management API`) untuk mensimulasikan respons JSON RESTful API secara *real-time*.
4. **Backend Architectural Highlights**: Menampilkan informasi arsitektur kode (*Service Layer, Geofencing Radius, SOLID Principles, Repository Pattern*) pada setiap proyek.
5. **Theme Switcher (Vellum / Hacker Mode)**: Tombol sakelar tema di navbar untuk beralih antara mode *Vellum Cream* (klasik kertas tua) dan *Hacker Mode* (terminal hijau gelap). Preferensi disimpan di `localStorage`.
6. **Custom Retro Terminal Cursor**: Kursor kustom berbentuk kotak terminal (`_`) yang dinamis mengikuti pergerakan mouse dan menyesuaikan tema.
7. **Responsive Mobile Menu**: Dilengkapi dengan tombol hamburger menu interaktif untuk pengalaman pengguna yang optimal di perangkat *mobile*.
8. **UKM Recruitment Status Badge**: Badge status rekrutmen berkedip (*blinking animation*) di Hero Section yang menegaskan kesiapan bergabung.

---

## 🚀 Proyek Backend Terkait
- **[Magnets API](https://github.com/bjhabibie59/magnets-api)**: API backend magang SMK mencakup presensi, jurnal, laporan, dan integrasi RFID berbasis geofencing radius lokasi.
- **[Task Management API](https://github.com/bjhabibie59/task-management)**: API pengelolaan tugas dengan penerapan Clean Code & SOLID Principles secara ketat.

---

## 🛠️ Cara Menjalankan
1. Pastikan Anda memiliki browser modern (Chrome, Firefox, Edge, dll.).
2. Buka file `index.html` langsung di browser atau jalankan menggunakan **Live Server** di VS Code.
