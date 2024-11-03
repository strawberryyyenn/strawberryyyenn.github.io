document.addEventListener("DOMContentLoaded", function() {
  const termsSection = document.getElementById("terms");
  const termsContent = document.getElementById("terms-content");

  termsSection.querySelector("h2").addEventListener("click", function() {
    if (termsContent.style.display === "none") {
      termsContent.style.display = "block";
    } else {
      termsContent.style.display = "none";
    }
  });
});