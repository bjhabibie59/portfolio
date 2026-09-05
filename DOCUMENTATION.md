# 📂 Dokumentasi Proyek Portofolio Web (Seleksi UKM)

Dokumen ini berisi penjelasan teknis, arsitektur, dan rincian fitur dari portofolio web **Baharuddin Jusuf Habibie (Junior Backend Developer)**.

---

## 1. 📌 Informasi Umum
* **Nama Pemilik**: Baharuddin Jusuf Habibie
* **Peran**: Junior Backend Developer
* **Tujuan Proyek**: Seleksi Masuk Unit Kegiatan Mahasiswa (UKM)
* **Tech Stack**: HTML5, CSS3, Vanilla JavaScript (Tanpa framework eksternal demi performa maksimal dan kecepatan load yang instan).

---

## 2. 🏛️ Struktur File & Clean Architecture
Proyek ini dirancang menggunakan prinsip **Modular Component-Based Architecture** dan **Clean Code** agar mudah dibaca, dikembangkan, dan dipelihara oleh evaluator:

```text
├── index.html          # Shell layout utama (Navbar, Hero, Placeholders, & Footer)
├── about.html          # Modul section About, Backend Projects, & CLI Terminal
├── contact.html        # Modul section Contact Me & Form
├── style.css           # Global stylesheet, CSS Variables, Responsive design & Theme Switcher
├── script.js           # Logika aplikasi modular (Fetch API, DOM manipulation, & Event handling)
├── README.md           # Ringkasan proyek untuk repositori GitHub
├── DOCUMENTATION.md    # Dokumentasi teknis lengkap proyek
└── assets/
    └── profile.jpeg    # Arsip foto profil bergaya vintage
```

---

## 3. ⚙️ Penjelasan Komponen Utama

### A. Modular Section Loading (`script.js` & `fetch API`)
Section halaman utama seperti `about` dan `contact` dipisah ke dalam file HTML tersendiri dan dimuat secara asinkron menggunakan fungsi `fetch()` JavaScript. Hal ini mencerminkan pemahaman pembuat terhadap pemisahan tanggung jawab (*Separation of Concerns*).

### B. Custom Retro Terminal Cursor
Menggantikan kursor bawaan browser dengan kursor kotak terminal (`_`) yang dinamis menggunakan CSS custom properties dan pelacakan posisi mouse (`mousemove`), memberikan pengalaman visual retro yang imersif.

### C. Theme Switcher (Vellum Cream vs Hacker Mode)
Pengguna dapat beralih antara dua mode visual melalui tombol di Navbar:
1. **Vellum Mode**: Estetika kertas tua / arsip klasik (`#f4ebd0`).
2. **Hacker Mode**: Tampilan terminal gelap dengan aksen hijau terang (`#00ff66`). Preferensi disimpan di `localStorage`.

### D. Interactive CLI Terminal (Easter Eggs)
Terminal bergaya Linux/Unix di dalam section About yang mendukung perintah interaktif:
* `help`: Menampilkan bantuan perintah.
* `about`: Profil singkat pembuat.
* `projects`: Daftar proyek backend.
* `skills`: Keahlian teknis.
* `ukm` / `join`: Pesan khusus pendaftaran UKM.
* `clear`: Membersihkan layar terminal.

### E. Live JSON API Response Viewer
Setiap card proyek backend dilengkapi tombol **"Test API"** yang dapat diklik untuk menampilkan simulasi respons JSON dari RESTful API secara *real-time*.

---

## 4. 🚀 Rincian Proyek Backend yang Dipamerkan

1. **Magnets API (Magang SMK)**
   * **Deskripsi**: Backend API untuk sistem manajemen magang anak SMK (Presensi RFID, jurnal harian, laporan, dan validasi radius geofencing lokasi).
   * **GitHub**: [bjhabibie59/magnets-api](https://github.com/bjhabibie59/magnets-api)

2. **Task Management API**
   * **Deskripsi**: Backend API pengelolaan tugas yang menerapkan prinsip **SOLID Principles** dan *Repository Pattern* secara ketat.
   * **GitHub**: [bjhabibie59/task-management](https://github.com/bjhabibie59/task-management)
