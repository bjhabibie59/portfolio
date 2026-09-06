# 📂 Dokumentasi Proyek Portofolio Web (Seleksi UKM)

Dokumen ini berisi penjelasan teknis, arsitektur, dan rincian fitur dari portofolio web **Baharuddin Jusuf Habibie (Pendaftar Divisi Website Development UKM Triple-C UTM)**.

---

## 1. 📌 Informasi Umum
* **Nama Pemilik**: Baharuddin Jusuf Habibie
* **Peran / Tujuan**: Pendaftar Divisi Website Development UKM Creative Computer Club (Triple-C) Universitas Trunojoyo Madura (Est. 1999)
* **Tech Stack**: HTML5, CSS3, Vanilla JavaScript (Tanpa framework eksternal demi performa maksimal dan kecepatan load yang instan).

---

## 2. 🏛️ Struktur File & Clean Architecture
Proyek ini dirancang menggunakan prinsip **Modular Component-Based Architecture** dan **Clean Code** agar mudah dibaca, dikembangkan, dan dipelihara oleh evaluator:

```text
├── index.html          # Shell layout utama (Navbar dengan Logo UTM & Triple-C, Hero, Placeholders, & Footer)
├── about.html          # Modul section About, Maskot Jack Interaktif, Backend Projects, & Terminal CLI
├── contact.html        # Modul section Contact Me & Form
├── style.css           # Global stylesheet, CSS Variables, Responsive design & Theme Switcher
├── script.js           # Logika aplikasi modular (Fetch API, DOM manipulation, CLI, & Mascot Rotator)
├── README.md           # Ringkasan proyek untuk repositori GitHub
├── DOCUMENTATION.md    # Dokumentasi teknis lengkap proyek
└── assets/
    ├── profile.jpeg    # Arsip foto profil bergaya vintage
    └── tripleC/        # Aset resmi UKM Triple-C & UTM
        ├── LOGO CBT.jpg
        ├── Salinan 001_UNIVERSITAS TRUNODJOYO MADURA.png
        ├── Salinan Jack 1 (1).png
        ├── Salinan Jack 2 (1).png
        ├── Salinan Jack 3.png
        └── Salinan TRIPLE-C.png
```

---

## 3. ⚙️ Penjelasan Komponen Utama

### A. Identitas Kampus & UKM di Navbar
Menampilkan Logo Resmi Universitas Trunojoyo Madura dan Logo Triple-C berdampingan di navbar sebelah kiri untuk menegaskan identitas institusi dan UKM yang dituju secara profesional.

### B. Maskot Interaktif "Jack" (Multi-Pose Rotator)
Menampilkan ilustrasi maskot Jack (Jack 1, 2, dan 3) dalam bingkai arsip retro. Pengguna dapat mengeklik kartu maskot untuk mengganti pose secara dinamis disertai kutipan sambutan bertema `#SalamCreative #SemangatCreative`.

### C. Terminal Milik Habibie (Interactive CLI Terminal)
Terminal bergaya Linux/Unix di dalam section About dengan sapaan sistem boot khusus Divisi Website Development UKM Triple-C. Mendukung perintah interaktif:
* `help`: Menampilkan bantuan perintah.
* `about`: Profil singkat pembuat.
* `projects`: Daftar proyek backend.
* `skills`: Keahlian teknis.
* `jack`: Info maskot Jack.
* `utm`: Info Universitas Trunojoyo Madura.
* `triplec`: Info UKM Creative Computer Club (Triple-C).
* `ukm` / `join`: Pesan khusus pendaftaran UKM.
* `clear`: Membersihkan layar terminal.

### D. Live JSON API Response Viewer
Setiap card proyek backend dilengkapi tombol **"Test API"** yang dapat diklik untuk menampilkan simulasi respons JSON dari RESTful API secara *real-time*.

### E. Theme Switcher (Vellum Cream vs Hacker Mode)
Pengguna dapat beralih antara dua mode visual melalui tombol di Navbar (`Vellum Mode` vs `Hacker Mode`). Preferensi disimpan di `localStorage`.

---

## 4. 🚀 Rincian Proyek Backend yang Dipamerkan

1. **Magnets API (Magang SMK)**
   * **Deskripsi**: Backend API untuk sistem manajemen magang anak SMK (Presensi RFID, jurnal harian, laporan, dan validasi radius geofencing lokasi).
   * **GitHub**: [bjhabibie59/magnets-api](https://github.com/bjhabibie59/magnets-api)

2. **Task Management API**
   * **Deskripsi**: Backend API pengelolaan tugas yang menerapkan prinsip **SOLID Principles** dan *Repository Pattern* secara ketat.
   * **GitHub**: [bjhabibie59/task-management](https://github.com/bjhabibie59/task-management)

#SalamCreative #SemangatCreative
