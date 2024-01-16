// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Default view at coordinates [0, 0] and zoom level 2

// Add a tile layer (you can choose different providers, like Mapbox)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker at a specific location
const marker = L.marker([37.7749, -122.4194]).addTo(map); // San Francisco, CA coordinates

// Add a popup to the marker
marker.bindPopup("<b>Hello!</b><br>This is San Francisco.").openPopup();
