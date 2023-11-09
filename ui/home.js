document.addEventListener("DOMContentLoaded", function() {
    const text = `Welcome to our Air Pollution Monitoring Dashboard, your go-to resource for real-time and historical data on air quality in your area.
  Our mission is to empower you with the knowledge you need to make informed decisions about your daily activities, health, and well-being.
  Air quality affects us all, and our interactive dashboard provides up-to-the-minute Air Quality Index (AQI) readings, pollutant concentrations, and visualizations that help you understand the state of the air in your region.
  Whether you're concerned about outdoor exercise, planning a commute, or simply curious about the air you breathe, our user-friendly platform delivers the information you need.
  Explore our maps, charts, and resources, and stay connected to the latest updates and alerts.
  We're dedicated to fostering a cleaner and healthier environment, one informed choice at a time.`;
    
    const typingText = document.getElementById("typing-text");
    const lines = text.split('\n');
    let lineIndex = 0;
    let charIndex = 0;
  
    function typeLine() {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          typingText.innerHTML += lines[lineIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeLine, 30); // Adjust the typing speed here (smaller value for faster typing)
        } else {
          typingText.innerHTML += '<br>'; // Move to the next line
          charIndex = 0;
          lineIndex++;
          setTimeout(typeLine, 1000); // Delay after completing a line
        }
      }
    }
  
    typeLine();
  });
  