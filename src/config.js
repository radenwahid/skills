// ==========================================
// PENGATURAN KONEKSI OPENCLAW (SANGAT MUDAH)
// ==========================================

export const CONFIG = {
  // 1. URL API OpenClaw Anda. 
  // Jika Anda menjalankannya di komputer sendiri (Local), gunakan localhost atau IP lokal.
  // Jika di VPS, masukkan IP VPS atau Domain Anda.
  // Contoh Local: "http://localhost:3000" atau "http://127.0.0.1:3000"
  // Contoh VPS: "http://194.xxx.xxx.xxx:3000" atau "https://api.domainanda.com"
  
  API_URL: import.meta.env.VITE_CLAWHUB_API_URL || "", 
  
  // 2. (Opsional) Jika OpenClaw Anda butuh password / API Key
  API_KEY: import.meta.env.VITE_CLAWHUB_API_KEY || "",

  // Pengaturan internal (jangan diubah kecuali paham)
  REFRESH_RATE_MS: 3000, // Kecepatan update realtime (3000 = 3 detik)
};

export const getApiUrl = () => {
  // Jika API_URL kosong, aplikasi otomatis masuk mode "Mock / Simulasi"
  return CONFIG.API_URL.trim();
};
