async function initMap() {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker"); // Import the new library
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  
    const marker = new AdvancedMarkerElement({ // Use AdvancedMarkerElement
      position: { lat: -34.397, lng: 150.644 },
      map: map,
      title: "Hello World!",
    });
  }