/*
  ❤️ Dibuat oleh zaenishi
  # Website: zaenishi.xyz
  # Instagram: @zaenishi
  # Twitter: @zaenishi
  # Kontak: 62831-8822-9366
*/

const cheerio = require('cheerio');
const axios = require('axios');

async function waConfigurationSystem(key) {
  try {
    const { data } = await axios.get('https://jamur-user.vercel.app/');
    const $ = cheerio.load(data);
    const config = $('h1').text();
    
    if (key !== config) {
      console.log('Konfigurasi salah, silahkan hubungi creator (62831-8822-9366) untuk mengatasi masalah ini.');
      process.exit(1);
    }

    return 'Konfigurasi benar, lanjutkan proses...';
  } catch (e) {
    return 'Terjadi kendala pada whiskeysockets baileys';
  }
}

module.exports = waConfigurationSystem;
