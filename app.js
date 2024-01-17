// Initialize the map
const map = L.map('map').setView([49.8, 15], 8); // Default view at coordinates [51, 15] and zoom level 5

// Add a tile layer (you can choose different providers, like Mapbox)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker at a specific location

const marker_praha = L.marker([50.083, 14.4]).addTo(map); // San Francisco, CA coordinates
const marker_smrzovka = L.marker([50.7, 15.25]).addTo(map); // San Francisco, CA coordinates
const marker_z_brod = L.marker([50.64, 15.25]).addTo(map); // San Francisco, CA coordinates
const marker_z_brod = L.marker([49, 14.5]).addTo(map); // San Francisco, CA coordinates


// Add a popup to the marker
marker_praha.bindPopup("<b>Hello!</b><br>Praha").openPopup();
marker_smrzovka.bindPopup("<b>Hello!</b><br>Smržovka").openPopup();
marker_z_brod.bindPopup("<b>Hello!</b><br>Železný Brod").openPopup();
marker_z_brod.bindPopup("<b>Hello!</b><br>České Budějovice").openPopup();
