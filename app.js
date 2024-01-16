// Initialize the map
const map = L.map('map').setView([49.5, 15], 8); // Default view at coordinates [51, 15] and zoom level 5

// Add a tile layer (you can choose different providers, like Mapbox)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker at a specific location
const marker = L.marker([51, 15]).addTo(map); // San Francisco, CA coordinates

// Add a popup to the marker
marker.bindPopup("<b>Hello!</b><br>This is Prague.").openPopup();
