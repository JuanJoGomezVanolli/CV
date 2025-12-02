const mapTitle = document.querySelector("#map-title");
const IssLink = "https://api.wheretheiss.at/v1/satellites/25544";

// Initialize map
let map;
let issMarker;
let issIcon;

// Initialize the map when the page loads
function initMap() {
  // Create map centered on world view
  map = L.map('iss-map').setView([0, 0], 2);

  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 8
  }).addTo(map);

  // Create custom icon for ISS using the ISS image
  issIcon = L.icon({
    iconUrl: 'images/iss.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -25],
    className: 'iss-map-icon'
  });

  // Create initial marker (will be updated)
  issMarker = L.marker([0, 0], {icon: issIcon}).addTo(map);
  issMarker.bindPopup("<b>International Space Station</b><br>Loading position...").openPopup();
}

// Update map with ISS position
function updateMap(latitude, longitude) {
  if (map && issMarker) {
    // Update marker position
    issMarker.setLatLng([latitude, longitude]);
    
    // Update popup with current coordinates
    issMarker.bindPopup(
      `<b>International Space Station</b><br>
       Latitude: ${latitude.toFixed(4)}<br>
       Longitude: ${longitude.toFixed(4)}`
    ).openPopup();
    
    // Center map on ISS position
    map.setView([latitude, longitude], 3);
  }
}

async function getISS() {
  const response = await fetch(IssLink);
  const data = await response.json();
  console.log(data);
  
  // Update map title with coordinates
  mapTitle.textContent = `Coordinates: Latitude ${data.latitude.toFixed(4)}/ Longitude ${data.longitude.toFixed(4)}`;
  
  // Update map
  updateMap(data.latitude, data.longitude);
}

// Initialize map when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMap);
} else {
  initMap();
}

// Fetch ISS data initially and then every 5 seconds
getISS();
setInterval(getISS, 5000);
