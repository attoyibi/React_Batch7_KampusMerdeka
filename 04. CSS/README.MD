https://chatgpt.com/share/66ea49a1-d2e4-8012-a347-c8935631f4ca

# Penjelasan Kode CSS untuk Landing Page

Kode CSS ini menjelaskan beberapa konsep penting dalam pembuatan layout landing page yang baik. Fokus utamanya adalah pada penggunaan **penamaan kelas yang deskriptif**, **tata letak yang rapi**, **reusability**, serta **kompatibilitas** lintas peramban (_cross-browser compatibility_).

## 1. Penamaan Kelas yang Deskriptif

- Nama kelas menggunakan deskripsi yang jelas seperti `.navbar`, `.container`, `.hero`, `.btn-primary`, yang mudah dipahami dan dikelola.
- Hindari penggunaan nama generik seperti `.box` atau `.section` yang kurang jelas maksudnya.
- Penamaan kelas deskriptif mempermudah dalam pemeliharaan kode dan meningkatkan keterbacaan.

## 2. Tata Letak yang Rapi dan Tersusun

- Menggunakan `display: flex;` pada kelas `.navbar` dan `.hero` untuk membuat tata letak elemen lebih rapi dan fleksibel.
- Dengan `text-align: center;`, konten dapat diposisikan di tengah halaman dengan mudah, terutama untuk teks dalam elemen hero atau header.

## 3. Reusability dan Maintainability

- Kelas `.container` digunakan secara berulang di berbagai bagian halaman untuk memberikan konsistensi tata letak dan meminimalkan penulisan ulang kode.
- Kelas `.btn-primary` dibuat untuk berbagai tombol, memungkinkan pengulangan elemen tombol tanpa harus menulis ulang styling tombol yang sama.

## 4. Responsive Design

- Menggunakan `height: 100vh;` pada hero section untuk memastikan hero image selalu memenuhi tinggi layar, terlepas dari ukuran layar pengguna.
- Ini memastikan tampilan responsif dan memaksimalkan ruang visual pada perangkat apa pun.

## 5. Hover States dan Interaktivitas

- Menerapkan efek hover pada link (`.nav-links li a:hover`) dan tombol (`.btn-primary:hover`) untuk meningkatkan interaktivitas dan pengalaman pengguna.
- Efek hover ini memberikan umpan balik visual yang menarik bagi pengguna.

## 6. Kompatibilitas dan Cross-browser Styling

- Menambahkan `box-sizing: border-box;` pada semua elemen dengan wildcard selector `*` untuk memastikan padding dan border tidak mempengaruhi ukuran total elemen.
- Ini adalah praktik terbaik untuk memastikan elemen tetap teratur di berbagai peramban.

---
