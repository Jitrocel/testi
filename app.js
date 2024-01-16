// Initialize the map
const map = L.map('map').setView([50, 15], 8); // Default view at coordinates [51, 15] and zoom level 5

// Add a tile layer (you can choose different providers, like Mapbox)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker at a specific location

const marker_smrzovka = L.marker([14.7, 15.2]).addTo(map); // San Francisco, CA coordinates

// Add a popup to the marker
marker_praha.bindPopup("<b>Hello!</b><br>Praha").openPopup();
marker_smrzovka.bindPopup("<b>Hello!</b><br>Smržovka").openPopup();
