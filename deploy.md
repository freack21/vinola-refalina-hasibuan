# Panduan Deployment Portofolio di VPS Ubuntu 24.04 (Nginx + NVM)

Panduan ini berisi langkah-langkah komprehensif untuk mendistribusikan (*deploy*) aplikasi portofolio (Vite React + Express Backend) ke server VPS berbasis Ubuntu 24.04.

## 1. Persiapan Awal Server
Masuk ke VPS kamu menggunakan SSH, lalu perbarui daftar paket sistem:
```bash
sudo apt update && sudo apt upgrade -y
```

Install pustaka dasar yang dibutuhkan (termasuk Nginx dan Git):
```bash
sudo apt install -y curl git nginx
```

## 2. Instalasi NVM dan Node.js
Disarankan menggunakan NVM (Node Version Manager) agar lebih mudah mengatur versi Node.js.

```bash
# Download dan jalankan script instalasi NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Muat ulang konfigurasi shell (atau tutup dan buka kembali terminal)
source ~/.bashrc

# Instal Node.js versi LTS (Long Term Support) terbaru
nvm install --lts

# Jadikan versi tersebut sebagai default
nvm use --lts
```
Pastikan instalasi berhasil dengan mengecek versi:
```bash
node -v
npm -v
```

## 3. Clone / Pindahkan Source Code
Letakkan *source code* portofolio ke server VPS. Lokasi standar yang umum digunakan adalah `/var/www/`.

```bash
# Masuk ke direktori web
cd /var/www

# Ganti URL ini dengan URL Git repository Github/Gitlab milikmu
sudo git clone https://github.com/username/vinola-refalina-hasibuan.git

# Ubah kepemilikan direktori ke user kamu agar mudah mengedit/menulis file
sudo chown -R $USER:$USER /var/www/vinola-refalina-hasibuan

# Masuk ke folder proyek
cd vinola-refalina-hasibuan
```

## 4. Instalasi Dependencies & Build Frontend
Install semua pustaka NPM yang digunakan, dan lakukan proses *build* pada kode frontend React.

```bash
# Install dependencies
npm install

# Build frontend (Vite)
# Hasil build ini akan tersimpan ke dalam folder /dist
npm run build
```

## 5. Menjalankan Backend dengan PM2
Kita membutuhkan *process manager* seperti **PM2** agar server Express (`server.js`) berjalan stabil di latar belakang dan dapat *restart* otomatis ketika VPS mengalami kendala/mati daya.

```bash
# Install PM2 secara global
npm install -g pm2

# Jalankan server.js
pm2 start server.js --name "vinola-backend"

# Simpan konfigurasi PM2 agar otomatis berjalan saat server booting
pm2 save
pm2 startup
```
*Catatan: Ikuti instruksi perintah yang muncul di terminal setelah kamu mengetikkan `pm2 startup` lalu eksekusi (tekan enter) instruksi tersebut.*

## 6. Konfigurasi Server Nginx
Nginx bertugas sebagai penengah untuk aplikasi ini, yaitu:
1. Menyajikan (Serve) file HTML/CSS/JS statis hasil *build* React (`/dist`).
2. Meneruskan *request* dari halaman ke `/api/*` menujut *backend* Express (Port `3001`).
3. Mengizinkan publik membaca folder media `public/images/`.

Buat file konfigurasi Nginx baru:
```bash
sudo nano /etc/nginx/sites-available/vinola-portofolio
```

Masukkan konfigurasi berikut di dalam teks editor Nano. Sesuaikan `server_name` dengan domain aslimu (atau gunakan IP VPS jika belum ada domain):
```nginx
server {
    listen 80;
    server_name namadomainkamu.com www.namadomainkamu.com; # Ganti dengan Domain/IP!

    # Arahkan Document Root ke hasil build Vite (folder dist)
    root /var/www/vinola-refalina-hasibuan/dist;
    index index.html;

    # Aturan untuk React Router (mencegah error 404 saat URL direfresh)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Aturan Reverse Proxy untuk API Backend (menuju Express.js di port 3001)
    location /api/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Serve folder public untuk mengamankan data hasil upload di CMS
    location /images/ {
        alias /var/www/vinola-refalina-hasibuan/public/images/;
        access_log off;
        expires max;
    }
}
```
Simpan file (di Nano: tekan `Ctrl+X`, ketik `y`, lalu `Enter`).

Aktifkan konfigurasi website ini:
```bash
# Buat symlink file ke dalam folder sites-enabled
sudo ln -s /etc/nginx/sites-available/vinola-portofolio /etc/nginx/sites-enabled/

# Hapus konfigurasi default bawaan nginx (agar tidak bentrok jika pakai IP public)
sudo rm /etc/nginx/sites-enabled/default

# Lakukan tes syntax Nginx (pastikan output: syntax is ok, test is successful)
sudo nginx -t

# Muat ulang layanan Nginx
sudo systemctl restart nginx
```

## 7. Setup SSL/HTTPS dengan Certbot (Wajib Jika Punya Domain)
Sangat direkomendasikan membuat website portofolio aman dengan akses HTTPS. Let's Encrypt menyediakan SSL gratis via snap:

```bash
# Install Certbot via snap
sudo apt install snapd
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot

# Jalankan Certbot Nginx dan ikuti panduan layar
sudo certbot --nginx -d namadomainkamu.com -d www.namadomainkamu.com
```

---
**🎉 Selamat! Proses Deploy Selesai!**
Portofolio sekarang dapat diakses secara publik menggunakan koneksi yang aman. 

- Halaman Utama: `https://namadomainkamu.com`
- Halaman CMS (Admin): `https://namadomainkamu.com/admin` (Password `vinola123`)
