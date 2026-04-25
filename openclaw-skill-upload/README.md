# OpenClaw Workflow Visualizer Skill

Dashboard GUI premium untuk Clawhub/OpenClaw. Menampilkan flowchart visual secara real-time bergaya n8n.

## Cara Konfigurasi (SANGAT MUDAH)

Anda tidak perlu mengerti *coding* untuk menyambungkan dashboard ini ke OpenClaw Anda. Semua pengaturan koneksi ada di dalam file **`src/config.js`**.

Buka file `src/config.js` dengan text editor (seperti Notepad, VSCode, dll) dan ubah bagian `API_URL`:

### Skenario 1: Jalan di Komputer Sendiri (Local)
Jika OpenClaw API Anda berjalan di komputer yang sama (misalnya di port 3000):
```javascript
export const CONFIG = {
  API_URL: "http://localhost:3000", // <-- Ganti dengan port OpenClaw Anda
  API_KEY: "",
  // ...
};
```

### Skenario 2: Jalan di VPS / Hosting
Jika OpenClaw API Anda diletakkan di VPS (server luar):
```javascript
export const CONFIG = {
  API_URL: "http://194.xxx.xxx.xxx:3000", // <-- Ganti IP VPS atau Domain Anda
  API_KEY: "password-rahasia-anda",       // <-- Isi jika API butuh otentikasi
  // ...
};
```

> **Catatan:** Jika `API_URL` dibiarkan kosong `""`, aplikasi akan otomatis menjalankan **Mode Simulasi** (menggunakan data bohongan agar Anda bisa melihat animasi flowchartnya bekerja).

## Cara Menjalankan

### Saat Development / Testing (Di Komputer Anda)
1. Install Node.js jika belum ada.
2. Buka terminal di folder ini, ketik `npm install`.
3. Ketik `npm run dev` untuk menyalakan server lokal.
4. Buka `http://localhost:5173` di browser Anda.

### Cara Upload / Deploy (Ke VPS atau Hosting)
Untuk mengupload dashboard ini agar bisa diakses oleh orang lain secara online:
1. Pastikan `API_URL` di `config.js` sudah diisi dengan URL / IP VPS backend Anda.
2. Jalankan perintah `npm run build` di terminal.
3. Aplikasi akan membuat folder baru bernama **`dist`**.
4. **Copy semua isi folder `dist`** ke web server Anda (Nginx, Apache, Vercel, Netlify, atau tempat Anda biasa menaruh file HTML/Web).
