// Model verileri
const modeller = {
  "911": {
    isim: "Porsche 911 Turbo S",
    motor: "3.8L çift turbo boxer 6",
    beygir: "650 HP",
    "0_100": "2.6 saniye",
    fiyat: "Başlangıç: 12.000.000₺"
  },
  "taycan": {
    isim: "Porsche Taycan Turbo S",
    motor: "Elektrikli, 800V sistem",
    beygir: "761 HP (overboost ile)",
    "0_100": "2.8 saniye",
    fiyat: "Başlangıç: 9.500.000₺"
  },
  "cayenne": {
    isim: "Porsche Cayenne Turbo GT",
    motor: "4.0L V8 twin-turbo",
    beygir: "631 HP",
    "0_100": "3.3 saniye",
    fiyat: "Başlangıç: 8.200.000₺"
  }
};

// Detayları gösteren fonksiyon
function showDetails(modelKey) {
  const detay = modeller[modelKey];
  
  if (!detay) {
    console.error("Geçersiz model anahtarı:", modelKey);
    return;
  }

  const detayHtml = `
    <div class="detay-kart animate-fade">
      <h3>${detay.isim}</h3>
      <ul>
        <li><strong>Motor:</strong> ${detay.motor}</li>
        <li><strong>Beygir Gücü:</strong> ${detay.beygir}</li>
        <li><strong>0-100 km/h:</strong> ${detay["0_100"]}</li>
        <li><strong>Fiyat:</strong> ${detay.fiyat}</li>
      </ul>
    </div>
  `;

  const detayDiv = document.getElementById("modelDetay");
  detayDiv.innerHTML = detayHtml;
}
