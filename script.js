
// Typewriter Effect Function
function typeWriterEffect(element, text, speed = 60) {
  element.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// Show Page Function with Loader + Animation
function showPage(id) {
  // Create transition overlay
  const overlay = document.createElement("div");
  overlay.className = "transition-overlay";
  document.body.appendChild(overlay);

  setTimeout(() => {
    // Hide all sections
    document.querySelectorAll("section").forEach(page => {
      page.classList.remove("active");
    });

    // Show selected section
    const section = document.getElementById(id);
    if (section) {
      section.classList.add("active");

      // Typewriter effect on heading
      const heading = section.querySelector("h2");
      if (heading) typeWriterEffect(heading, heading.dataset.text || heading.textContent);
    }

    // Update active nav link
    document.querySelectorAll("nav a").forEach(link => {
      link.classList.remove("active-link");
    });
    document.querySelector(`nav a[href="#${id}"]`)?.classList.add("active-link");

    overlay.remove();
  }, 600); // overlay duration
}

// On load, show home page
window.onload = () => {
  showPage("home");
};
