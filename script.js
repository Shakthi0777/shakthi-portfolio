
document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
